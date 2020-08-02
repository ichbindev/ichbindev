---
path: "/100doc/2020-07-19"
date: "2020-07-19"
tags: ["blog", "100daysofcode"]
excerpt: "I add my first update to the blog"
title: "100 Days of Code: Day 2"
---

I've made the first change to the blog by adding an image. This is the start of the "About Me" component I thought I'd get done today, but I ran into some unforseen difficulties. Long story short, Gatsby has two very similarly named methods, `staticQuery` and `statiqQuery`. I was trying to use the former but the latter filled out in autocomplete and it took a while to figure out the issue. Slightly mispelled names are some of the hardest bugs to find.

It's pretty cool now that it's set up. Gatsby will autogenerate different sizes of the image for different resolutions and I have a GraphQL query set up so it will grab the one with the best size for the device that's visiting. Of course that does absolutely nothing for my small little avatar but it's nice to have set up in case I need it.

After I finished that photo I added some social media icons using the same style that React does to add images. It took a few minutes to have them showing up, sized and deployed. I like that better. Learning is hard.

I didn't get as much added to the blog today as I had hoped but I still have plenty of time. Once I get this section done and everything positioned I will need to actually draw out a wireframe of what I want the rest of the blog to look like.
