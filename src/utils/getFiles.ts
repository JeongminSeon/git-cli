import { readdir, readFile } from "fs/promises";
import * as path from "path";

// 파일을 파싱하여 무시할 패턴 배열 반환
async function getIgnorePatterns(): Promise<string[]> {
  try {
    const gitignorePath = path.resolve(".gitignore");
    const content = await readFile(gitignorePath, "utf8");
    const patterns = content
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line !== "" && !line.startsWith("#"));

    return patterns.concat([".git/", ".mygit/"]);
  } catch (error) {
    return []; // 비어있으면 반환 X
  }
}

// 특정 파일이 무시 대상인지 판단
function isIgnored(filePath: string, ignorePatterns: string[]): boolean {
  const relativePath = path.relative(process.cwd(), filePath);
  return ignorePatterns.some((pattern) => {
    // 디렉토리 무시
    if (pattern.endsWith("/")) {
      return relativePath.startsWith(pattern.slice(0, -1));
    }
    // 정확히 일치하거나, 하위 경로인 경우
    return relativePath === pattern || relativePath.startsWith(`${pattern}/`);
  });
}

// 모든 파일 재귀적으로 수집
async function getAllFiles(dir: string): Promise<string[]> {
  try {
    const dirents = await readdir(dir, { withFileTypes: true });
    const files = await Promise.all(
      dirents.map(async (dirent) => {
        const res = path.resolve(dir, dirent.name);
        if (dirent.isDirectory()) {
          return getAllFiles(res);
        } else {
          return res;
        }
      })
    );
    return files.flat();
  } catch (err) {
    return [];
  }
}

// gitignore 필터링된 파일목록 반환
export async function getFiles(dir: string): Promise<string[]> {
  const ignorePatterns = await getIgnorePatterns();
  const allFiles = await getAllFiles(dir);
  return allFiles.filter((file) => !isIgnored(file, ignorePatterns));
}
