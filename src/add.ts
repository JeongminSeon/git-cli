// 명령어를 먼저 받는다.
// argv[1]이 있는지 확인

import { getFiles } from "./utils/getFiles.js";

export async function addGit(filePath: string) {

  if (!filePath) {
    console.log("Nothing specifed, nothing added");
    return;
  }

  const files = await getFiles(filePath);
  console.log(files);
}
