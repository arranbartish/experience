# Introduction

My name is Arran Bartish and I am one of the Dev leads at TEKsystems

# Who am I

![Profile headshot][profile-picture]

Twitter : @arranbartish

I started leading teams in 2001 and started consulting in 2003.

Constantly moving around projects and domains I've fallen into being a generalist.
Now a generalist probably means that either I know a little about a lot, or know very little about almost everything. If you want to see the weird range of things i've worked on, you can connect with me on linkedin

# What's the problem

Over the years i've worked on server rendered front ends more recently Single Page Applications.

- componetized and monolithic in both cases.

So let's start our own team right here, granted, we're probably a bit big, but in this case it should be fine.

Like all teams we're likely going to start off with the best of intentions.

- We're going to build the best application
- UX and design have built a vision based on research and user input
- We'll build an application that is totally in line with the that vision

We build the first instance of it and we get something that looks like this

![slide of a supersonic unicorn running on a rainbow][magical-pegacorn]
It's a supersonic unicorn running on a rainbow. We love unicorns rainbows, they're pretty and magical... just like our UI

We're all rather proud of the result and we need to evolve it with what we've learned adding more features, maybe removing some. Then some how without us realising it we now have this.

![Slide with super pirate sloth][goonies-sloth]
Anyone know who this guy is? Perhaps I am showing my age here. It's Sloth from The Goonies (1985)

Now Sloth is awesome and he has a lot going on here

we've got:

- a little superman
- some pirate
- we've got a little denim going on
- well we haven't got our unicorn or our rainbows
- I think maybe we still have our magic though, but i'm not sure

At this point we've probably got a dev team talking about technical debt, and the need for a rewrite of the front end. We've probably got some upset designers and UX folks who once were excited and felt empowered by their magical rainbow powered unicorn. We may start trying to throw process at the problem.

Eventually the team is likely to drop tools and stop features to pay the debt. It may take an iteration or more to try and get the UI back to its former glory.

![slide of a surprised unicorn vomiting a rainbow][sick-pegacorn]

well I think maybe we've recaptured the unicorn and the rainbow, but I think we might have lost the magic now for sure.

I love this image. I'm just going to leave it here for a bit.

When I first saw this image I swear I giggled like an infant for something like 10 minutes. My wife came and giggled at it too, that's why I married her.

# let's talk about options and how our team might react to this


# Manual testing

Manual testers are awesome, even Elon Musk agrees that "Humans are underrated."

https://twitter.com/elonmusk/status/984882630947753984

Humans can:

- explore
- pick out complex patterns
- make "reasonable" decisions on experience given limited data

There's many issues though

- We're inconsistent
- Easily distracted
    - What did Kate just say on twitter?
- Biased
    - We just are
- Totally ill equipped to be repetitive quality gate
    - https://twitter.com/Foone/status/1014267515696922624
    - Our brains do all sorts of weird stuff:
        - Our eyes are not like cameras:
            - Saccadic masking
                - In short your vision shuts system down as your eyes move between fixation points. This is often about a third to half a second. None of us see this because our our brains makes up the rest. We see this when you look at an analogue clock. It can feel like the second had might take longer than a second to tick. How often do you think you move your eyes while checking a site for issues?
            - blind spots
                - We see these with those optical games where there are two dots. ,es that You've got blind spots where your brain is again making things up
            - Color perception
                - You very limited color in your central vision, beyond that it's black and white.
                - If you concentrate on your peripheral vision you'll notice it's in colour why?
                - Your brain is playing tricks again and is effectively adding colour to what you're seeing.
            - Action-specific perception
                - Your brain changes things depending on what your doing?
        - our memories suck
            - Fuzzy-trace_theory
                - find info on this
            - Confabulation
                - details
            - False memory

While humans are still a critical component to defining what quality is, we're terrible components to include in any sort of repetitive regression. Making someone work in that way is really putting them behind the eight ball from the start, they're extremely likely to fail. However maybe you just need someone to blame, in which case go for it, but there may be other issues beyond quality and regression you should be dealing with at that point/

Anything we do needs to take our Humans strengths into account and limited their scope when it comes to being involved in a repetitive quality gates.

Let's say that we started off with a nice light weight processe

| waiting | in progress         | done |
| ---     | ---                 | ---  |
|         |                     |      |

Maybe we felt we needed some testing gate to catch all our errors

| waiting | in progress    | testing     | done |
| ---     | ---            | ---         | ---  |
|         |                |             |      |

