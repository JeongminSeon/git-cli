import { mkdir } from "fs/promises";
import * as fs from "node:fs";

export async function initGit() {
  try {
    await mkdir("./.mygit", { recursive: true });
    console.log(".git dir created");
  } catch (err) {
    console.error(err);
  }
}
