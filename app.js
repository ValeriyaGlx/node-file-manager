import * as readline from "node:readline/promises";
import os from "os";

import { getUserName } from "./src/services/getUserName.js";
import { MESSAGES } from "./src/utils/constants.js";
import { getCommand } from "./src/services/getCommand.js";

const startProgramm = async () => {
  const userName = await getUserName();
  process.chdir(os.homedir());

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on("SIGCONT", async () => {
    console.log(process.cwd());
    console.log(MESSAGES.greeting(userName));
    console.log(MESSAGES.directory(process.cwd()));
    console.log(MESSAGES.waiting(userName));
  });
  rl.emit("SIGCONT");

  rl.on("line", async (input) => {
    if (input === ".exit") {
      return rl.close();
    }
    await getCommand(input);
    console.log(MESSAGES.directory(process.cwd()));
    console.log(MESSAGES.waiting(userName));
  });

  rl.on("close", () => {
    console.log(MESSAGES.farewell(userName));
  });
};

await startProgramm();
