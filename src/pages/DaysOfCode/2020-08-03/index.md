---
path: "/100doc/2020-08-03"
date: "2020-08-03"
tags: ["100daysofcode"]
excerpt: "Querying the graph"
title: "Filter and Sort"
day: "17"
---

## Day 17!

I learned a bit about Gatsby and GraphQL today, now the 100doc path is going off a query that will only include those posts! Regular blog post section to come up soon. I wanted to filter by a string and keep the sort going but ran into a few issues. Turns out you just need to get them on separate lines. Gotta get used to that.

```
    query HDOCQuery {
      allMarkdownRemark(
        filter: { frontmatter: { path: { regex: "/100doc/" } } }
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            frontmatter {
              title
              date
              excerpt
              path
              tags
            }
          }
        }
      }
    }
```

In other good news, Lonestar officially got approved by the NCAA today. Glad to see something I worked on came through, especially given the deadline.

![Email of approval](https://raw.githubusercontent.com/ichbindev/ichbindev/master/src/img/blog/lonestar.jpeg)
