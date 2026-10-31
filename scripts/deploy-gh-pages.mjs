import { execSync } from "node:child_process";
import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const out = join(root, "out");
const stage = join(root, ".gh-pages-staging");

if (!existsSync(out)) {
  console.error("Run npm run build first (missing out/).");
  process.exit(1);
}

rmSync(stage, { recursive: true, force: true });
mkdirSync(stage, { recursive: true });
cpSync(out, stage, { recursive: true });

execSync("git init -b gh-pages", { cwd: stage, stdio: "inherit" });
execSync('git config user.email "harakeayman@gmail.com"', { cwd: stage, stdio: "inherit" });
execSync('git config user.name "Ayman El Harake"', { cwd: stage, stdio: "inherit" });
execSync("git add -A", { cwd: stage, stdio: "inherit" });
execSync('git commit -m "Deploy static site"', { cwd: stage, stdio: "inherit" });
execSync("git remote add origin https://github.com/aymanthefirst/portfolio.git", {
  cwd: stage,
  stdio: "inherit",
});
execSync("git push -f origin gh-pages", { cwd: stage, stdio: "inherit" });

try {
  rmSync(stage, { recursive: true, force: true });
} catch {
  console.warn("Could not remove .gh-pages-staging (ignored); delete manually if needed.");
}
console.log("Deployed to gh-pages.");
