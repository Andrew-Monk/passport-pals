from fastapi import APIRouter
from .keys import GEOCODIFY_KEY
router = APIRouter()


@router.get("/api/geocodify-key")
def get_geocodify_key():
    return {"geocodify_key": GEOCODIFY_KEY}
