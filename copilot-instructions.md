# Copilot Instructions for the PeaceOut Project

Welcome, Copilot and contributors! This document provides instructions and best practices for using GitHub Copilot (Chat, Coding Agent, or Spaces) to improve, maintain, and extend the PeaceOut platform.

---

## 🤖 Purpose

These guidelines ensure Copilot understands the project’s goals, structure, and conventions—helping generate meaningful, consistent, and on-brand code and documentation.

---

## 🏗️ Repository Structure Overview

- `backend/` — Node.js/Express/Socket.IO API (real-time logic, user accounts, video, chat)
- `frontend/` — React (or Next.js) web UI (homepage, video/live, profiles, dashboard)
- `shared/` — Branding, assets, shared types, docs
- `docs/` — Design docs, API docs, instructions
- Root: `README.md`, `INSTRUCTIONS.md`, and this file

---

## 🛠️ Copilot Usage Guidelines

- **Structure:** Follow the established folder and file structure.
- **Naming:** Use descriptive, consistent naming for files, folders, variables, and components.
- **Branding:** Use the color palette, logo, and UI/UX patterns from `shared/branding/`.
- **Frameworks:** 
  - Backend: Node.js, Express.js, Socket.IO
  - Frontend: React (prefer functional components, hooks)
- **Documentation:** Document new features in `/docs` and update READMEs as needed.
- **Comments:** Write clear, concise comments where code isn’t self-explanatory.

---

## 🚦 How to Request Copilot Tasks

When asking Copilot to make changes:
- Be clear and specific about what you want (e.g., “Add a user registration API in backend”).
- Specify the folder and file(s) to modify or create.
- If possible, describe expected behavior, input/output, or UI/UX.
- For structure/scaffolding, list all required files and their purpose.
- For features, provide acceptance criteria or examples.

---

## 🔄 Workflow

- Use Issues and Pull Requests for all changes.
- Each PR should include tests (where applicable) and update docs.
- Discuss major design or architectural changes in Issues first.

---

## 📚 References

- See `INSTRUCTIONS.md` for full project vision and development workflow.
- Refer to `/docs` for architecture, API, and design documentation.

---

## Sample Copilot Prompts

> Set up basic Express API endpoints for user registration and login in backend/src/users.js.
>
> Scaffold a React component in frontend/src/components/VideoPlayer.jsx for video playback with chat sidebar.
>
> Add a new color to shared/branding/palette.md and update references in frontend styles.
>
> Document the live streaming API in docs/api.md.

---

**PeaceOut** — Relax and enjoy content.  
_Be creative, but stay on brand!_
