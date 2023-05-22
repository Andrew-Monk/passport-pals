## Journals

## 5/18
* Create event_detail with Andrew

Built the event_detail endpoint and functionality.  We tested with the FastAPI doc and had to work through some server 500 errors.  starting to figure out how bson works.  and why we add prop[id]=str(prop[_id]), so it conforms with the expected output of the EventOut model.
Used live share for the first time and enjoyed following along as Andrew drove


## 5/17
* Create an event with the whole group

We started with building out the EventIn and EventOut models, then added the queries class for Event and the event router path and post function.  We tested this in our FastAPI doc and saw the data also return in Compass
When going to push my code from local to remote, we ran into an problem and realized it was occurring because GitLab was down


## 5/16
* Creating authorization for our application with Rebecca

We followed the JWTdown for FastAPI documentation
I had an "ah-ha" moment when we kept running into a 500 server error because our hashed password was already in our code, so we couldn't include it in our return model
Rebecca and I built out folder structure to include queries and routers folders and models and authenticator files
We set up MongoDB Compass and practiced data exporting and importing

## 5/15
* Building out the docker-compose.yaml file with the whole group

We added pymongo and jwtdown to our requirements
As a group, we decided to forgo the mongo express and are using mongodb compass instead
We realized we can just run docker compose up to spin up our containers, instead of starting with docker compose build