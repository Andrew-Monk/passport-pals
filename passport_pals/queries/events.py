from bson.objectid import ObjectId
from typing import List
from .client import Queries
from models import EventIn, EventOut

class EventQueries(Queries):
    DB_NAME = "passportpals"
    COLLECTION = "events"

    def create(self, event: EventIn) -> EventOut:
        props = event.dict()
        print(props)
        self.collection.insert_one(props)
        props["id"] = str(props["_id"])
        return EventOut(**props)
