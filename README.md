# FlowDesk API

The backend for **FlowDesk** — a multi-tenant HR & Payroll SaaS platform. Built with **NestJS 11**, **Prisma 7**, **PostgreSQL**, and **Redis/BullMQ**.

This service exposes the versioned REST API (`/api/v1`), a Socket.IO gateway for real-time events, Stripe billing webhooks, and a set of background job processors (payroll calculation, payslip PDFs, emails, push notifications, scheduled reports).

> Part of the FlowDesk monorepo alongside [`flowdesk-web`](../flowdesk-web) (Next.js) and [`flowdesk-mobile`](../flowdesk-mobile) (Flutter). The full product specification lives in [`../flowdesk.md`](../flowdesk.md).

---

## What's inside

| Area | Detail |
|---|---|
| **Multi-tenancy** | Pool model — one database, every row scoped by `organization_id`. Tenant resolved from the JWT and enforced by guards/middleware. |
| **Auth** | Email/password (JWT access + refresh), Google OAuth, email verification, password reset, 2FA (TOTP), session management. |
| **Domain modules** | Organizations, departments, locations, employees, recruitment, onboarding, attendance, shifts, leave, payroll, performance, assets, notifications, announcements, reports, audit, billing, uploads, settings. |
| **Real-time** | Socket.IO gateway (`src/gateways`) for notifications, attendance, payroll progress, etc. |
| **Background jobs** | BullMQ processors in `src/jobs` (payroll, email, push, reports) + scheduled cron jobs. |
| **Integrations** | Cloudinary (files), Stripe (billing), SendGrid (email), Firebase Admin (FCM push). |

---

## Prerequisites

- **Node.js** ≥ 20
- **pnpm** (`npm install -g pnpm`)
- **PostgreSQL** 15+ (local, or a managed instance such as Aiven — SSL required)
- **Redis** 7+ (local or managed, e.g. Upstash)
- Accounts/keys for Cloudinary, Stripe, SendGrid, and Firebase (optional for local dev, but features that depend on them won't work without keys)

---

## Setup (clone & run)

```bash
# 1. Clone and enter the API
git clone <repo-url>
cd FlowDesk/flowdesk-api

# 2. Install dependencies
#    (postinstall runs `prisma generate` automatically)
pnpm install

# 3. Create your environment file
cp .env.example .env
#    Then fill in DATABASE_URL, REDIS_URL, JWT secrets, and any
#    third-party keys you need. See "Environment variables" below.

# 4. Apply database migrations (creates the schema)
pnpm prisma:migrate        # dev — creates/applies a migration
#    For an existing migration set in CI/prod use:
#    pnpm prisma:deploy

# 5. Start the API in watch mode
pnpm start:dev
```

The API listens on **http://localhost:4000** by default. Swagger API docs are served by the `@nestjs/swagger` setup (check `src/main.ts` for the exact path, typically `/docs`).

### Quickest path with Docker

A local Postgres + Redis pair can be started from the repo root using the Docker Compose snippet in [`../flowdesk.md`](../flowdesk.md) (section 17). Point `DATABASE_URL` / `REDIS_URL` in `.env` at those containers, then run steps 4–5 above.

---

## Environment variables

Copy `.env.example` → `.env` and fill in the values. Key groups:

| Group | Variables |
|---|---|
| **App** | `NODE_ENV`, `PORT`, `API_VERSION`, `CLIENT_URL` |
| **Database** | `DATABASE_URL` (Postgres URI; keep `?sslmode=require` for Aiven) |
| **Redis** | `REDIS_URL` |
| **JWT** | `JWT_SECRET`, `JWT_EXPIRES_IN`, `REFRESH_TOKEN_SECRET`, `REFRESH_TOKEN_EXPIRES_IN` |
| **Google OAuth** | `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `GOOGLE_CALLBACK_URL` |
| **Cloudinary** | `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`, `CLOUDINARY_UPLOAD_FOLDER` |
| **Stripe** | `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `STRIPE_*_PRICE_ID` |
| **SendGrid** | `SENDGRID_API_KEY`, `SENDGRID_FROM_EMAIL`, `SENDGRID_FROM_NAME` |
| **Firebase** | `FIREBASE_PROJECT_ID`, `FIREBASE_PRIVATE_KEY`, `FIREBASE_CLIENT_EMAIL` |
| **Security** | `BCRYPT_ROUNDS`, `THROTTLE_TTL`, `THROTTLE_LIMIT` |
| **Misc** | `NAGER_API_BASE_URL` (public-holidays import, optional) |

---

## Scripts

| Command | Description |
|---|---|
| `pnpm start` | Start the app |
| `pnpm start:dev` | Start in watch mode |
| `pnpm start:debug` | Watch mode with debugger |
| `pnpm start:prod` | Run the compiled build (`node dist/main`) |
| `pnpm build` | Compile to `dist/` |
| `pnpm lint` | ESLint with `--fix` |
| `pnpm format` | Prettier over `src` and `test` |
| `pnpm test` | Unit tests (Jest) |
| `pnpm test:e2e` | End-to-end tests |
| `pnpm test:cov` | Coverage report |
| `pnpm prisma:generate` | Regenerate the Prisma client |
| `pnpm prisma:migrate` | Create & apply a dev migration |
| `pnpm prisma:deploy` | Apply migrations (CI/prod) |
| `pnpm prisma:studio` | Open Prisma Studio |

---

## Project structure

```
flowdesk-api/
├── src/
│   ├── main.ts                 # Bootstrap (CORS, Swagger, pipes, helmet)
│   ├── app.module.ts
│   ├── common/                 # Decorators, guards, interceptors, filters, middleware, DTOs
│   ├── config/                 # app / database / jwt config
│   ├── modules/                # Domain modules (auth, employees, payroll, …)
│   ├── gateways/               # Socket.IO gateway
│   ├── jobs/                   # BullMQ processors
│   ├── generated/prisma/       # Generated Prisma client
│   └── prisma/                 # PrismaService + module
├── prisma/
│   ├── schema.prisma           # Data model
│   └── migrations/
├── .env.example
└── package.json
```

---

## Deployment

1. Provision PostgreSQL + Redis (managed recommended).
2. Set all production environment variables.
3. `pnpm install && pnpm build`
4. `pnpm prisma:deploy` to apply migrations.
5. `pnpm start:prod`.

Configure the Stripe webhook endpoint to point at `/api/v1/billing/webhooks` and set `STRIPE_WEBHOOK_SECRET` accordingly. See [`../flowdesk.md`](../flowdesk.md) §17 for the full service list and build order.
