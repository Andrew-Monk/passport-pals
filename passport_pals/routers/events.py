from fastapi import APIRouter, Depends, HTTPException, Response, status
from models import EventIn, EventOut, EventList
from queries.events import EventQueries
from authenticator import authenticator
from bson import ObjectId
from typing import Optional
from queries.accounts import AccountQueries

router = APIRouter()


@router.post("/api/events/create", response_model=EventOut)
async def create_event(
    event: EventIn,
    repo: EventQueries = Depends(),
    account_data: dict = Depends(authenticator.try_get_current_account_data),
    account_repo: AccountQueries = Depends(),
):
    print("event", event)
    created_event = repo.create(event)
    try:
        if account_data is None or "id" not in account_data:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="User authentication required",
            )
        if not event:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Event not found",
            )
        event_id = created_event.id
        props = account_repo.collection.find_one(
            {"_id": ObjectId(account_data["id"])}
            )
        if "hosting" not in props:
            props["hosting"] = []
        props["hosting"].append(event_id)
        account_repo.collection.update_one(
            {"_id": ObjectId(account_data["id"])},
            {"$set": props},
        )
    except Exception as e:
        print("e:", e)
        raise HTTPException(status_code=500, detail="Internal server error")

    return created_event


@router.get("/api/events/{event_id}/", response_model=EventOut)
async def event_detail(
    event_id: str,
    response: Response,
    repo: EventQueries = Depends()
):
    event = repo.event_detail(event_id)
    if event is None:
        response.status_code = 404
    else:
        return event


@router.get("/api/events", response_model=EventList)
async def list_events(repo: EventQueries = Depends()):
    return EventList(events=repo.get_all())


@router.put("/api/events/{event_id}", response_model=EventOut)
def update_event(
    event_id: str,
    event_in: EventIn,
    response: Response,
    queries: EventQueries = Depends(),
):
    record = queries.update_event(event_id, event_in)
    if record is None:
        response.status_code = 404
    else:
        return record


@router.delete("/api/events/{event_id}", response_model=bool)
async def delete_event(
    event_id: str,
    repo: EventQueries = Depends(),
    # account: dict = Depends(?????),
):
    repo.delete_event(id=event_id)
    return True


# make a new router to add event id, remove event id, add hosted event id, remove hosted event id, add attendee to event, remove attendee from event
