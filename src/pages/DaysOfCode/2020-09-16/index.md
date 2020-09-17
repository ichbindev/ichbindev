---
path: "/100doc/2020-09-16"
date: "2020-09-16"
tags: ["100daysofcode"]
excerpt: "where'd it go?"
title: "Refresh"
day: "61"
---

## Day 61

Usually bugs don't get to me, but this one has been really frustrating. A component would render fine if the page was routed to via a button, but if the page was refreshed it wouldn't load. No shared state, no different props. I stripped everything and found that it was everything inside a simple <form> that wouldn't load. Delaying the render by 500ms makes it work most of the time, so there's some race condition happening or some network call not finishing in time. I've pretty much run out of people to try to help and have no idea what to do next.