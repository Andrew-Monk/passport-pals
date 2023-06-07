## June 09, 2023

Today, I worked on:

* Adding the

## June 08, 2023

Today, I worked on:

* Adding the

## June 07, 2023

Today, I worked on:

* Adding the unit tests

As a group we worked on the unit tests. We did live share so that
we could each add our own unit test and worked with each other to
debug and get them working.

## June 06, 2023

Today, I worked on:

* Adding the rest of the account detail page (attending events)

Today we spent a lot of time troubleshooting a bug we were
getting where the data on the user account page wouldnt refresh
until the user logged out and logged back in. Eventually an
instructor helped us fix our code and stopped using "fetch with
cookie". After our bugs were fixed, we were able to complete our
account details page so that events that the user is attending
now populates, and we added route protection to make sure people
are signed in on the pages the need to be signed up for.

## June 05, 2023

Today, I worked on:

* Adding the Logout, filter, and dropdown menu

We split into pairs again in order to tackle more work as
this is our last week for the project. My partner and I were
able to add a filter to our list page that allows the user to
filter through the events by categories that they are interested
in. We also added a category dropdown bar in the "create event"
form so that users can only select predetermined categories.
Lastly we finished up with the Log out button.


## June 02, 2023

Today, I worked on:

* Adding the event ids to account info

We spent the entire day troubleshooting and had lots of
help, by the end of the day we were able to get everything
working again, we had an issue where we were trying to use
an email as the username but the code in the tsx file was
looking for an actual username.


## June 01, 2023

Today, I worked on:

* Adding the event ids to account info

Today we tried to tackle the beast of attaching event
IDs to user's account info so that we could display the
events that they were attending and hosting. First we tried
to think through it and come up with ideas of how the logic
would make the most sense and then started to play with our
code. We had it mostly working but experienced a weird bug
when we merged and couldnt sort it out by the end of the day.


## May 31, 2023

Today, I worked on:

* Adding the account detail page

Worked in pairs to start on the account detail page.
We knew pulling the event data was going to be a beast
but we wanted to at least get the skeleton of the page
done where all we needed left was that last bit of
functionality.


## May 30, 2023

Today, I worked on:

* Adding the login feature and account sign up feature

We finally got our login function to work and then as a
group got to work on our account sign up feature. We
needed to troubleshoot a bit but eventually got it
working by the end of the day.


## May 26, 2023

Today, I worked on:

* Adding the login feature

We kept working on the login feature and ended up needing
help from the SEIRs and Instructors. We made a lot of
progress but didnt quite finish before the end of the day.


## May 25, 2023

Today, I worked on:

* Adding the login feature

We started working on the login feature and quickly realized
how much of a beast it would be. We spent most of the day
troubleshooting and got decently far by the end of the day
but didnt quite finish.


## May 24, 2023

Today, I worked on:

* Adding the List of Events page, and Create an Event form

We split in to pairs to divide and conquer. My partner and I
were able to get the List of Events page done pretty easily
as it was similar to the code we did yesterday. We ran into
issues for the Create an Event form and after a lot of
troubleshooting we decided deleting and rebuilding containers
might be best.

We were also able to add a feature to the main page that shows
only 3 random events.

## May 23, 2023

Today, I worked on:

* Adding the "delete event" codes, and started
front-end

Our group added the delete event code before lunch and
got it to work pretty easily. After that we decided
we were at the point where we wanted to start working
on the front end to see how our code was working and
if we needed to eventually change it somehow or highlight
if we were missing anything.

Front-end stuff started out slow, but eventually we were
able to pull a list of events for the home page and also
set up a nav bar. We will focus on beautification later.

## May 22, 2023

Today, I worked on:

* Adding the "update event" codes

Our group started working on the update event function
thinking it would be easy but it was not. We tried to
make our own code because we had nothing to reference
but it was weird because we would get it to update but
simultaneously give us an error.

Eventually we had to get help from a SEIR who also couldnt
figure out how to fix our code so instead gave us a good
reference code that we could use to guide us. After
that the code worked fine!


## May 18, 2023

Today, I worked on:

* Adding the "list events" codes

Our group split into pairs so that we could tackle
two functionalities in one afternoon. Rebecca and I
worked on the "list events" code. We added code to
the queries file, models file, and routers file.

When we went to Swagger we got it to return an empty
list but when we went to add a test event we had an
ID error, we added some extra code to our queries
and it was fixed.

## May 17, 2023

Today, I worked on:

* Setting up our first fast api codes

As a group, we worked through our first codes to
ensure we all knew what we were doing. We created
our "create event" fast apis. We started by writing
the event in and event out models, then we added the
queries code, the routers code, and finally the code
to main.py.

We went over to Swagger to test it out and got several
errors. Eventually we realized we were missing part of
our routers code and as soon as we added that it was
working!
