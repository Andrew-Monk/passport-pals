from pydantic import BaseModel, Optional
from typing import List

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

class AccountIn(BaseModel):
    email: str
    password: str
    full_name: str

class AccountOut(AccountIn):
    id: str

class Attending(BaseModel):
    email: str
    group_size: int
    country: str
    event: EventOut.id
