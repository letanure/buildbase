import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";
import React from "react";

// Mock next-intl navigation globally
vi.mock("@/i18n/navigation", () => ({
  usePathname: () => "/en",
  useRouter: () => ({
    replace: vi.fn(),
    push: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
  }),
  Link: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => React.createElement("a", props),
}));
