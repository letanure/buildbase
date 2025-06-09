import inquirer from "inquirer";
import { execSync } from "node:child_process";

const generators = [
  { name: "UI Component", value: "ui new" },
  { name: "Provider", value: "provider new" },
];

async function main() {
  const { type } = await inquirer.prompt([
    {
      type: "list",
      name: "type",
      message: "What do you want to generate?",
      choices: generators,
    },
  ]);

  execSync(`pnpm hygen ${type}`, { stdio: "inherit" });
}

main();