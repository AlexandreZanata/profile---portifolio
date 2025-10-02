# Portfolio — Vite + React + TypeScript

This repository contains a personal portfolio website built with Vite, React and TypeScript. The project includes TailwindCSS and several reusable UI components.

## Features

- Vite-powered React + TypeScript setup
- Tailwind CSS for utility-first styling
- Responsive components for Hero, About, Projects, Skills, Certifications and Contact
- Dark / Light theme toggle and language toggle

## Repository Structure

- `src/` — application source code
  - `components/` — React components used across the site
  - `assets/` — images and static assets
  - `pages/` — application routes/pages
- `index.html`, `package.json`, and Vite/TypeScript/Tailwind configs

## Requirements

- Node.js 16+ (recommended 18+)
- npm or yarn

## Local development

1. Install dependencies

```bash
npm install
# or
yarn
```

2. Start the dev server

```bash
npm run dev
# or
yarn dev
```

Open http://localhost:5173 (or the port shown by Vite) to view the site.

## Build

```bash
npm run build
# or
yarn build
```

The production-ready files will be generated in the `dist/` folder.

## Deploy to Vercel

You can deploy this project on Vercel in two ways:

- Through the Vercel web dashboard: import the repository and use the default Vite settings. The build command is `npm run build` and the output directory is `dist`.
- Using the Vercel CLI:

```bash
npx vercel
# or
npx vercel --prod
```

Vercel will automatically detect the Vite project. If asked, set the build command to `npm run build` and the output directory to `dist`.

## Scripts (package.json)

- `dev` — run the Vite dev server
- `build` — create a production build
- `preview` — locally preview the production build

## Contributing

If you want to contribute, open an issue or create a pull request. Keep changes small and focused.

## License

This repository does not currently include a license file. Add one if you plan to open-source the project.

---

If you want, I can also add a minimal `LICENSE` file, or update `package.json` scripts if they're missing. Tell me how you'd like to proceed.
