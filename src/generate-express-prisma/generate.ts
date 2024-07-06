import { generateIndex } from './generators/generate-index';
import { generateExampleRoute, generateRoute } from './generators/generate-route';
import { generateExampleService } from './generators/generate-service';
import { generatePackageJSON } from './generators/generate-package-json';
import { generateTsConfig } from './generators/generate-ts-config';
import { generateDirectoryStructure } from './generators/generate-directory-structure';
import { generateEnv } from './generators/generate-env';
import { generateSchemaPrisma } from './generators/generate-schema-prisma';
import { generateTypes } from './generators/generate-type';
import { generatorIndex } from './generate-command-line/generator-index';
import { generatorRoute } from './generate-command-line/create-route';
import { generatorService } from './generate-command-line/create-service';
import { generatorModel } from './generate-command-line/create-model';
import { generatorTypes } from './generate-command-line/create-types';
import { generatePritter } from './generators/generate-pritter';
import { insertInRouters } from './generate-command-line/insert-in-routers';

// Esporta la funzione generateExpressPrisma come una funzione asincrona che accetta tre parametri: projectPath, projectName e urlDb
export const generateExpressPrisma = async (projectPath: string, projectName: string, urlDb: string) => {
  // Genera il file package.json
  await generatePackageJSON(projectPath, projectName);

  // Genera il file .env
  await generateEnv(projectPath, urlDb);

  // Genera il file tsconfig.json
  await generateTsConfig(projectPath);

  // Genera il file .prettierrc
  await generatePritter(projectPath);

  // Genera la struttura delle directory
  await generateDirectoryStructure(projectPath);

  // Genera il file prisma.schema
  await generateSchemaPrisma(projectPath);

  // Genera il file index.js
  await generateIndex(projectPath);

  // Genera la rotta di esempio
  await generateExampleRoute(projectPath);

  // Genera il file route.ts
  await generateRoute(projectPath);

  // Genera il file types.ts
  await generateTypes(projectPath);

  // Genera il servizio di esempio example.service.ts
  await generateExampleService(projectPath);

  // Genera il file index.ts
  await generatorIndex(projectPath);

  // Genera il file route.ts
  await generatorRoute(projectPath);

  // Genera il file route.ts
  await insertInRouters(projectPath);

  // Genera il file model.ts
  await generatorModel(projectPath);

  // Genera il file types.ts
  await generatorTypes(projectPath);

  // Genera il file service.ts
  await generatorService(projectPath);
};
