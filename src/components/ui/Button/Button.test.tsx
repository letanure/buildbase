import {  screen } from "@testing-library/react";
import React from "react";
import { renderWithProviders } from "@/tests/utils";
import { describe, expect, it } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
	it("renders with text", () => {
		renderWithProviders(<Button>Click me</Button>);
		expect(screen.getByRole("button")).toHaveTextContent("Click me");
	});
});
