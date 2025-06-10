


# Buildbase Project Tasks

## ✅ COMPLETED

### ✅ STACK
- [x] pnpm only
- [x] Next.js 15 with App Router
- [x] TypeScript strict mode
- [x] TailwindCSS
- [x] next-intl for i18n (en, pt)
- [x] Custom UI components (Tailwind)
- [x] Analytics wrapper (`lib/analytics.ts`, multi-provider)
- [x] Code generators (Hygen)
- [x] Testing: Vitest, Playwright
- [x] CI/CD with GitHub Actions
- [x] Semantic commits (Husky + Commitlint)
- [x] `src/config.ts` to centralize constants

### ✅ FILE STRUCTURE / NAMING
- [x] Using expected folder structure (src/app, src/lib, etc.)
- [x] Naming conventions followed (components, types, hooks, helpers)

### ✅ RULES
- [x] pnpm-only enforcement
- [x] Semantic commit messages
- [x] Feature toggles via config
- [x] Public keys via `appConfig.publicKeys`
- [x] All logic using `trackEvent()`
- [x] GitHub Actions run lint, typecheck, test, e2e

### ✅ TESTING
- [x] Unit tests colocated
- [x] E2E tests with Playwright
- [x] E2E snapshot approval CLI flow
- [x] Initial MSW setup
- [x] Coverage output
- [x] Local test/dev workflow working

---

## 🟡 IN PROGRESS

### 🟡 STACK
- [ ] Supabase (Auth, DB, RLS, Storage)
- [ ] Icons lib (Lucide or custom)
- [ ] Validation with Zod
- [ ] Middleware: route protection, API rate limiting

### 🟡 RULES
- [ ] Add tests for all shared components/routes
- [ ] Support dark/light mode via CSS tokens everywhere
- [ ] Replace all `console.error` with `reportError()`
- [ ] Add/update `README.md` when logic or structure changes

---

## 🔜 TODO / NEXT

### 🔜 TESTING
- [ ] MSW usage in tests
- [ ] Accessibility tests with `jest-axe`

### 🔜 SUGGESTED ADDITIONS
- [ ] `lib/errors.ts`: error reporting wrapper
- [ ] `lib/permissions.ts`: role-based access control
- [ ] `lib/validation.ts`: shared Zod schemas

### 🔜 OPTIONAL INTEGRATIONS
- [ ] Storybook (MDX per component, dark mode toggle)
- [ ] AI-powered docs (Vercel AI SDK or CLI)
- [ ] Local dev banner (`pnpm dev`)
- [ ] Spell checker (`cspell`)

