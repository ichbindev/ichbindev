---
path: "/100doc/2020-08-21"
date: "2020-08-21"
tags: ["100daysofcode"]
excerpt: "works on my machine"
title: "Environments"
day: "35"
---

## Day 35

Programming for different environments can be a pain. I deployed a service that worked fine locally and it totally failed to mount in the test environment. There was some code that ran differently in a different environment, breaking the whole thing. And of course the errors are vague.

This is why you test. One of the worst environment issues comes from our Production environment having different names. Some use `production`, some use `prod`, and some use `P2` as the environment name. Using the wrong environment name can have bad consequences but they're tricky to debug. The worst part is that no amount of testing in lower environments will make sure that it will work in production and use the right values in the right place. Testing in Production is not ideal :)
