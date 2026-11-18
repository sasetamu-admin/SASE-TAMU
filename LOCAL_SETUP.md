## Local setup

### Prerequisites

- macOS, Windows, or Linux.
- Node.js 18.18 or later (Node.js 22 LTS is recommended) and npm.
  The project uses Next.js 15, React 18, and TypeScript 5. There is no
  `.nvmrc` or Node version declaration in the repository.
- Git, to clone the repository.

The project has no checked-in npm, pnpm, Yarn, or Bun lockfile. Use npm, which
is included with Node.js. The root directory is the only application package.

### First-time setup

Run these commands from the repository root (`SASE-TAMU/`):

```sh
npm install
cp -n .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Next.js loads `.env.local`
automatically. Keep real credentials in `.env.local`; do not commit it.

### Environment variables and services

| Variable | Required to start? | Purpose |
| --- | --- | --- |
| `DATABASE_URL` | Yes | `src/env.mjs` validates this as a URL at startup/build time. The current site has no Prisma schema, database client use, migrations, or database queries, so the example MySQL-shaped placeholder works without a running database. Configure a real database only if database-backed functionality is added. |
| `INSTAGRAM_ACCESS_TOKEN` | No | A valid Instagram Graph API token is needed for the Instagram Reels API route. Without it, the rest of the site can run, but the live Reels feed will not load. The Instagram account ID is currently set in `pages/api/instagram.ts`. |

No database server or other external service is needed to run the site's main pages.
There are no migration or seed files in the repository; although `npm run seed`
is declared, its `prisma/seed.ts` target is absent and that command is not part
of local setup.

### Run again

After closing VS Code or restarting your computer, open a terminal in the
repository root and run:

```sh
npm run dev
```

Stop the server with `Ctrl+C`. Dependencies and `.env.local` remain in place.
If `node_modules` is removed, run `npm install` again first.

To check or run a production build from the repository root:

```sh
npx tsc --noEmit
npm run lint
npm run build
npm start
```

The production server also uses [http://localhost:3000](http://localhost:3000)
by default. `npm start` serves the most recent successful build.

### Troubleshooting

- **Missing or invalid `DATABASE_URL`:** Copy `.env.example` to `.env.local`
  and restart Next.js. The example value is for configuration validation only;
  it does not connect to a database.
- **Instagram feed is empty or errors:** Set `INSTAGRAM_ACCESS_TOKEN` in
  `.env.local` to a valid token with access to the configured account, then
  restart the dev server. The main website does not require the token.
- **Port 3000 is already in use:** Stop the other process or run
  `npm run dev -- --port 3001`, then open `http://localhost:3001`.
- **Dependency install/build errors:** Check `node --version` and
  `npm --version`; use Node.js 22 LTS and rerun `npm install`.