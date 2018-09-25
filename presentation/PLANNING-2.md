# Message

approval testing is something that can help initiate important conversations and catch UI regression

# outline

## Introduction

- Greeting
  - Visual regression. wow. Tough problem. Who sufferes with UI regression right now?
  - This is how I feel about UIregressions. It's like unicorns and rainbows
  - I want to talk about the journey that I am currently on. I am a continuous learner which means that I never feel like my learning journeys are complete. This is one of my current journeys
  - I've worked on applications with a frontend for more that 10 years
  - I want a fast and cheap way to start conversations about the UI before we find out it's broken in prod


## Point 1

2011 - 2013 was the first time my teams started to work closely with a specialised UX. Massive portal and CMS for advertisers.

- We'd put in place a fantastic automation pyramid including an automated acceptance testing suite which always provoked the right conversations. Lot's of BDD lessons we applied.
- Features always "worked"
- Visually we always ended up with sloth and a frustrated UX


I took a hiatus from the frontend at this point because I just could not keep up with all the change. We had AngularJS, Backbone, Ember, bootstrap, bower, yeoman, grunt, gulp.

## Point 2

2016 it felt like the churn was starting to slow down and as a generalist I started to wander back to the frontend ecosystem again.

- Loads of unit tests, some BDD has started to appear
- One of the first defects I needed to track down was a bunch of components were not aligned by a couple of pixels
- When I had a closer look, I could see there was still a lot of testing at the page level.
  - Components duplicated

When I looked at the possibilities I found example frameworks that all worked at the pages, examples using a production URL to compare your pre-production version. There had to be a better way, a better approach. 2016 I attended a GOTO conference in Chicago and was lucky enough to get some time with Llewellyn Falco. if you get the chance follow him. I discovered that there was an approach, not even a new approach, that dealt with someone knowing what right is.

## Point 3

2017 I started realise that approval testing is exactly the sort of approach that could initiate those conversations.

- There is no upfront assertion so we can enable conversation and collaboration around the look and feel
- When we're happy we identify the golden master
- If we focus approval testing on a component library or better a style guide using the component library then we've also separated concerns and enabled evolution of our production application.

A well implemented approval testing approach is meant to be fast to approve. This is key, getting back to green needs to be as fast as a revert or approving the change in the UI.


## Conclusion

### Signal the end

- We're still seem to test the styles the same way we test the business logic. It's different and needs different approaches
- Approval testing is a way, given the right context, to cheaply initiate discussions early in a change, and ensure we remember the outcomes of those discussions
- Explore frameworks like approvals. If you have a way to define a "golden master", then more off the self components could help you. These components are generic and are not web framework specific
- Testing appropriately for the system under test is always key to making suites maintainable. Approval testing is now in your toolbox and can be used to help you keep your style.



# Introduction-old

My name is Arran Bartish and I am one of the Dev leads at TEKsystems

# Who am I

![Profile headshot][profile-picture]

Twitter : @arranbartish

# Resources

[magical-unicorn]: ./images/unicorn-running-on-rainbows.png
[goonies-sloth]: ./images/sloth.jpg
[sick-unicorn]: ./images/unicorn-sick.jpeg
[profile-picture]: https://www.gravatar.com/avatar/6809b059aefba706f879bc4606f3dcdc?size=200
[magical-pegacorn]: ./images/Unicorn-Image-1.jpg
[sick-pegacorn]: ./images/Unicorn-Image-2.jpg