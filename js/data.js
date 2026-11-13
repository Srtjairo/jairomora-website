/*
 * ============================================================
 *  THIS IS THE FILE YOU EDIT TO UPDATE YOUR WEBSITE.
 * ============================================================
 *  - Everything on the page (name, posts, projects) comes from here.
 *  - Anything marked TODO is a placeholder - replace it with the real thing.
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
    tagline: "Trader · Builder · Student",
    bio: "Welcome! I've been building projects and learning a lot along the way. I hope you enjoy what I've made, and if you do, follow along to keep up with my progress.",
    headshot: "images/headshot.webp?v=2", // bump ?v= when the photo changes (browsers cache images 4h).
    email: "inbox@jairomora.com", // forwards to Gmail via Cloudflare Email Routing
    github: "https://github.com/Srtjairo",
    linkedin: "https://www.linkedin.com/in/jairo-mor",
    resume: "" // optional: e.g. "files/Jairo-Mora-Resume.pdf"
  },

  // "Currently working on" cards (2-3 is ideal)
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
      description: "Still building it! Downtown Chicago in 3D, made from real city data with Three.js. Take the guided tour or switch it to night and watch the skyline light up.",
      status: "In progress",
      link: "https://srtjairo.github.io/chicago-3d/"
    },
    {
      title: "This website",
      description: "Building a home for my projects and updates at jairomora.com.",
      status: "Just launched"
    }
  ],

  // Updates / blog - newest first. tag can be anything; common ones:
  // "Achievement", "Project", "Learning", "Life"
  posts: [
    {
      date: "2026-11-11",
      title: "Launching jairomora.com",
      tag: "Project",
      summary: "My new home on the web for projects, updates, and wins.",
      body: "I built this site to keep everything I'm working on in one place - projects, milestones, and what I'm learning along the way.\n\nCheck back for updates on my capstone and the 3D Chicago model."
    }
  ],

  // Projects slideshow
  projects: [
    {
      title: "Company Research",
      description: "A research tool I built on Replit for digging into public companies. Search a name or ticker and it pulls the financials straight from official SEC filings, shows exactly where every number came from, and lets you take it all with you as an Excel workbook.",
      thumbnail: "images/projects/replit.webp",
      tags: ["Replit", "SEC filings", "Excel"],
      github: "", // add the repo link when it is public (empty = no GitHub button)
      demo: "https://company-research-review.replit.app"
    },
    {
      id: "capstone",
      title: "OnDean Capstone: What Survives the AI Shift",
      description: "My capstone for the OnDean Fellows Bootcamp. I wanted to know which software companies come out ahead as AI changes how people use and pay for software, so I compared Salesforce, Snowflake, CrowdStrike, Toast and HubSpot on retention, quality and AI exposure, then made my call: Snowflake.",
      thumbnail: "images/capstone/slide-01.webp",
      tags: ["Equity research", "Valuation", "AI"],
      github: "",
      demo: "",
      // Slide viewer: images/capstone/slide-01.webp ... slide-33.webp, plus the PDF download
      deck: { folder: "images/capstone", count: 33, pdf: "images/capstone/ondean-capstone.pdf" }
    },
    {
      title: "3D Chicago Model",
      description: "I rebuilt downtown Chicago in 3D so you can explore it right in your browser. Every building comes from real city data, and you can take a guided tour past landmarks like Willis Tower and Navy Pier, or slide the time of day from noon to night and watch the skyline light up.",
      thumbnail: "images/projects/chicago-3d.webp",
      tags: ["Three.js", "JavaScript", "GIS data"],
      github: "https://github.com/Srtjairo/chicago-3d",
      demo: "https://srtjairo.github.io/chicago-3d/"
    }
  ]
};
