# Please Note Instructors!

### In the gitlab, see large amounts of journals being committed at once rather than on a daily basis because a combination of git merge/conflict/pull confusion and because I had another file I was recording the journals in. Journals were made on a daily basis

## Friday, June 9th

Our project seems to be deployed but only the frontend, not the backend. Apparently it's because the quota on Google or Cirrus is not high enough. And Andrew said we might just have to wait for it to be deployed. Also, we met with Candice instructor and demoed our project and she liked it.

## Thursday, June 8th

We were working on deployment all day today, and I also wrote the entire README and docs. We were unable to solve deployment because Andrew is busy the rest of the day and said he may be able to meet us tmrw. We have part of the deployment tests passing but not all of them.

## Wednesday, June 7th

We worked more on CSS and also fixed a bunch of errors that were in our console because we had to fix those before deployment could run. Tomorrow we will work on deployment and we hope to meet with Andrew to do so.

## Tuesday, June 6th

We had to make a pydantic model in with email and account_id because the url could not process the @ symbol (when we were trying to make our account detail list refresh without logging in and out). It was a bug in JWTdown (according to Andrew). I had added a bunch of CSS then we painfully merged it. All the main functionality should be good now.

## Monday, June 5th

We split up, and we were struggling to make a sign up button while Stesha and Maggie did some filters for categories on the event list. We had so much trouble and stayed until 8 ET. Hopefully Andrew can help us tomorrow.

## Friday, June 2nd

We are struggling still, none of the instructors, SEIRS, or fellow students have been able to help us/know what to do. Our backend and frontend work independently from eachother but not together.

## Thursday, June 1st

We are struggling getting the host event form to work, it's sending an event to the database but I'm not sure if its actually adding event to the logged in user/account, and were getting errors in the console. This all happened we pushed btw.

## Wednesday, May 31st

We continued to add multiple features/components/forms that are needed and attempted to add protected routes on the front end. But we might need to change that because routes shouldn't be protected on the front-end.

## Tuesday, May 30th

We added a bunch of multiple/features/components/forms by splitting off into pairs and working on it together. Andrew and I worked on trying to think about how to add protected routes.

## Friday, May 26th

We worked on the sign up page with Andrew while Maggie and Stesha worked on the categories. At the end of the day we met up and explained what we did and both of our functionalities work.

## Thursday, May 25th

Finally seem to have working endpoints, so I think we can start working on components. We made a bunch of .js files and kind of wireframed them out and put them in our App.js so that they can be built upon.

## Wednesday, May 24th

We continued to work on finishing the rest of our endpoints, which took a long time because we had to make sure the queries and routers had all the write variables in the right place. Tomorrow will continue working on endpoints.

## Tuesday, May 23rd

We wrote our delete endpoint and finally started working on the frontend. We tried to figure out how to install react-router-dom and ended up in a whole mess.

## Monday, May 22nd

We struggled a lot with the update endpoint, and at the end of the day, a SEIR helped us figure it out. We kept getting errors all day before that. We are the only ones using Mongo in the class as far as I know, or at least one of the very few.

## Thursday, May 18th

We split up in groups to work on endpoints. Each pair got two endpoints to work respectively. I'm still confused by the code but we managed to make it work by cobbling together screenshots from instructors...

## Wednesday, May 17th

We finally got our first create_event endpoint to work, we worked all together to debug and make it happen. Turns out, we didn't even define an event variable so we were trying to return something that didn't exist. We used examples from the instructors to guide us (like the books example) and I still don't totally understand FastAPI at all really. An ah-ha moment was, of course, we have to create an event object first, duh.
