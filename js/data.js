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
    tagline: "Trader · Builder · Student",
    bio: "I'm a finance graduate from UIUC's Gies College of Business (class of 2026), based in Chicago and looking for my first full-time role in equity research, valuation or financial modeling. I swing trade options, and I build tools that make research faster, like an app that pulls financials straight from SEC filings. Right now I'm an OnDean Fellow, where my capstone made the call on Snowflake.",
    headshot: "images/headshot.webp?v=3", // bump ?v= when the photo changes (browsers cache images 4h).
    email: "inbox@jairomora.com", // forwards to Gmail via Cloudflare Email Routing
    github: "https://github.com/Srtjairo",
    linkedin: "https://www.linkedin.com/in/jairo-mor",
    resume: "files/Jairo-Mora-Resume.pdf" // the main "Resume" button in the hero; leave "" to hide it
  },

  // "Currently working on" cards (2-3 is ideal)
  // A card whose status is "Finished", "Just launched", "Launched", "Done" or "Completed" is
  // hidden automatically, so changing the status is all it takes to take a card off.
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
      body: "I built this site to keep everything I'm working on in one place - projects, milestones, and what I'm learning along the way.\n\nCheck back for updates on my capstone and the 3D Chicago model."
    }
  ],

  // Projects (all shown as cards). Keep each description to about 150 characters so the cards stay compact.
  projects: [
    {
      title: "Company Research",
      description: "Search any public company and get its financials straight from SEC filings, with every number traced to its source and ready to export to Excel.",
      thumbnail: "images/projects/company-research.webp",
      tags: ["SEC filings", "Excel", "JavaScript"],
      github: "", // repo is private (empty = no GitHub button)
      demo: "https://research.jairomora.com"
    },
    {
      id: "capstone",
      title: "OnDean Capstone: What Survives the AI Shift",
      description: "My OnDean Fellows capstone: I compared five software companies on retention, quality and AI exposure to see who wins the AI shift. My call: Snowflake.",
      thumbnail: "images/capstone/slide-01.webp",
      tags: ["Equity research", "Valuation", "AI"],
      github: "",
      demo: "",
      // Slide viewer: images/capstone/slide-01.webp ... slide-33.webp, plus the PDF download
      deck: { folder: "images/capstone", count: 33, pdf: "images/capstone/ondean-capstone.pdf" }
    },
    {
      title: "3D Chicago Model",
      description: "Chicago in 3D, 8 km around the Loop: downtown, 40 neighborhoods and the lakefront, built from real city data. Fly around, or switch it to night.",
      thumbnail: "images/projects/chicago-3d-dusk.webp",
      video: "images/projects/chicago-3d-dusk.mp4", // optional: a short silent looping clip that plays when you hover over the card
      tags: ["Three.js", "JavaScript", "GIS data"],
      github: "https://github.com/Srtjairo/chicago-3d",
      demo: "https://srtjairo.github.io/chicago-3d/"
    }
  ]
};
