import * as fs from "fs/promises";
import * as path from "path";

export const generatorIndex = async (projectPath: string) => {
  const serverCode = `
      import { commandCreateRoute } from "./create-route";

      (async () => {
        await commandCreateRoute();
      })();
    `;

  await fs.writeFile(
    path.join(projectPath, "src/generator/index.ts"),
    serverCode
  );
};
