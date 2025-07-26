import { mkdir } from "fs/promises";
import * as fs from "node:fs";
import * as path from "path";

export async function initGit() {
  const pwd = path.join(process.cwd(), ".mygit");
  if (fs.existsSync("./mygit")) {
    console.log(`Reinitailized existing repository in ${pwd}`);
  } else {
    try {
      await mkdir("./.mygit", { recursive: true });
      console.log("Initialized");
    } catch (err) {
      console.error("Something went wrong when create .mygit dir!", err);
    }
  }
}
