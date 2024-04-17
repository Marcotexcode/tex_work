import { generateIndex } from "./generate-index";
import { generateExampleRoute, generateRoute } from "./generate-route";
import { generateExampleService } from "./generate-service";
import { generatePackageJSON } from "./generate-package-json";
import { generateTsConfig } from "./generate-ts-config";
import { generateDirectoryStructure } from "./generate-directory-structure";


export const generateExpressPrisma = async (projectPath: string, projectName: string) => {
  
  // Generate package.json
  await generatePackageJSON(projectPath, projectName)

  // Generate tsconfig.json
  await generateTsConfig(projectPath)
  
  // Generate directory structure. 
  await generateDirectoryStructure(projectPath)

  // Generate index.js
  await generateIndex(projectPath)

  // Generate example route
  await generateExampleRoute(projectPath)

  // Generate route.ts
  await generateRoute(projectPath)

  // Generate services example.service.ts
  await generateExampleService(projectPath)
}