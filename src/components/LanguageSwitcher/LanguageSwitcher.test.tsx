import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { IntlProvider } from "next-intl";
import { enabledLocales } from "@/config";

const messages = { test: "value" };

describe("LanguageSwitcher", () => {
  it("renders all enabled locales as links", () => {
    render(
      <IntlProvider locale="en" messages={messages}>
        <LanguageSwitcher />
      </IntlProvider>
    );
    enabledLocales.forEach(({ label }) => {
      expect(screen.getAllByRole("link", { name: label })).not.toHaveLength(0);
    });
  });

  it("marks the current locale as active", () => {
    render(
      <IntlProvider locale="en" messages={messages}>
        <LanguageSwitcher />
      </IntlProvider>
    );
    const activeLink = screen.getByRole("link", { name: enabledLocales.find(l => l.code === "en")!.label });
    expect(activeLink).toHaveAttribute("aria-current", "page");
    // expect(activeLink).toHaveClass("text-blue-500");
  });
});
