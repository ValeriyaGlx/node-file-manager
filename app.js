import * as readline from "node:readline/promises";

import { getUserName } from "./src/services/getUserName.js";
import { MESSAGES } from "./src/utils/constants.js";
import { getCommand } from "./src/services/getCommand.js";

const greeting = async () => {
  const userName = await getUserName();
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on("SIGCONT", async () => {
    console.log(MESSAGES.greeting(userName));
    console.log(MESSAGES.directory(process.cwd()));
  });
  rl.emit("SIGCONT");

  rl.on("line", (input) => {
    if (input.trim() === ".exit") {
      rl.close();
    } else {
      getCommand(input);
      console.log(MESSAGES.directory(process.cwd()));
    }
  });


  rl.on("close", () => {
    console.log(MESSAGES.farewell(userName));
  });
};

await greeting();
