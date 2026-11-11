# jairomora.com

My personal portfolio and blog. Plain HTML/CSS/JS with no build step.

## Updating the site

**All content lives in [`js/data.js`](js/data.js).** You only need to edit that file.

| To do this | Edit this in `data.js` |
|---|---|
| Change name, tagline, bio, links | `profile` |
| Change "Currently working on" | `now` |
| Add a blog post / update | Copy a block in `posts`, paste at the top, edit |
| Add a project | Copy a block in `projects`, edit |

Search for `TODO` to find every placeholder.

### Images
- **Headshot:** save a square photo as `images/headshot.jpg`, then set `headshot: "images/headshot.jpg"`.
- **Project thumbnails:** save screenshots in `images/projects/` (16:10 works best, e.g. 1600×1000) and update each project's `thumbnail`.
- Keep images under ~500 KB each so the site stays fast (compress at squoosh.app).

### Preview locally
Double-click `index.html`, or in VS Code use the "Live Server" extension.

### Publish an update
```bash
git add .
git commit -m "New post"
git push
```
Cloudflare Pages redeploys automatically in about a minute.

## One-time setup: GitHub + Cloudflare + jairomora.com

1. **GitHub:** create an empty repo (e.g. `jairomora-website`), then:
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/jairomora-website.git
   git branch -M main
   git push -u origin main
   ```
2. **Buy the domain:** Cloudflare dashboard → Domain Registration → Register Domains → `jairomora.com`.
3. **Host it:** Cloudflare dashboard → Workers & Pages → Create → Pages → *Connect to Git* → choose the repo.
   - Framework preset: **None**
   - Build command: *(leave empty)*
   - Build output directory: `/`
4. **Connect the domain:** your Pages project → Custom domains → add `jairomora.com`, then also `www.jairomora.com`. HTTPS is automatic.
5. **(Optional) Pro email:** Cloudflare → jairomora.com → Email → Email Routing → forward `hello@jairomora.com` to your Gmail.
