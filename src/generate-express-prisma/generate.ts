import { generateIndex } from "./generate-index";
import { generateExampleRoute, generateRoute } from "./generate-route";
import { generateExampleService } from "./generate-service";
import { generatePackageJSON } from "./generate-package-json";
import { generateTsConfig } from "./generate-ts-config";
import { generateDirectoryStructure } from "./generate-directory-structure";
import { generateEnv } from "./generate-env";
import { generateSchemaPrisma } from "./generate-schema-prisma";
import { generateTypes } from "./generate-type";
import { generatorIndex } from "./generate-command-line/generator-index";
import { generatorRoute } from "./generate-command-line/create-route";
import { generatorService } from "./generate-command-line/create-service";
import { generatorModel } from "./generate-command-line/create-model";
import { generatorTypes } from "./generate-command-line/create-types";

export const generateExpressPrisma = async (
  projectPath: string,
  projectName: string,
  urlDb: string
) => {
  // Generate package.json
  await generatePackageJSON(projectPath, projectName);

  // Generate .env
  await generateEnv(projectPath, urlDb);

  // Generate tsconfig.json
  await generateTsConfig(projectPath);

  // Generate directory structure.
  await generateDirectoryStructure(projectPath);

  // Generate prisma.schema
  await generateSchemaPrisma(projectPath);

  // Generate index.js
  await generateIndex(projectPath);

  // Generate example route
  await generateExampleRoute(projectPath);

  // Generate route.ts
  await generateRoute(projectPath);

  // Generate route.ts
  await generateTypes(projectPath);

  // Generate services example.service.ts
  await generateExampleService(projectPath);

  // TODO CONTROLLARE QUESTE FUNZIONI
  // Generate services example.service.ts
  await generatorIndex(projectPath);

  // Generate services example.service.ts
  await generatorRoute(projectPath);

  // Generate services example.service.ts
  await generatorModel(projectPath);

  // Generate services example.service.ts
  await generatorTypes(projectPath);

  // Generate services example.service.ts
  await generatorService(projectPath);
};
