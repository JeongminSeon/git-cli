// cli 명령어 입력 받아보기

import { initGit } from "./init.js";

export async function myGit(argv: string[]): Promise<void> {
  const command = argv[0];

  switch (command) {
    case "init":
      await initGit();
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
}
