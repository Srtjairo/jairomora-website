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
    pronunciation: "HI-roh · MOR-ah", // small line under the name; leave "" to hide it
    tagline: "Finance graduate · Researcher · Developer",
    bio: "I'm a Chicago-based finance graduate from UIUC's Gies College of Business (class of 2026) who swing trades options and builds tools for investment research. Explore my SEC research app, software-company capstone, and interactive 3D model of Chicago below.",
    headshot: "images/headshot.webp", // same file as in index.html; /ship's ?v= stamp there refreshes it. Point to a new file name to swap the photo.
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
      date: "2026-11-20",
      title: "All My Reps: from Chicago to all of America",
      tag: "Project",
      summary: "I launched allmyreps.org. It started as a Chicago-only site and now answers for every state.",
      // Facts checked 2026-11-20 against the live site (allmyreps.org, js/states.js on main): first release Nov 16 (Chicago),
      // all of Illinois Nov 17, 15 full states, the other 35 states and DC with members of Congress. Update the numbers as states are added.
      body: "All My Reps went live on November 16 as a Chicago-only site. Enter an address and it shows your alderperson, state lawmakers and members of Congress, with how they voted and who funds them, all from official public sources. A day later it covered every address in Illinois.\n\nSince then I've been taking it national. Fifteen states, including New York, California, Texas and Florida, now show state lawmakers, the governor and statewide officials too, plus the city councils of Chicago, New York City and Los Angeles. Every other state and Washington, DC shows its members of Congress.\n\nNext up: bringing the remaining states to the same level, largest first."
    },
    {
      date: "2026-11-11",
      title: "Launching jairomora.com",
      tag: "Project",
      summary: "My new home on the web for projects, updates, and wins.",
      body: "I built this site to keep everything I'm working on in one place - projects, milestones, and what I'm learning along the way."
    }
  ],

  // Projects (all shown as cards). Keep each description to about 95 characters: four cards share one row on desktop.
  projects: [
    {
      title: "All My Reps",
      description: "Type any Illinois address to see who represents you, with votes, campaign money and contacts.",
      thumbnail: "images/projects/all-my-reps.webp", // the Illinois start screen in dark mode; the clip's first frame (bump ?v= when it changes)
      preview: "deck", // tablet widths show the whole frame (the side panel would otherwise be cut off)
      video: "images/projects/all-my-reps.mp4", // hover clip: Illinois map -> type an address -> fly to Chicago with your officials -> alderperson's profile and votes, then loops
      // Remake both: python tickets/research/scripts/amr_clip_capture.py, then amr_clip_build.py (ticket 131)
      tags: ["Civic data", "Maps", "JavaScript"],
      github: "",
      demo: "https://allmyreps.org"
    },
    {
      title: "Company Research",
      description: "Public-company financials from SEC filings, with source-linked numbers and Excel exports.",
      thumbnail: "images/projects/company-research.webp?v=3", // the app's home page (search bar) in dark mode; the clip's first frame (bump ?v= when it changes)
      preview: "deck", // same tablet fit as the capstone: show the whole dark frame instead of cropping off its edges
      video: "images/projects/company-research.mp4?v=3", // hover clip: home page -> search "Apple" -> bull loading bar -> results -> Operating income chart -> home, then loops
      // Remake both: python tickets/research/scripts/cr_clip_capture.py, then cr_clip_build.py (ticket 105)
      tags: ["SEC filings", "Excel", "JavaScript"],
      github: "", // repo is private (empty = no GitHub button)
      demo: "https://research.jairomora.com"
    },
    {
      id: "capstone",
      title: "OnDean Capstone",
      description: "Five software companies compared on retention, quality and AI exposure. My call: Snowflake.",
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
      description: "An interactive city model from real GIS data: 40 neighborhoods, the lakefront, day to night.",
      thumbnail: "images/projects/chicago-3d-dusk.webp",
      video: "images/projects/chicago-3d-dusk.mp4", // optional: a short silent looping clip that plays when you hover over the card
      tags: ["Three.js", "JavaScript", "GIS data"],
      github: "", // no GitHub button on this card (the Live demo is the point)
      demo: "https://srtjairo.github.io/chicago-3d/"
    }
  ]
};
