#!/usr/bin/env node

import { prompt } from "enquirer";
import * as fs from "fs/promises"; 
import * as path from "path";


import { generateExpressPrisma } from "./src/generate-express-prisma/generate";
import { ConnectionCheckOutStartedEvent } from "mongodb";

(async () => {
  const { projectName } = await prompt({
    type: "input",
    name: "projectName",
    message: "Come vuoi chiamare il tuo progetto?",
    initial: "new-node-project",
  })as any;

  const { framework } = await prompt({
    type: "select",
    name: "framework",
    message: "Che framework vuoi usare?",
    choices: ["express", "fastify"],
  })as any;

  const projectPath = path.resolve(projectName);

  await fs.mkdir(projectPath, { recursive: true });

  if (framework === "express") {
    await generateExpressPrisma(projectPath, projectName);

  } 

})();
