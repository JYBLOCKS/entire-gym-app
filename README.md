# EntireGym — Multi-Gym Application (MVP)

## Tech Stack

- React + Vite
- Zustand (state management)
- Material UI + Phosphor Icons (UI)
- React Router (routing)
- Vitest + React Testing Library (testing)
- Supabase (Auth, Postgres, RLS)
- Node.js + pnpm (workspaces and scripts)

## Scripts (pnpm)

- `pnpm dev` — start Vite development server
- `pnpm test` — run Vitest + RTL test suite
- `pnpm build` — production build
- `pnpm preview` — preview production build locally

## Environment Variables

Create a `.env` file at the root with:
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...

## Core Principles

- **Strict multi-tenancy:** all data is isolated by `gym_id` (tenant).
- **Privacy by design:** explicit consent required for sensitive health data.
- **Clean Architecture (feature-sliced):** clear separation of concerns.
- **Critical test coverage:** authentication, payment lockouts, and workout flow must be verified.

## Developer Onboarding

1. Run `pnpm i` to install dependencies.
2. Create a Supabase project and apply `/supabase/schema.sql`.
3. Configure your `.env` variables with your Supabase URL and anon key.
4. Run `pnpm dev` and open `http://localhost:5173`.

## MVP Roadmap

- Authentication + user profiles + role management (per gym)
- Gym subscription and payment lockout
- CRUD for clients + health and body measurements
- Exercise, muscle, and equipment catalog
- Generic and personalized workout routines
- Routine execution view (muscles, equipment, timers)
- Membership countdown for each client

## Folder Structure (Clean Architecture)

```

```

### Notes for Production

- All sensitive operations should be guarded by **RLS policies** in Supabase.
- Payment lockout logic can be enforced both at API level and frontend route guards.
- Include analytics/logging for key user events (login, workout start, membership expiration).
- Consider adding dark/light theme toggle and localization support in future iterations.
