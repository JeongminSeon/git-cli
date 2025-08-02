// 명령어를 먼저 받는다.
// argv[1]이 있는지 확인

import { getFiles } from "./utils/getFiles.js";

export async function addGit(filePath: string) {
  // 근데 만약에 filePath에 string이 안들어온다면 ?
  // 에러 처리를 myGit에서 해줘야할까 addGit에서 해줘야할까 ?

  if (!filePath) {
    console.log("Nothing specifed, nothing added");
    return;
  }

  // 파일인지 명령어인지 확인
  // 경로면 getFiles 실행
  //
  const files = await getFiles(filePath);
  console.log(files);
}
