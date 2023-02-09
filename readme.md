# About

This is a basic blog website wih 3 pages.

It is a project I am doing to polish my CSS skills.

# Design and Structure

- Design File: https://www.figma.com/file/hE5klIn1AEQ9XWZWmurs7y/Learning-Journal-Blog
- - Site has 3 pages
  - Homepage
    - Top Article - Hero
    - Recent Article - Grid
  - Article Page
    - Full Text
    - Recent Posts
  - About Page
    - Image - Bio
    - Recent Posts
- Each page has a heder and a footer
  - Header with logo, name and nav
  - Footer with

# Constraints

- Site should be made in vanilla HTML/CSS
- Site should be responsive with one breakpoint
  - Nav --> Hamburger
- Site should use CSS Grid as much as possible

# Analysis

- Two general components are on all pages
  - Header Component
    - Logo
    - SiteName
    - <space-between>
    - Home
    - About Me
  - Footer Component
    - SiteName
    - Copyright @202X
- Homepage has 2 components
  - Hero Component
    - Displays Top Post
  - RecentPostsGrid Component
- Article page has 2 components
  - Article Component
  - RecentPostsGrid Component
- About page has 2 components
  - Bio Component
  - RecentPostsGrid Component
- One special component is on all pages
  - RecentPostsGrid Component
- RecentPostsGrid is made of
  - Header: Recent Posts
  - PostSummary Components
- PostSummary Component is made of
  - Post Date
  - Post Thumbnail
  - Post Title
  - Post summary

# Plan

- Start with mobile design first.
- Design all components
- Render RecentPostsGrid with javascript
- Store posts in markdown
- Store PostSummary as an object in an array
  - const postSummaryArray =
    [{
    date:"12 July, 2022",
    title:"This Is It",
    summary:"lorem...50"
    thumbnailUrl:"/d/d/"
    },
    {}]

# Known Unknowns

    - How to make a grid responsive?
    - How to display and format markdown dynamically?

# Known Issues
