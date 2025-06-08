"use client";
import { type VariantProps, cva } from "class-variance-authority";
import React from "react";

const buttonVariants = cva(
	"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer hover:brightness-95",
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground hover:bg-primary/90",
				outline:
					"border border-input bg-background hover:bg-accent hover:text-accent-foreground",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				link: "underline-offset-4 hover:underline text-primary",
			},
			size: {
				sm: "h-8 px-3 rounded-md",
				md: "h-10 px-4 py-2",
				lg: "h-11 px-8 rounded-md",
			},
			fullWidth: {
				true: "w-full",
				false: "",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "md",
		},
	},
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, fullWidth, ...props }, ref) => {
		return (
			<button
				ref={ref}
				type={props.type ?? "button"}
				className={buttonVariants({
					variant,
					size,
					fullWidth,
					class: className,
				})}
				{...props}
			/>
		);
	},
);

Button.displayName = "Button";
