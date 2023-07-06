from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from authenticator import authenticator
from routers import accounts, events, geocodify
import os

app = FastAPI()
app.include_router(authenticator.router, tags=["Auth"])
app.include_router(accounts.router, tags=["Accounts"])
app.include_router(events.router, tags=["Events"])
app.include_router(geocodify.router, tags=["Geocodify"])


app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.environ.get("CORS_HOST", "http://localhost:3000")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Hello": "World"}
