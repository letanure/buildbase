---
to: src/components/ui/<%= name %>/<%= name %>.tsx
---

"use client";
import React from "react";<% if (withVariants) { %>
import { cva } from "class-variance-authority";

const <%= name.toLowerCase() %>Variants = cva("rounded-md p-4", {
  variants: {
    tone: {
      default: "bg-muted",
      info: "bg-blue-100",
      warning: "bg-yellow-100",
    },
  },
  defaultVariants: {
    tone: "default",
  },
});<% } %>

type <%= name %>Props = {
  label?: string;<% if (!htmlAttributes) { %>
  className?: string;<% } %><% if (children) { %>
  children?: React.ReactNode;<% } %><% if (withVariants) { %>
  tone?: "default" | "info" | "warning";<% } %>
}<%- htmlAttributes ? " & React.HTMLAttributes<HTMLDivElement>" : "" %>;

export const <%= name %> = React.forwardRef<HTMLDivElement, <%= name %>Props>(
  ({ label = "<%- name %>"<% if (!htmlAttributes) { %>, className<% } %><% if (children) { %>, children<% } %><% if (withVariants) { %>, tone = "default"<% } %><% if (htmlAttributes) { %>, className, ...props<% } %> }, ref) => {
    return (
      <div
        ref={ref}
<% if (withVariants && htmlAttributes) { %>        className={<%= name.toLowerCase() %>Variants({ tone, className })} {...props}
<% } else if (withVariants && !htmlAttributes) { %>        className={<%= name.toLowerCase() %>Variants({ tone, className })}
<% } else if (!withVariants && htmlAttributes) { %>        className={className} {...props}
<% } else { %>        className={className}
<% } %>>
        {label}<% if (children) { %>
        {children}<% } %>
      </div>
    );
  }
);

<%= name %>.displayName = "<%= name %>";
