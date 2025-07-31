// cli 명령어 입력 받아보기

import { addGit } from "./add.js";
import { initGit } from "./init.js";

export async function myGit(argv: string[]): Promise<void> {
  const command = argv[0];

  switch (command) {
    case "init":
      await initGit();
      break;
    case "add":
      await addGit(argv[1]);
      break;
    case "commit":
      console.log("commit git 실행");
      break;
    default:
      console.log("Unknown Command");
  }
}
