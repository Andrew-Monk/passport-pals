from bson.objectid import ObjectId
from typing import List
from .client import Queries
from models import EventIn, EventOut
from pymongo import ReturnDocument

class EventQueries(Queries):
    DB_NAME = "passportpals"
    COLLECTION = "events"

    def create(self, event: EventIn) -> EventOut:
        props = event.dict()
        self.collection.insert_one(props)
        props["id"] = str(props["_id"])
        return EventOut(**props)

    def get_all(self) -> List[EventOut]:
        events = list(self.collection.find())
        for event in events:
            event["id"] = str(event["_id"])
        return events

    def event_detail(self, event_id: str) -> EventOut:
        event = self.collection.find_one({"_id": ObjectId(event_id)})
        if not event:
            return None
        event["id"] = str(event["_id"])
        return EventOut(**event)

    def update_event(self, id: str, event: EventIn) -> EventOut:
        props = event.dict()
        inserted_event = self.collection.find_one_and_update(
            {"_id": ObjectId(id)},
            {"$set": props},
            return_document=ReturnDocument.AFTER,
        )
        print("inserted event", inserted_event)
        return EventOut(**inserted_event, id=id)

    def delete_event(self, id: str) -> bool:
        return self.collection.delete_one({"_id": ObjectId(id)})
