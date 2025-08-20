# To-Do App

Simple, accessible To-Do list web app built with plain HTML, CSS and JavaScript. Tasks persist in the browser using localStorage.

Repository: https://github.com/PratyushRanjanDas/to-do-list

Live demo (GitHub Pages): https://to-do-list-by-pratyush-ranjan-das.netlify.app

Screenshot:
<img width="1680" height="1050" alt="Screenshot 2025-08-20 at 10 16 13 PM" src="https://github.com/user-attachments/assets/f6298abb-e27f-4123-a02f-252d6f51f362" />



## Features
- Add tasks
- Mark tasks complete / incomplete
- Delete tasks
- Remaining and total task counts
- Empty-state image when no tasks exist
- Data persisted in localStorage

## Files
- `index.html` — markup and UI
- `style.css` — styles
- `script.js` — app logic (localStorage, rendering, event handlers)
- `images/` — assets (e.g., `empty.png`, `screenshot.png`)

## Run locally
1. Clone the repo:
   - git clone https://github.com/PratyushRanjanDas/to-do-list.git
2. Open the folder and preview:
   - cd "to-do-list"
   - Open `index.html` in a browser
   - Or run a local server (recommended):
     - python3 -m http.server 8000
     - Visit http://localhost:8000

## Deploy to GitHub Pages
Option A — Use main branch (recommended, no extra tools):
1. Commit and push your code to the `main` branch.
2. In the repository on GitHub: Settings → Pages.
3. Under "Build and deployment" choose "Deploy from a branch".
4. Choose branch `main` and folder `/ (root)`, click Save.
5. Wait a few minutes and open: https://<your-github-username>.github.io/<repo-name>/
   - For this repo: https://pratyushranjandas.github.io/to-do-list/

Option B — Use gh-pages branch with npm (if using a build step):
1. npm install gh-pages --save-dev
2. Add scripts to package.json:
   - "predeploy": "npm run build" (if you have a build step)
   - "deploy": "gh-pages -d ./"
3. Run:
   - npm run deploy




## License
MIT — feel free to use and modify for
