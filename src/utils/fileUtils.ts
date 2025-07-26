import { mkdir, writeFile } from "node:fs/promises";
import * as fs from "fs";

// 파일이 있는지 확인 -> 없으면 생성
export async function ensureExists(path: string, isDir: boolean, content = "") {
  try {
    if (!fs.existsSync(path)) {
      if (isDir) {
        // 디렉토리 생성
        await mkdir(path, { recursive: true });
      } else {
        // 파일 생성
        await writeFile(path, content);
      }
    }
  } catch (err) {
    console.error(
      `❌ Failed to create ${isDir ? "directory" : "file"} at ${path}:`,
      err
    );
  }
}
