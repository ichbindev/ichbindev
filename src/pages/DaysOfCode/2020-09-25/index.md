---
path: "/100doc/2020-09-25"
date: "2020-09-25"
tags: ["100daysofcode"]
excerpt: "and i18n"
title: "Localization"
day: "70"
---

## Day 70

Localization is hard. Making sure people can understand your site is just as important as making it accessible. Still, we tend to overcomplicate it. I've seen a few different approaches, and none feel natural. Funny enough the best system I've seen in use is much worse on paper--returning all translations from the backend and having the frontend choose which to display. You send more data with every call but make less calls overall, and changing languages is really easy.
