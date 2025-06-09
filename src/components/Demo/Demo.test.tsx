import { screen } from "@testing-library/react";
import { renderWithProviders } from "@/tests/utils";
import React from "react";
import { describe, expect, it } from "vitest";
import { Demo } from "./Demo";

describe("Demo", () => {
  it("renders without crashing", () => {
    renderWithProviders(<Demo />);
    expect(screen.getByRole("generic")).toBeInTheDocument();
  });




});