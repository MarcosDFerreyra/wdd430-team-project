<!--
Sync Impact Report
- Version change: unversioned template → 1.0.0 (initial governance baseline).
- Modified principles: template placeholders → Required Technology Stack,
  Next.js App Router Patterns, Strict TypeScript and Naming, Utility-First
  Styling, Financial Data Privacy and Integrity, Tested and Reviewable
  Changes, Consistent and Maintainable Code, and Collaborative Delivery.
- Added sections: Platform & Architecture Requirements; Delivery & Collaboration.
- Removed sections: none; the template's section hierarchy is retained.
- Templates: ✅ `.specify/templates/plan-template.md` updated;
  ✅ `.specify/templates/tasks-template.md` updated;
  ✅ `.specify/templates/spec-template.md` reviewed (no change needed).
- Commands: ✅ `.specify/templates/commands/` contains no command files.
- Runtime guidance: ✅ relevant agent and repository guidance reviewed;
  ✅ `.github/agents/speckit.tasks.agent.md` updated to require appropriate
  tests; ✅ `.github/agents/speckit.constitution.agent.md` updated to use
  generic agent guidance.
- Deferred: original ratification date is unknown; see TODO in the version line.
-->

# Cashtrail Constitution

## Core Principles

### I. Required Technology Stack

Cashtrail MUST use Next.js App Router, TypeScript, Tailwind CSS, Clerk,
Supabase PostgreSQL, and Vercel for production hosting. A replacement or
additional framework that changes this baseline requires a documented
constitution amendment. This keeps the student team's implementation and
deployment decisions consistent.

### II. Next.js App Router Patterns

Routes MUST follow the App Router's file-based conventions under `app/`,
including framework-reserved filenames such as `page.tsx` and `layout.tsx`.
Components MUST be Server Components by default; add `"use client"` only for
interactivity or browser-only APIs, and keep each client boundary as small as
practical. Authentication, authorization, and privileged data access MUST
remain on the server.

### III. Strict TypeScript and Naming

TypeScript MUST keep `strict: true`; application code MUST NOT use the `any`
type, including implicit `any`. Use `unknown` with explicit narrowing when a
value is not yet known. Use PascalCase for React components and type names,
camelCase for functions, variables, and hooks (hooks begin with `use`),
UPPER_SNAKE_CASE for true module-level constants, and lowercase kebab-case
for route directories. App Router special filenames MUST retain Next.js
conventions.

### IV. Utility-First Styling

UI styling MUST use Tailwind CSS utilities as the default. Custom CSS is
permitted only when the required presentation cannot reasonably be expressed
with Tailwind utilities or when a third-party integration requires it; keep
such CSS minimal and localized. Interfaces MUST remain usable on mobile and
keyboard-accessible.

### V. Financial Data Privacy and Integrity

Each expense and related personal record MUST be scoped to its authenticated
owner. Every read and write MUST enforce ownership using verified Clerk
identity and Supabase authorization; client-supplied user identifiers alone
are never authorization. Supabase Row Level Security MUST protect
user-owned tables, with server-side authorization checks for privileged
operations. Secrets and service-role credentials MUST never be exposed to
browser code. These controls protect sensitive personal financial data.

### VI. Tested, Reviewable Changes

Changes to application behavior MUST include automated tests appropriate
to the change: unit tests for calculations and validation, integration tests
for authentication and database flows, and UI or journey tests for important
user interactions. Tests MUST be added before or alongside implementation;
feature plans MUST identify test coverage and any required test-runner setup.
Before merge, run the available tests, ESLint, TypeScript checking, and a
production build; resolve failures or document an approved exception.

### VII. Consistent and Maintainable Code

Files and exported symbols MUST use the naming and App Router conventions in
this constitution. Prefer small, cohesive components and modules over
duplicated logic or unnecessary abstractions. Prettier MUST format changed
files using the repository configuration. A formatter or lint exception MUST
be narrow and justified in the pull request.

### VIII. Collaborative Delivery

Work MUST be developed on a descriptive feature or fix branch, not directly
on the shared default branch. Each change MUST be submitted through a pull
request for review by another teammate before integration. Pull requests
MUST summarize behavior and include test, lint, type-check, and build results
as applicable; reviewers MUST check constitution compliance. This makes
parallel student-team work reviewable and reduces integration surprises.

## Platform & Architecture Requirements

- **Application**: Next.js App Router with TypeScript; route and layout
  structure belongs under `app/`.
- **Styling**: Tailwind CSS is the required utility-first styling system.
- **Authentication**: Clerk is the required identity provider.
- **Persistence**: Supabase PostgreSQL is the required relational database.
  User-owned tables MUST enforce row ownership with Row Level Security.
- **Hosting**: Vercel is the required production deployment platform.
- **Configuration**: Secrets MUST be supplied through environment
  configuration and kept out of source control and client bundles.
- **Quality gates**: ESLint, TypeScript strict checking, automated tests, and
  a production build MUST pass before a pull request is merged.

## Delivery & Collaboration

Use descriptive branches such as `feature/expense-categories` or
`fix/monthly-total`. Keep pull requests focused, format changes with
Prettier, and request a teammate review before merging. Plans and task lists
MUST identify relevant tests and validation commands. When the repository
does not yet have a test runner or check script, add the minimal project
configuration needed with the first feature that requires it and document
the commands in that feature's plan.

## Governance

This constitution takes precedence over conflicting project conventions.
Amendments MUST be proposed in a pull request that explains the reason,
affected principles, and any required changes to templates or runtime
guidance. The project team MUST review and approve the amendment before it is
merged.

Version numbers use semantic versioning: MAJOR for backward-incompatible
governance changes or principle removals/redefinitions, MINOR for new
principles or materially expanded requirements, and PATCH for clarifications
or non-semantic wording changes. Compliance MUST be checked during planning
and again in pull-request review. Any exception MUST be explicit, limited in
scope, approved by the team, and recorded with its rationale.

**Version**: 1.0.0 | **Ratified**: TODO(RATIFICATION_DATE): Confirm with the project team. | **Last Amended**: 2026-11-05
