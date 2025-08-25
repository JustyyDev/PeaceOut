# PeaceOut Folder Structure

This document describes the new organized folder structure for the PeaceOut project.

## Overview

The project is now organized as a monorepo with clear separation of concerns:

```
/
├── apps/
│   ├── web/              # Main web application (static HTML)
│   │   ├── pages/        # All HTML pages
│   │   ├── assets/       # Web app assets (images, styles)
│   │   └── index.html    # Main entry point
│   ├── api/              # Backend API server
│   │   ├── src/          # API source code
│   │   ├── package.json  # API dependencies
│   │   └── .env          # Environment variables
│   └── dashboard/        # React dashboard/admin interface
│       ├── src/          # React components
│       ├── pages/        # React pages
│       └── package.json  # Dashboard dependencies
├── packages/
│   └── shared/           # Shared utilities and assets
│       ├── branding/     # Brand assets (logos, colors)
│       ├── types/        # TypeScript type definitions
│       └── package.json  # Shared dependencies
├── tools/               # Build tools and scripts
│   └── scripts/         # Utility scripts
├── docs/               # Documentation
└── package.json       # Root workspace configuration
```

## Applications

### Web App (`apps/web/`)
The main user-facing web application built with static HTML, CSS, and JavaScript.

- **Entry Point**: `index.html`
- **Pages**: All HTML pages are in `pages/` directory
- **Assets**: Static assets in `assets/` directory

### API Server (`apps/api/`)
The backend Express.js API server.

- **Source**: JavaScript files in `src/` directory
- **Environment**: Configuration in `.env` file
- **Dependencies**: Managed by `package.json`

### Dashboard (`apps/dashboard/`)
React-based dashboard or admin interface.

- **Source**: React components and pages
- **Build**: Uses TypeScript and Tailwind CSS
- **Dependencies**: Managed by `package.json`

## Shared Packages

### Shared (`packages/shared/`)
Common utilities, types, and assets shared across applications.

- **Branding**: Logos, color schemes, brand assets
- **Types**: TypeScript type definitions
- **Utilities**: Common helper functions

## Tools

### Scripts (`tools/scripts/`)
Build scripts and development utilities.

## Benefits of This Structure

1. **Clear Separation**: Each application has its own directory and dependencies
2. **Shared Code**: Common assets and utilities are centralized
3. **Scalability**: Easy to add new applications or packages
4. **Modern Standards**: Follows monorepo best practices
5. **Maintainability**: Easier to understand and modify individual parts

## Development

- **Web App**: Served from `apps/web/` directory
- **API**: Run from `apps/api/` directory
- **Dashboard**: Build and serve from `apps/dashboard/` directory

## Migration Notes

- All HTML file paths have been updated to reference the new asset locations
- Asset references now point to `../assets/` or `assets/` depending on location
- Vite configuration updated to use `apps/web` as root directory