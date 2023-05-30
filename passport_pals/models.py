from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime


class AccountIn(BaseModel):
    email: str
    password: str
    full_name: str


class AccountOut(AccountIn):
    id: str


class EventIn(BaseModel):
    event_title: str
    location: str
    expected_guests: Optional[list]
    # contains all attendees ids ^^
    picture: str
    category: str
    cost: int
    language: str
    payment_type: str
    date: Optional[datetime]
    description: str


class EventOut(EventIn):
    id: str


class EventList(BaseModel):
    events: List[EventOut]

class AccountIn(BaseModel):
    email: str
    language: str
    country: str
    password: str
    full_name: str
    attending: Optional[list]
    hosting: Optional[list]
    # can put event id's in these lists ^^

class AccountOut(AccountIn):
    id: str
