if (!/pnpm/.test(process.env.npm_execpath || "")) {
  console.warn("\x1b[31mPlease use pnpm to install dependencies.\x1b[0m");
  process.exit(1);
}
