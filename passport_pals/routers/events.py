from fastapi import APIRouter, Depends, HTTPException, Response
from models import EventIn, EventOut
from queries.events import EventQueries

router = APIRouter()

@router.post("/api/events", response_model=EventOut)
async def create_event(
    event: EventIn,
    repo: EventQueries = Depends()
    # need to add user validation here, see books example
):
    event = repo.create(event)
    return event


@router.get("/api/events/{event_id}", response_model=EventOut)
async def event_detail(
    event_id: str,
    response: Response,
    repo: EventQueries = Depends()
):
    event = repo.event_detail(event_id)
    if event is None:
        response.status_code = 404
    else:
        return event
