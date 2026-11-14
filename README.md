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

### Images
- **Headshot:** save a square photo as `images/headshot.webp` (keep the original out of `images/`). Browsers cache it, so after replacing it bump the `?v=` number on the headshot in both `index.html` and `js/data.js` (e.g. `headshot.webp?v=2` → `?v=3`).
- **Project thumbnails:** save screenshots in `images/projects/` (16:10 works best, e.g. 1600×1000) and update each project's `thumbnail`.
- **Resume:** save the new PDF over `files/Jairo-Mora-Resume.pdf` (same name, so the hero button keeps working). To hide the button, set `resume: ""` in `js/data.js`.
- Keep images under ~500 KB each so the site stays fast (compress at squoosh.app).

### Sandbox first: the local `dev` branch
Every change starts on the `dev` branch, which lives only on this computer and is never pushed. Nothing goes live until it has been checked there.

| Stage | Where | How |
|---|---|---|
| Edit + look | http://localhost:8080 (this computer only) | `git switch dev`, then `python -m http.server 8080 --bind 127.0.0.1` in this folder |
| Save progress | local `dev` branch | `git add .` → `git commit -m "..."` (no push) |
| Go live | https://jairomora.com | Merge `dev` into `main` and push `main` (the `/ship` command does this with checks) |

```bash
# release (only when the sandbox looks right)
git switch main
git merge dev
git push origin main
git switch dev
```
Cloudflare Pages redeploys in about a minute. To undo a release, go to Cloudflare → the Pages project → Deployments, and roll back to the previous production deploy.

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
5. **(Optional) Pro email:** Cloudflare → jairomora.com → Email → Email Routing → forward `inbox@jairomora.com` to your Gmail (already set up).
