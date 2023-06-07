# router.py
from fastapi import (
    Depends,
    HTTPException,
    status,
    Response,
    APIRouter,
    Request,
)
from jwtdown_fastapi.authentication import Token
from authenticator import authenticator
from pydantic import BaseModel
from bson.objectid import ObjectId
from queries.events import EventQueries

from queries.accounts import (
    AccountIn,
    AccountOut,
    AccountQueries,
    DuplicateAccountError,
)


class AccountForm(BaseModel):
    username: str
    password: str


class AccountToken(Token):
    account: AccountOut


class HttpError(BaseModel):
    detail: str

class SignUpEvent(BaseModel):
    email: str
    event_id: str


router = APIRouter()


@router.post("/api/accounts", response_model=AccountToken | HttpError)
async def create_account(
    info: AccountIn,
    request: Request,
    response: Response,
    accounts: AccountQueries = Depends(),
):
    hashed_password = authenticator.hash_password(info.password)
    try:
        account = accounts.create(info, hashed_password)
    except DuplicateAccountError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Cannot create an account with those credentials",
        )
    form = AccountForm(username=info.email, password=info.password)
    token = await authenticator.login(response, request, form, accounts)
    return AccountToken(account=account, **token.dict())

@router.get("/api/accounts/{email}", response_model=AccountOut)
async def get_account(
    email: str,
    repo: AccountQueries = Depends(),
    account_data: dict = Depends(authenticator.try_get_current_account_data),
):
    if account_data is None or "id" not in account_data:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="User authentication required",
        )
    account = repo.get(email)
    return account

@router.get("/token", response_model=AccountToken | None)
async def get_token(
    request: Request,
    account: AccountOut = Depends(authenticator.try_get_current_account_data, use_cache=False),
    account_data: AccountQueries = Depends()
) -> AccountToken | None:
    if authenticator.cookie_name in request.cookies:
        token_data = {
            "access_token": request.cookies[authenticator.cookie_name],
            "type": "Bearer",
            "account": account_data.get_user_by_id(account["id"])
        }
        return AccountToken(**token_data)

@router.put("/api/accounts")
async def event_signup(
    signup_event: SignUpEvent,
    account_data: dict = Depends(
        authenticator.try_get_current_account_data
        ),
    event_data: EventQueries = Depends(),
    repo: AccountQueries = Depends(),
):
    email = repo.get(signup_event.email)
    event_id = event_data.collection.find_one({"_id": ObjectId(signup_event.event_id)})
    event = event_id["_id"]

    if account_data is None or "id" not in account_data:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="User authentication required",
        )
    if not event_id:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Event not found",
        )
    props = repo.collection.find_one(
        {"_id": ObjectId(account_data["id"])}
        )
    if "attending" not in props:
        props["attending"] = []
    props["attending"].append(str(event))
    repo.collection.update_one(
        {"_id": ObjectId(account_data["id"])},
        {"$set": props},
    )
    return "Event signup successful!"
