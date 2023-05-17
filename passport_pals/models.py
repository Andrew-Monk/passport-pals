from pydantic import BaseModel
from typing import List

class AccountIn(BaseModel):
    email: str
    password: str
    full_name: str

class AccountOut(AccountIn):
    id: str
    # password: str

# class AccountOutWithPassword(AccountOut):
#     hashed_password: str
