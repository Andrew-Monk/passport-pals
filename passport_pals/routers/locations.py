from fastapi import APIRouter

from queries.locations import get_locations

router = APIRouter()

@router.get("/api/locations")
def fetch_locations():
    locations = get_locations()
    return {"locations": locations}
