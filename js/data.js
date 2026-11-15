/*
 * ============================================================
 *  THIS IS THE FILE YOU EDIT TO UPDATE YOUR WEBSITE.
 * ============================================================
 *  - Everything on the page (name, posts, projects) comes from here.
 *  - Keep the commas between { ... } blocks!
 *
 *  To add a new update/blog post: copy one block inside `posts`,
 *  paste it at the TOP of the list, and change the text.
 *  Use a blank line (\n\n) in `body` to start a new paragraph.
 */

const SITE = {
  // If you change name, tagline, bio or links here, also update the copies in index.html
  // (the <head> tags + Person data, and the hero text) - those are what Google reads.
  profile: {
    name: "Jairo A Mora",
    tagline: "Finance graduate · Researcher · Builder",
    bio: "I'm a Chicago-based finance graduate from UIUC's Gies College of Business (class of 2026) who swing trades options and builds tools for investment research. Explore my SEC research app, software-company capstone, and interactive 3D model of Chicago below.",
    headshot: "images/headshot.webp?v=3", // bump ?v= when the photo changes (browsers cache images 4h).
    email: "inbox@jairomora.com", // forwards to Gmail via Cloudflare Email Routing
    github: "https://github.com/Srtjairo",
    linkedin: "https://www.linkedin.com/in/jairo-mor",
    resume: "files/Jairo-Mora-Resume.pdf" // the main "Resume" button in the hero; leave "" to hide it
  },

  // "Currently working on" cards (2-3 is ideal)
  // A card whose status is "Finished", "Just launched", "Launched", "Done", "Complete" or
  // "Completed" is hidden automatically, so changing the status is all it takes to take a
  // card off. Any other status (e.g. "Live", "In progress") keeps the card visible.
  // Optional: add  link: "https://..."  to a card to make the whole card clickable.
  now: [
    {
      title: "OnDean capstone",
      description: "Done! Five software companies, one question about AI, and a final call. Open it to flip through the slides.",
      status: "Finished",
      deck: "capstone" // opens the slide viewer of the project with this id
    },
    {
      title: "3D Chicago model",
      description: "Just launched! Chicago in 3D, 8 km around the Loop: downtown, 40 neighborhoods and the whole lakefront, from real city data. Switch it to night and watch it light up.",
      status: "Launched",
      link: "https://srtjairo.github.io/chicago-3d/"
    },
    {
      title: "This website",
      description: "Building a home for my projects and updates at jairomora.com.",
      status: "Just launched"
    }
  ],

  // Timeline posts - newest first. tag can be anything; common ones:
  // "Achievement", "Project", "Learning", "Life"
  posts: [
    {
      date: "2026-11-11",
      title: "Launching jairomora.com",
      tag: "Project",
      summary: "My new home on the web for projects, updates, and wins.",
      body: "I built this site to keep everything I'm working on in one place - projects, milestones, and what I'm learning along the way."
    }
  ],

  // Projects (all shown as cards). Keep each description to about 150 characters so the cards stay compact.
  projects: [
    {
      title: "Company Research",
      description: "Public-company financials from SEC filings, with source-linked numbers and Excel exports for faster research.",
      thumbnail: "images/projects/company-research.webp",
      preview: "financials", // crop the financial chart with CSS; keep the source screenshot intact
      tags: ["SEC filings", "Excel", "JavaScript"],
      github: "", // repo is private (empty = no GitHub button)
      demo: "https://research.jairomora.com"
    },
    {
      id: "capstone",
      title: "OnDean Capstone",
      description: "Five software companies compared on retention, quality, and AI exposure. My OnDean Fellows capstone call: Snowflake.",
      thumbnail: "images/projects/ondean-capstone.webp", // the title slide, framed; the clip's first frame
      preview: "deck", // tablet widths show the whole framed slide (dark band above and below) instead of cropping its sides
      video: "images/projects/ondean-capstone.mp4", // hover clip: title -> five companies -> retention -> AI exposure -> the call, then loops
      tags: ["Equity research", "Valuation", "AI"],
      github: "",
      demo: "",
      // Slide viewer: images/capstone/slide-01.webp ... slide-33.webp, plus the PDF download
      deck: { folder: "images/capstone", count: 33, pdf: "images/capstone/ondean-capstone.pdf" }
    },
    {
      title: "3D Chicago Model",
      description: "An interactive city model built from real GIS data: 40 neighborhoods, the lakefront, and a day-to-night view of Chicago.",
      thumbnail: "images/projects/chicago-3d-dusk.webp",
      video: "images/projects/chicago-3d-dusk.mp4", // optional: a short silent looping clip that plays when you hover over the card
      tags: ["Three.js", "JavaScript", "GIS data"],
      github: "", // no GitHub button on this card (the Live demo is the point)
      demo: "https://srtjairo.github.io/chicago-3d/"
    }
  ]
};
