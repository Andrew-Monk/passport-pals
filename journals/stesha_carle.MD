## Journals


## 6/8
*Started deployment, updated unit tests

When we added our protected backends, our tests were no longer passing because they were missing the authenticator piece.  Once we added that, the passed

## 6/7
* created unit tests, added more protected backends

They work!  Got some clarity on the return of the mock functions, but went well.

## 6/6
* fixed frontend for signing up for events and fixed frontend for not rendering updated data to our account page

With the help of Andrew Singley, we made some big improvements on our functionality, mainly finding a bug in the backend code on how data was fetched.  Added a pydantic model to include email and event_id, the url cannot process the @ symbol from our email address.  We also added credentials: include to our get cookie function to make sure we were returning updated account data, so we could see events after creating (and signing up for them) in the accounts page.


## 6/5
* added filter open to list of events, protected the host event, created the front end log in feature

Worked with Maggie yesterday to add a lot of features, update the nav bar.  Coding was really smooth and efficient


## 6/2
* adding event ids to accounts

Worked with the team to debug some merged code.  Finally got it working to where it was yesterday.  One issue we are having is that our events are showing up, but only updating after we log back in again.


## 6/1
* adding event ids to accounts

Worked with the team to add event ids to the hosting list on the account that created/is hosting the event.  Took a lot of logic, time, leaning on others, but got it up in running.  Ended up accessing the model by using the find_one to get the given id, then appended that to the host list, then update the collection by the id (that now includes the new list with ids).  The hardest thing to work around was not rewriting the host list every time we updated the account.
We were also able to make the update to the AccountDetails page to pull the events specific to the logged in user.
That is until we merged code and we lost a lot of functionality.
We also noticed we were running off two db names, passportpals and passport_pals, not sure if that interfered with our code after merging or not


## 5/31
* created the account detail page

Worked with Maggie to create the account detail page using the fetchWithCookie method.  We are able to retrieve account details from the user's token when the user is logged in.


## 5/30
* created the login page, created the sign up page

Finally a successful login page!  And log out page!  Worked with the whole group to debug the login and create the logic for the logic button.  An aha moment in recognizing the use of our paths and making sure they were consistent through our code
Created a sign up page with the whole team, redirects to the login page using the navigate method

## 5/26
* creating the login page

Long day of troubleshooting front end choices and how to move forward with creating our front end page.  Choose to use jwtdown-for-react, working through some errors

## 5/25
* creating the front end for event detail

Continued to work with Rebecca and were able to return details for an individual event.  Started working on the login page


## 5/24
* creating the front end for event detail

Had a fun moment realizing we omitted code from a previous push, so got that back up and running
Partnered with Rebecca to work on the event detail page.  We are returning the data that we want for each event.  We added the form to attend an event.  We need to work out the logic so if someone signs up for an event or hosts an event that it appears on the user page specific to that user.  To be continued tomorrow.


## 5/23
* Create delete_event with whole team, updated update_event, React home page, react nav bar

We changed our update_event function to return the actual changed document instead of the changed props being returned.
Delete was pretty simple, just made sure the id=event_id
Created react home page and the navbar - very basic for now, but functionality is there and was able to pull data from our backend successfully, so that's fun!
Had to add react-router-dom to our dependencies by doing an npm install, realized that package.json is the set up for our front end, so we had to rerun our images and spin up our container to see the changes
Also had a fun moment of restoring to a previous commit


## 5/21
* Created update_event with whole team

Took most of the day figuring out how to make the update function work.  Ended up using the return document to get our updated data back. And props=event.dict() to get request body and turn it into a dictionary.  Learned that $set places new info in and updates a single instance and replaces entire dictionary.  We were stuck on having it update, but resetting all the other fields and receiving a 500 error in swagger.  We were able to verify that the user is not able to login without valid username and password.


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
