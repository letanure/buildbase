// Prevent using npm or yarn; enforce pnpm
const execPath = process.env.npm_execpath || "";

if (!/pnpm/.test(execPath)) {
  console.warn("\x1b[31mPlease use pnpm to install dependencies.\x1b[0m");
  process.exit(1);
}
