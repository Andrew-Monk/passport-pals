import os
from fastapi import Depends
from jwtdown_fastapi.authentication import Authenticator
from queries.accounts import AccountQueries
from models import AccountOut


class MyAuthenticator(Authenticator):
    async def get_account_data(
        self,
        email: str,
        accounts: AccountQueries,
    ):
        print("getting account data")
        return accounts.get(email)

    def get_account_getter(
        self,
        accounts: AccountQueries = Depends(use_cache=False),
    ):
        return accounts

    def get_hashed_password(self, account: AccountOut):
        return account.password

    def get_account_data_for_cookie(self, account: AccountOut):
        return account.email, AccountOut(**account.dict())

authenticator = MyAuthenticator(os.environ["SIGNING_KEY"])
