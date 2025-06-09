#!/usr/bin/env tsx
// scripts/approve-snapshot.js
import fs from 'fs';
import path from 'path';
import inquirer from 'inquirer';

const reportDir = path.resolve('e2e/playwright-report');
const snapshotDir = path.resolve('e2e');

const folders = fs.readdirSync(reportDir).filter((name: string) => {
  const fullPath = path.join(reportDir, name);
  return fs.statSync(fullPath).isDirectory();
});

if (folders.length === 0) {
  console.log("No snapshot folders to approve.");
  process.exit(0);
}

const choices: Array<{ name: string; value: { folder: string; fileName: string; testName: string } }> = folders
  .map((folder) => {
    const match = folder.match(/^(.+)\.e2e\.ts-(.+)-visual-snapshot$/);
    if (!match) return null;
    const [, fileName, testName] = match;
    return {
      name: `${fileName} - ${testName}`,
      value: { folder, fileName, testName },
    };
  })
  .filter(Boolean) as Array<{ name: string; value: { folder: string; fileName: string; testName: string } }>;

if (choices.length === 0) {
  console.log("No valid snapshot folders found.");
  process.exit(0);
}

const { selected }: { selected: { folder: string; fileName: string; testName: string } } = await inquirer.prompt([
  {
    type: 'list',
    name: 'selected',
    message: 'Select a snapshot to review and approve:',
    choices,
  },
]);

const { folder, fileName, testName } = selected;

const actualPath = path.join(reportDir, folder, `${testName}-actual.png`);
const diffPath = path.join(reportDir, folder, `${testName}-diff.png`);
const expectedPath = path.join(snapshotDir, `${fileName}.e2e.ts-snapshots`, `${testName}-darwin.png`);

console.log(`\nActual: ${actualPath}`);
console.log(`Diff:   ${diffPath}`);
console.log(`Will copy to: ${expectedPath}\n`);

const { approve }: { approve: boolean } = await inquirer.prompt([
  {
    type: 'confirm',
    name: 'approve',
    message: 'Approve this snapshot?',
  },
]);

if (approve) {
  if (!fs.existsSync(actualPath)) {
    console.warn(`⚠️ Actual snapshot not found: ${actualPath}`);
  } else {
    fs.mkdirSync(path.dirname(expectedPath), { recursive: true });
    fs.copyFileSync(actualPath, expectedPath);
    fs.rmSync(path.join(reportDir, folder), { recursive: true, force: true });
    console.log(`✅ Approved and cleaned: ${testName}`);
  }
} else {
  console.log('❌ Not approved. No changes made.');
}