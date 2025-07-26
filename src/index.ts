// cli 명령어 입력 받아보기

import { initGit } from "./init";

const argv: string[] = process.argv.slice(2); // 인덱스 2부터 가져옴

const command = argv[0];

switch (command) {
  case "init":
    initGit();
    break;
  case "add":
    console.log("add git 실행");
    break;
  case "commit":
    console.log("commit git 실행");
    break;
  default:
    console.log("Unknown Command");
}
