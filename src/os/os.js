
import { EOL, cpus, userInfo } from 'node:os';
import { MESSAGES } from "../utils/constants.js";

// TODO

export const os = (flag) => {
  switch (flag) {
    case "--EOL":
      console.log(MESSAGES.EOL(EOL));
      break;
    case "--cpus":
      console.table(cpus());
      break;
    case "--homedir":
      console.log(userInfo().homedir);
      break;
    case "--username":
      console.log(userInfo().username);
      break;
    case "--architecture":
      break;

    default:
        console.log(MESSAGES.failedOperation);
      break;
  }
};
