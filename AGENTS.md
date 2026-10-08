# CAMU Taekwondo Landing Page

## Project

Single-page Spanish-language website for the CAMU Taekwondo club. The site introduces the club, its training, locations and instructors, and directs visitors to ask about a first class.

## Instructions and persistent context

`AGENTS.md` is the primary instruction file. Persistent project context is stored in `/docs`.

Before a significant change, consult only the documents relevant to that task:

- `docs/project-context.md` for project goals and current scope.
- `docs/architecture.md` for structure, data flow, and technical boundaries.
- `docs/design-system.md` for visual changes.
- `docs/content.md` for page copy, schedules, instructors, and contact details.
- `docs/continuation.md` when resuming work or updating project status.

Do not read every document for routine changes. Read `AGENTS.md` first, then select the context needed for the task. **Do not create or modify files inside `.agents/`.** Do not rely on `.agents/`; `/docs` is the persistent context location.

## Stack and commands

- Vue 3 Composition API with TypeScript.
- Vite for local development and production builds.
- CSS; no Vue Router is needed for this one-page anchor-based site.

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Development rules

- Preserve the existing sections, responsive behavior, and current visual identity unless asked to change them.
- Keep repeated records in `src/data/`; do not invent real club details.
- Verify any configured phone number, location, instructor credential, or institutional claim before presenting it as confirmed.
- Keep components focused and use semantic HTML, useful image alt text, keyboard access, visible focus, and reduced-motion support.
- Avoid unnecessary dependencies. Do not introduce a router or animation package without a clear need.
- Keep image URLs and asset paths easy to find and replace; document new assets and sources.
- Do not execute destructive commands.

## Quality and documentation

- Run `npm run build` after implementation changes. There is no separate test script currently.
- Update the relevant `docs/` file after significant architecture, design, or content changes.
- At the end of substantial work, update `docs/continuation.md` with completed work, pending work, known issues, decisions, and a recommended next step.
- Keep README instructions aligned with actual scripts and behavior.

## Continuing work

Start with `docs/continuation.md` when resuming an unfinished task, then inspect the specific source files involved. Treat the code as authoritative for current behavior and the content source/PDF as authoritative for verified club facts. Record uncertainty rather than filling it with guesses.
