from fastapi.testclient import TestClient
from main import app
from queries.events import EventQueries
from authenticator import authenticator

client = TestClient(app)


def get_current_account_data_fake():
    return {"id": "64791e5ba56860f4ad9993ef", "email": "test2@test2.com"}


class EmptyEventQueries:
    def list_events(self):
        return []

    def get_all(self):
        return [
            {
                "event_title": "Tequila Tasting",
                "location": "Mexico City",
                "expected_guests": None,
                "picture": "test",
                "category": "Food/Drink",
                "cost": 20,
                "language": "Spanish",
                "payment_type": "Venmo",
                "date": "2023-07-19T17:00:00",
                "description": "Come enjoy the booze!",
                "id": "647915ca20824b2b974e3f50",
            },
            {
                "event_title": "Tequila Tasting",
                "location": "Mexico City",
                "expected_guests": None,
                "picture": "test",
                "category": "Food/Drink",
                "cost": 20,
                "language": "Spanish",
                "payment_type": "Venmo",
                "date": "2023-07-19T17:00:00",
                "description": "Come enjoy the booze!",
                "id": "647915ca20824b2b974e3f50",
            },
        ]

    def event_detail(self, event_id):
        return {
            "event_title": "1",
            "location": "string",
            "expected_guests": ["string"],
            "picture": "string",
            "category": "string",
            "cost": 0,
            "language": "string",
            "payment_type": "string",
            "date": "2023-06-05T18:02:40.945000",
            "description": "string",
            "id": "647e23473d42688a1ea19ee4",
        }

    def delete_event(self, id):
        return "true"


def test_list_events():
    # arrange
    app.dependency_overrides[EventQueries] = EmptyEventQueries

    # act
    response = client.get("api/events")

    # cleanup
    app.dependency_overrides = {}

    # assert
    assert response.status_code == 200
    events = response.json()["events"]
    assert len(events) == 2
    assert events[0]["event_title"] == "Tequila Tasting"
    assert events[1]["language"] == "Spanish"


def test_event_detail():
    # arrange
    app.dependency_overrides[EventQueries] = EmptyEventQueries

    # act
    response = client.get("/api/events/647e23473d42688a1ea19ee4/")

    # cleanup
    app.dependency_overrides = {}

    # assert
    assert response.status_code == 200
    assert isinstance(response.json(), dict)
    assert response.json() == {
        "event_title": "1",
        "location": "string",
        "expected_guests": ["string"],
        "picture": "string",
        "category": "string",
        "cost": 0,
        "language": "string",
        "payment_type": "string",
        "date": "2023-06-05T18:02:40.945000",
        "description": "string",
        "id": "647e23473d42688a1ea19ee4",
    }
    assert response.json()["event_title"] == "1"
    assert response.json()["language"] == "string"


def test_delete_event():
    # arrange
    app.dependency_overrides[EventQueries] = EmptyEventQueries
    app.dependency_overrides[
        authenticator.try_get_current_account_data
    ] = get_current_account_data_fake

    # act
    response = client.delete("/api/events/647e23473d42688a1ea19ee2")

    # cleanup
    app.dependency_overrides = {}

    # assert
    assert response.status_code == 200
    assert isinstance(response.json(), bool)
