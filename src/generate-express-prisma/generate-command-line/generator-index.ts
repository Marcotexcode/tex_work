import * as fs from "fs/promises";
import * as path from "path";

export const generatorIndex = async (projectPath: string) => {
  const serverCode = `
      import { commandCreateModel } from "./create-model";
      import { commandCreateRoute } from "./create-route";

      const args = process.argv.slice(2);

      (async () => {
        switch (args[0]) {
          case "createRoute":
            await commandCreateRoute();
            break;
          case "createModel":
            await commandCreateModel();
            break;
          default:
            console.error("Comando non valido.");
            break;
        }
      })();
    `;

  await fs.writeFile(
    path.join(projectPath, "src/generator/index.ts"),
    serverCode
  );
};
