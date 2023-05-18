from fastapi import APIRouter, Depends, HTTPException
from models import EventIn, EventOut, EventList
from queries.events import EventQueries

router = APIRouter()

@router.post("/events", response_model=EventOut)
async def create_event(
    event: EventIn,
    repo: EventQueries = Depends()
    # need to add user validation here, see books example
):
    event = repo.create(event)
    return event


@router.get("/events", response_model=EventList)
async def list_events(
    repo: EventQueries = Depends()
):
    return EventList(events = repo.get_all())
