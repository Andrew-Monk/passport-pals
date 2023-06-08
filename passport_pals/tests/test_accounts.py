from fastapi.testclient import TestClient
from main import app
from queries.accounts import AccountQueries
from authenticator import authenticator

client = TestClient(app)


class EmptyAccountQueries:
    def get_account(self):
        return []

    def get(self, email):
        return {
            "email": "test2@test2.com",
            "language": "test2language",
            "country": "test2country",
            "password": "abc",
            "full_name": "test2name",
            "attending": [
                "647a54b1e863d505bfb88137",
            ],
            "hosting": [
                "647a640fe19ccd42b91df32e",
            ],
            "id": "64791e5ba56860f4ad9993ef",
        }


def get_current_account_data_fake():
    return {"id": "64791e5ba56860f4ad9993ef", "email": "test2@test2.com"}


def test_get_account():
    # arrange
    app.dependency_overrides[AccountQueries] = EmptyAccountQueries
    app.dependency_overrides[
        authenticator.try_get_current_account_data
    ] = get_current_account_data_fake

    # act
    response = client.get("/api/accounts/64791e5ba56860f4ad9993ef/")

    # cleanup
    app.dependency_overrides = {}

    # assert
    assert response.status_code == 200
    assert isinstance(response.json(), dict)
    assert response.json() == {
        "email": "test2@test2.com",
        "language": "test2language",
        "country": "test2country",
        "password": "abc",
        "full_name": "test2name",
        "attending": [
            "647a54b1e863d505bfb88137",
        ],
        "hosting": [
            "647a640fe19ccd42b91df32e",
        ],
        "id": "64791e5ba56860f4ad9993ef",
    }
