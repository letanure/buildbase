import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
	it("renders with text", () => {
		render(<Button>Click me</Button>);
		expect(screen.getByRole("button")).toHaveTextContent("Click me");
	});
});