Now we probably need to increase our work in progress to work with things we're fixing + the things we're working on.
The frontend is probably still being broken unexpectedly, perhaps we're only finding this out as changes are rolled out to production

| idea meeting   | waiting | experience kick off  | in progress    | walkthrough  | QA         | review   | done |
| ---            | ---     | ---                  | ---            | ---          |---         | ---      | ---  |
|                |         |                      |                |              |            |          |      |

Why not throw in:

- before development summary
- mid implementation review
- post reimplementation critique
- finally a product owner demo... where it wasn't what he had in mind for product vision either

I'm exaggerating of course, though I wonder with all this process baggage, how well can we respond to the needs of our users and the business?  It's possible that this could be made to work and the number of styling issues caught before they get to prod.

Is there something else we can do? Is it easier fix problems when they occur or a week later when someone notices the issue?

# Testing automation

This is probably where we first start to look which is probably a good thing.
We'll probably want to try and at and we'll probably start to look at our favourite set of reflexes.

- Arrange
- Act
- Assert

If our application is in react then we can use enzyme and really kick our components around. There are sets of tests that we want to execute in the browser and in this case we would probably be using some sort of web driver based integration for this.

Let's say we're using gherkin to help us check the behaviour of the system under test.

> __SCENARIO:__ Login
> __GIVEN__ Harry wants to login
> __AND__ credentials are entered
> __WHEN__ we click login
> __THEN__ we will be logged in
> __AND__ we will be on the logged in homepage

What have we done here?

- Checked that elements we're expecting exist on a page
- Confirm elements that exist are behaving something like we expect
- verify navigation elements go where we expect

All these things are really important. We're validating in real enough way to have confidence in our application behaviour... But what about our unicorn and rainbows? What about the magic?

What we can't tell from this:

- Are the elements in the places we expect them?
- Are the colors the colors we expect at the right places?
- Is the spacing between elements as we expect?

Perhaps we can write one? What would the scenario be?

> __SCENARIO:__ Login screen layout

The doesn't sound much like a behavior

> __SCENARIO:__ Login screen will be blue

hmm, but what blue specifically?

> __SCENARIO:__ Login screen will be #0000CD

hmm, perhaps the problem we're struggling with is we're not talking about a behaviour? We've potentially got the wrong type of test here.

What can we choose from:

- Unit
    - Well, we likely have this covered, but layout and color of more than one component, or empty space between components seems well beyond the scope of a unit test. Additionally a good unit good unit test would ideally focus on behaviour over implementation so let's look else where
- Behaviour Driven Tests
    - This should totally be part of our UI regression suite, unfortunately as we saw this helps to some degree, but won't really help us keep the magic we had when we started.
- Approval testing
    - I was playing with this idea when I was introduced to it by Llewellyn Falco (@LlewellynFalco) at a GOTO conference. As it turned out, it's not even a new idea,

# What is approval testing

Usually when we write a test we would identify the behaviour we want to test.

- We setup the conditions for the test
- execute the action
- assert on the expected result

What can we assert on for a UI? A high res PDF or photoshopped wire frames?

In the case of a developing UI component its difficult to know in advance what it'll look like to a point where it's testable, but we do know what it's like when we have it correct.

Approval testing or approvals work on the idea that once you identify a correct result, all future tests will be verified against that.

The correct result becomes a "golden master" and all deviations from that golden master should fail the test and be easily identified.

Not all failures though are unexpected, especially with a UI. Changing the way a component looks is just a part of an evolving UI where we're so we want to enable the evolution of the UI, and help us catch unexpected and unplanned changes that take us back to "sloth".


# Adding approval testing in your UI regression suite

## No frills Angular

Assuming you've got CI in place you can do something like this really easily.

## Approvals assertion library

You can check out the approvaltests.com. There are a ton of versions that allow apporval asserts for many different languages.

- Java
- NodeJS
- .Net


-  In the case of JavaScript if you're using Mocha, you can use the nodeJs version.

## Story Book

For react applications story book has been around for a while. I saw recently that you can used story book to provide approvals




# Resources

[magical-unicorn]: ./images/unicorn-running-on-rainbows.png
[goonies-sloth]: ./images/sloth.jpg
[sick-unicorn]: ./images/unicorn-sick.jpeg
[profile-picture]: https://www.gravatar.com/avatar/6809b059aefba706f879bc4606f3dcdc?size=200
[magical-pegacorn]: ./images/magic.png
[sick-pegacorn]: ./images/magic-lost.jpg