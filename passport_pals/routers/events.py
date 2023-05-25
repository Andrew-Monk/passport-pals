from fastapi import APIRouter, Depends, HTTPException, Response
from models import EventIn, EventOut, EventList
from queries.events import EventQueries

router = APIRouter()

@router.post("/api/events/create", response_model=EventOut)
async def create_event(
    event: EventIn,
    repo: EventQueries = Depends()
    # need to add user validation here, see books example
):
    event = repo.create(event)
    return event


@router.get("/api/events/{event_id}/", response_model=EventOut)
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


@router.get("/api/events", response_model=EventList)
async def list_events(
    repo: EventQueries = Depends()
):
    return EventList(events=repo.get_all())

@router.put("/api/events/{event_id}", response_model=EventOut)
def update_event(
    event_id: str,
    event_in: EventIn,
    response: Response,
    queries: EventQueries = Depends(),
):
    record = queries.update_event(event_id, event_in)
    if record is None:
        response.status_code = 404
    else:
        return record

@router.delete("/api/events/{event_id}", response_model=bool)
async def delete_event(
    event_id: str,
    repo: EventQueries = Depends(),
    # account: dict = Depends(?????),
):
    repo.delete_event(id=event_id)
    return True

# make a new router to add event id, remove event id, add hosted event id, remove hosted event id, add attendee to event, remove attendee from event
