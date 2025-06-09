This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Running E2E Tests

This project uses [Playwright](https://playwright.dev/) for end-to-end (E2E) testing.

### Run locally

Install Playwright dependencies and browsers:

```bash
pnpm exec playwright install --with-deps
```

Run E2E tests in headless mode:

```bash
pnpm test:e2e
```

To update visual snapshots:

```bash
pnpm e2e:snapshot:updateAll
```

To review and approve each snapshot manually:

```bash
pnpm e2e:snapshot:approveEach
```

To open the HTML report interface:

```bash
pnpm e2e:ui
```

To run tests in headed mode (for debugging):

```bash
pnpm e2e:headed
```

### GitHub Actions

On every push or PR, E2E tests run automatically using a matrix for Chromium and Firefox.

Artifacts are generated automatically for inspection:

- **playwright-report-*** – HTML test report
- **playwright-artifacts-*** – Screenshots and trace logs

### Accessing Artifacts

1. Go to the **Actions** tab on GitHub.
2. Select the latest **E2E Tests** workflow run.
3. Scroll to the bottom and download the artifacts.
4. You can open the HTML report locally by running:

```bash
npx playwright show-report
```

## GitHub Actions: Unit Test Workflow

This project uses GitHub Actions to run unit tests automatically when code is pushed or a pull request is opened against the `main` branch.

### What it includes

The unit test workflow (`unit.yml`) performs:

- 🔍 **Lint check:** Runs `pnpm lint` to catch code quality issues.
- 🧠 **Type check:** Runs `pnpm tsc --noEmit` to catch TypeScript errors.
- 🧪 **Unit tests:** Runs `pnpm test:unit` using [Vitest](https://vitest.dev/).

### Workflow dependency

The E2E workflow depends on this unit test workflow. E2E tests will only run **if the unit test workflow passes**.

### How to view results

1. Go to the **Actions** tab on your GitHub repository.
2. Click on the **Unit Tests** workflow.
3. Select a run to see full logs and test results.
