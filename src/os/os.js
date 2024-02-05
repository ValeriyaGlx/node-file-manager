/**
 * Get the operating system info and print it into console
 * @param {string} flag - flag of operation
 */

import { EOL, cpus, userInfo, arch } from 'node:os';
import { MESSAGES } from "../utils/constants.js";

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
      console.log(arch());
      break;
    default:
        console.log(MESSAGES.failedOperation);
      break;
  }
};
