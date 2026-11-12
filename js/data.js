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
  profile: {
    name: "Jairo Mora",
    tagline: "Student · Developer · Builder", // TODO: your one-liner
    bio: "I build things for the web and in 3D. This is where I share what I'm working on, what I've learned, and what I've shipped.", // TODO
    headshot: "images/headshot.svg", // TODO: put your photo in /images and change to "images/headshot.jpg"
    email: "inbox@jairomora.com", // forwards to Gmail via Cloudflare Email Routing
    github: "https://github.com/YOUR-USERNAME", // TODO
    linkedin: "https://www.linkedin.com/in/jairo-mor",
    resume: "" // optional: e.g. "files/Jairo-Mora-Resume.pdf"
  },

  // "Currently working on" cards (2-3 is ideal)
  now: [
    {
      title: "Capstone project",
      description: "TODO: one or two sentences about what it is and where it's at.",
      status: "In progress"
    },
    {
      title: "3D Chicago model",
      description: "TODO: what you're modeling, the tools you're using, and what's next.",
      status: "In progress"
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
    },
    {
      date: "2026-10-01",
      title: "TODO: an achievement you're proud of",
      tag: "Achievement",
      summary: "Replace this example post with something real.",
      body: "Write a few sentences here about what you did, why it mattered, and what you learned."
    },
    {
      date: "2026-09-01",
      title: "TODO: something you learned",
      tag: "Learning",
      summary: "Another example post - delete or replace.",
      body: "Posts can be as short or long as you like."
    }
  ],

  // Projects slideshow
  projects: [
    {
      title: "Replit Website",
      description: "TODO: what the site does, who it's for, and what you built.",
      thumbnail: "images/projects/replit.svg", // TODO: screenshot, ideally 1600x1000
      tags: ["HTML", "CSS", "JavaScript"], // TODO
      github: "https://github.com/YOUR-USERNAME/REPO", // TODO
      demo: "" // optional live link
    },
    {
      title: "Capstone Project",
      description: "TODO: the problem, your solution, and your role.",
      thumbnail: "images/projects/capstone.svg",
      tags: ["TODO"],
      github: "https://github.com/YOUR-USERNAME/REPO",
      demo: ""
    },
    {
      title: "3D Chicago Model",
      description: "TODO: what part of Chicago, how it was built, and what tools you used.",
      thumbnail: "images/projects/chicago-3d.svg",
      tags: ["3D", "TODO"],
      github: "https://github.com/YOUR-USERNAME/REPO",
      demo: ""
    }
  ]
};
