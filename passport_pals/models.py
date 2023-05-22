from pydantic import BaseModel
from typing import List


class AccountIn(BaseModel):
    email: str
    password: str
    full_name: str


class AccountOut(AccountIn):
    id: str


class EventIn(BaseModel):
    event_title: str
    location: str
    picture: str
    category: str
    cost: int
    language: str
    payment_type: str
    date: str
    description: str


class EventOut(EventIn):
    id: str


class EventList(BaseModel):
    events: List[EventOut]
