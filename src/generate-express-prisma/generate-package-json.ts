import * as fs from "fs/promises";
import * as path from "path";
import { exec } from "child_process";

export const generatePackageJSON = async (
  projectPath: string,
  projectName: string
) => {
  await fs.writeFile(
    path.join(projectPath, "package.json"),
    JSON.stringify(
      {
        name: projectName,
        version: "1.0.0",
        description: "",
        main: "index.js",
        scripts: {
          start: "npx ts-node ./src/index.ts",
          createRoute: "npx ts-node ./src/generator/index.ts createRoute",
          createModel: "npx ts-node ./src/generator/index.ts createModel",
        },
        keywords: [],
        author: "",
        license: "ISC",
      },
      null,
      2
    ),
    "utf-8"
  );

  await exec(
    "npm install typescript ts-node express enquirer prisma @prisma/client mongodb dotenv && npm i --save-dev @types/node @types/express",
    { cwd: projectPath }
  );
};
