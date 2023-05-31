from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime


class EventIn(BaseModel):
    event_title: str
    location: str
    expected_guests: Optional[list]
    picture: str
    category: str
    cost: int
    language: str
    payment_type: str
    date: datetime
    description: str
    #host: str


class EventOut(EventIn):
    id: str


class EventList(BaseModel):
    events: List[EventOut]

class AccountIn(BaseModel):
    email: str
    language: str | None
    country: str | None
    password: str
    full_name: str | None
    attending: Optional[list]
    hosting: Optional[list]

class AccountOut(AccountIn):
    id: str
