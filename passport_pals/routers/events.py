from fastapi import APIRouter, Depends, HTTPException
from models import EventIn, EventOut
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
