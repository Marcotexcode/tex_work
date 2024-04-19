import { generateIndex } from "./generate-index";
import { generateExampleRoute, generateRoute } from "./generate-route";
import { generateExampleService } from "./generate-service";
import { generatePackageJSON } from "./generate-package-json";
import { generateTsConfig } from "./generate-ts-config";
import { generateDirectoryStructure } from "./generate-directory-structure";
import { generateEnv } from "./generate-env";
import { generateSchemaPrisma } from "./generate-schema-prisma";
import { generateTypes } from "./generate-type";

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
};
