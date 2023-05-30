from fastapi import FastAPI
from .client import Queries
from models import AccountIn, AccountOut
from pymongo.errors import DuplicateKeyError


class DuplicateAccountError(ValueError):
    pass


class AccountQueries(Queries):
    DB_NAME = "passport_pals"
    COLLECTION = "accounts"

    def get(self, email: str) -> AccountOut:
        props = self.collection.find_one({"email": email})
        if not props:
            return None
        props["id"] = str(props["_id"])
        return AccountOut(**props)

    def create(self, info: AccountIn, hashed_password: str) -> AccountOut:
        props = info.dict()
        props["password"] = hashed_password

        try:
            self.collection.insert_one(props)
        except DuplicateKeyError:
            raise DuplicateAccountError()
        props["id"] = str(props["_id"])
        return AccountOut(**props)

    def get_user_by_id(self, id: str) -> AccountOut:
        props = self.collection.find_one({"_id": id})
        if not props:
            return None
        props["id"] = str(props["_id"])
        return AccountOut(**props)

# account id, event id, hsoting/attending
