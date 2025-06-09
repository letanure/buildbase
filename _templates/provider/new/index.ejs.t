---
to: src/providers/<%= name %>.tsx
---

import React, { createContext, useContext, useState } from "react";

type <%= name.charAt(0).toUpperCase() + name.slice(1) %>ContextType = {
  value: string;
  setValue: (v: string) => void;
};

const <%= name.charAt(0).toUpperCase() + name.slice(1) %>Context = createContext<<%= name.charAt(0).toUpperCase() + name.slice(1) %>ContextType | undefined>(undefined);

export const <%= name.charAt(0).toUpperCase() + name.slice(1) %>Provider = ({ children }: { children: React.ReactNode }) => {
  const [value, setValue] = useState("");

  return (
    <<%= name.charAt(0).toUpperCase() + name.slice(1) %>Context.Provider value={{ value, setValue }}>
      {children}
    </<%= name.charAt(0).toUpperCase() + name.slice(1) %>Context.Provider>
  );
};

<% if (withHook) { %>
export function use<%= name.charAt(0).toUpperCase() + name.slice(1) %>() {
  const context = useContext(<%= name.charAt(0).toUpperCase() + name.slice(1) %>Context);
  if (!context) {
    throw new Error("use<%= name.charAt(0).toUpperCase() + name.slice(1) %> must be used within a <%= name.charAt(0).toUpperCase() + name.slice(1) %>Provider");
  }
  return context;
}
<% } %>