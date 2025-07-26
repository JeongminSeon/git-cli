import { mkdir, writeFile } from "fs/promises";
import * as fs from "node:fs";
import * as path from "path";

export async function initGit() {
  // 현재 폴더의 위치
  const pwd = path.join(process.cwd(), ".mygit");

  if (fs.existsSync("./mygit")) {
    console.log(`Reinitailized existing repository in ${pwd}`);
  } else {
    try {
      // 필요한 디렉토리 생성
      await mkdir("./.mygit", { recursive: true });
      await mkdir("./mygit/refs/heads", { recursive: true });
      await mkdir("./mygit/objects", { recursive: true });

      // 필요한 파일 생성
      await writeFile("./mygit/HEAD", "ref: refs/heads/master");
      await writeFile("./mygit/index", "");
      await writeFile("./mygit/refs/hgeads/master", "");

      console.log(`Initialized empty Git repository in ${pwd}`);
    } catch (err) {
      console.error("Something went wrong when create .mygit dir!", err);
    }
  }
}
