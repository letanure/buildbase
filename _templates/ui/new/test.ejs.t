---
to: src/components/ui/<%= name %>/<%= name %>.test.tsx
---
import { screen } from "@testing-library/react";
import { renderWithProviders } from "@/tests/utils";
import React from "react";
import { describe, expect, it } from "vitest";
import { <%= name %> } from "./<%= name %>";

describe("<%= name %>", () => {
  it("renders without crashing", () => {
    renderWithProviders(<<%= name %> />);
    expect(screen.getByRole("generic")).toBeInTheDocument();
  });

<% if (children) { %>
  it("renders children content", () => {
    renderWithProviders(<<%= name %>>Hello</<%= name %>>);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });
<% } %>

<% if (withVariants) { %>
  it("applies variant class for tone='info'", () => {
    renderWithProviders(<<%= name %> tone="info" />);
    const element = screen.getByRole("generic");
    expect(element.className).toContain("bg-blue-100");
  });

  it("applies variant class for tone='warning'", () => {
    renderWithProviders(<<%= name %> tone="warning" />);
    const element = screen.getByRole("generic");
    expect(element.className).toContain("bg-yellow-100");
  });
<% } %>
});