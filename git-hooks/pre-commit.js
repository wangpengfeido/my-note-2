const process = require("process");
const child_process = require("child_process");

const canNotHave = "babcdenabcdepabcdem".replace(/abcde/g, "");

try {
  const res = child_process.execSync("git diff --cached", {
    encoding: "utf-8",
  });
  if (res.includes(canNotHave)) {
    console.log(`提交中禁止存在:${canNotHave}`);
    process.exit(1);
  }
} catch {
  process.exit(1);
}

process.exit(0);
