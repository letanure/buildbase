# ✅ Buildbase Tasks

## 🔧 Core Stack
- [x] pnpm
- [x] Next.js 15 (App Router)
- [x] TypeScript strict
- [x] TailwindCSS
- [ ] CSS tokens
- [x] next-intl (with [locale] routing for en, pt)

## 🗃️ Folder & Structure
- [x] Pages under [locale]
- [x] All main folders created (components, lib, types, tests, constants, styles)
- [x] Feature flags, env, config centralized
- [ ] Organize folder structure
- [ ] Declutter root (move dotfiles, etc. if possible)
- [ ] Add .env.example
- [ ] Add lib/env.ts with Zod + .env parser

## 🔐 Supabase Auth
- [x] Supabase Auth email
- [x] Supabase Auth magic link (configurable)
- [x] Supabase Auth social GitHub
- [x] Supabase Auth social Google
- [x] Supabase Auth social Apple
- [ ] Signup page
- [ ] Forgot password
- [ ] Reset password
- [ ] Email verification flows (sent, verified, failed, expired, etc.)
- [ ] Roles via profiles table
- [ ] Full RLS + middleware protection
- [ ] Supabase RLS + example: public/private table
- [ ] Supabase + session detection client/server
- [ ] Example Supabase DB: seed + migration
- [ ] lib/db abstraction for queries

## 🔑 Access & Permissions
- [ ] Middleware for protected routes (e.g., /en/protected)
- [ ] lib/permissions.ts for role-based access

## 🧭 Routing & Layouts
- [ ] App Router structure
- [ ] Grouped layouts: (auth), (marketing), (app), (shop)
- [ ] Default routes: /, /dashboard, /posts, /shop, /admin

## 🌐 i18n
- [x] Locales: en, pt
- [x] useLocale, useTranslations integrated
- [x] LanguageSwitcher built and tested
- [ ] Locale detection middleware

## 🎨 UI & Styling
- [x] TailwindCSS base
- [ ] Dark/light mode (auto + toggle)
- [ ] Icon pack: Lucide
- [ ] Basic UI kit:
  - [x] button
  - [ ] form
    - [ ] form-label
    - [ ] form-control
    - [ ] form-message
    - [ ] form-error
    - [ ] form-helper
    - [ ] form-hint
    - [ ] form-field (wrappers)
    - [ ] form-field-label
    - [ ] form-field-control
    - [ ] form-field-message
    - [ ] form-field-error
    - [ ] form-field-helper
    - [ ] form-field-hint
    - [ ] form-field-input
    - [ ] form-field-textarea
    - [ ] form-field-select
    - [ ] form-field-checkbox
    - [ ] form-field-radio
    - [ ] form-field-switch
    - [ ] form-field-file
    - [ ] form-field-date
    - [ ] form-field-time
    - [ ] form-field-datetime-local
    - [ ] form-field-number
    - [ ] form-field-email
    - [ ] form-field-password
    - [ ] form-field-search
    - [ ] form-field-tel
    - [ ] form-field-url
    - [ ] form-field-color
    - [ ] form-field-range
- [ ] Optional shadcn/ui support

## 📊 Analytics & Logs
- [x] lib/analytics.ts with trackEvent, trackPage, setAnalytics
- [x] Configurable via appConfig.analytics
- [x] Supports Umami, Google Analytics, Plausible (config-ready)
- [x] Central log system added with log.debug/info/warn/error()

## 🧪 Testing
- [x] Vitest for unit tests
- [x] Playwright for E2E + visual snapshots
- [ ] MSW used lightly
- [ ] jest-axe for accessibility
- [ ] Accessibility tests with landmarks, focus, aria
- [ ] MSW for Supabase + API mocks
- [ ] test-utils.tsx (context, wrappers, auth)

## 🧰 Dev Experience
- [x] Hygen for component/page generation
- [ ] Biome for lint/format/typecheck
- [ ] Hygen generators:
  - [ ] Pages
  - [x] UI Components
  - [ ] Components
- [ ] Middleware for:
  - [ ] Auth
  - [ ] Role
  - [ ] Locale
  - [ ] Theme
  - [ ] Feature flags

## 📚 Documentation
- [ ] Markdown + TSDoc + Typedoc (optional AI docgen)
- [x] Storybook with MDX planned
- [x] Storybook: finalize global context + MDX docs

## ⚙️ CI/CD
- [x] GitHub Actions:
  - [x] Lint, typecheck, tests, coverage
  - [x] Playwright E2E
- [ ] Vercel preview deploy
- [x] Optional release tagging

## 🧪 Snapshots
- [x] Visual diff with snapshot approval script
- [x] Manual approve/inspect flow with CLI + inquirer
- [x] Snapshots stored in e2e folder
- [x] Separate test:unit and test:e2e scripts

## 🧹 Misc
- [ ] Zod setup (lib/validation.ts)
- [ ] lib/errors.ts for reportError()

## Update folder structure to

.                                   # Root of the project
├── _templates                      # Hygen generators for providers, UI components
│   └── provider                    # Generator for custom providers
├── e2e                             # End-to-end tests, reports, snapshots
├── public                          # Static files served at /
├── scripts                         # Dev scripts
├── src                             # Main application code
│   ├── app                         # Next.js App Router routes
│   │   ├── [locale]                # Localized routes (e.g. /en, /pt)
│   │   └── auth                    # Auth-specific pages (e.g. login, register)
│   ├── components                  # App-scoped components and UI components
│   ├── config                      # Global constants, public keys, feature flags
│   ├── constants                   # Static values like routes, roles, timeouts
│   ├── hooks                       # Reusable React hooks (e.g. useDevice, useLogout)
│   ├── i18n                        # i18n routing, locale config, helpers
│   ├── icons                       # Centralized Lucide or custom SVG icons
│   ├── layouts                     # Shared layout shells (e.g. DashboardLayout)
│   ├── lib                         # Logic libraries and services
│   │   ├── analytics               # Analytics wrapper (trackEvent, etc.)
│   │   ├── supabase                # Supabase client, auth/session logic
│   │   └── errors                  # Error reporting (e.g. reportError)
│   ├── locales                     # next-intl translation JSONs
│   ├── middleware                  # Custom middleware logic (optional)
│   ├── permissions                 # Role-based access logic
│   ├── providers                   # React providers (e.g. ThemeProvider, AuthProvider)
│   ├── tests                       # App-specific test utils (e.g. test-utils.tsx)
│   ├── utils                       # Pure utility functions, formatters, parsers
│   ├── validators                  # Zod schemas or reusable form validators
│   └── features                    # (Optional) Feature-based grouping (e.g. auth, dashboard)
├── styles                          # Tailwind config, theme.css with tokens
├── tests                           # Global or root-level test helpers
└── types                           # Shared TypeScript types/interfaces