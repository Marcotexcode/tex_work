import * as fs from "fs/promises";
import * as path from "path";

export const generateDirectoryStructure = async (projectPath: string) => {
  const srcDir = path.join(projectPath, "src");
  await fs.mkdir(srcDir);

  const modelsDir = path.join(srcDir, "models");
  await fs.mkdir(modelsDir);

  const routesDir = path.join(srcDir, "routes");
  await fs.mkdir(routesDir);

  const servicesDir = path.join(srcDir, "services");
  await fs.mkdir(servicesDir);

  const middlewaresDir = path.join(srcDir, "middlewares");
  await fs.mkdir(middlewaresDir);

  const validatorDir = path.join(srcDir, "validator");
  await fs.mkdir(validatorDir);
}