import * as fs from "node:fs";
import * as path from "path";
import { ensureExists } from "./utils/fileUtils.js";

export async function initGit() {
  // 현재 폴더의 위치
  const pwd = path.join(process.cwd(), ".mygit");

  if (fs.existsSync("./mygit")) {
    console.log(`Reinitailized existing repository in ${pwd}`);
  } else {
    console.log(`Initialized empty Git repository in ${pwd}`);
  }

  // 파일 및 디렉토리 생성
  await ensureExists("./.mygit", true);
  await ensureExists("./.mygit/refs/heads", true);
  await ensureExists("./.mygit/objects", true);
  await ensureExists("./.mygit/HEAD", false, "ref: refs/heads/master");
  await ensureExists("./.mygit/index", false, "");
  await ensureExists("./.mygit/refs/heads/master", false, "");
}
