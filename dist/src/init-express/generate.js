"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateExpress = void 0;
const fs = require("fs/promises"); // Use fs/promises for asynchronous file operations
const path = require("path");
// const generatePackageJSON = async (projectPath: string) => {
//  console.log('ENTRAAAAA');
//     exec("npm i express", { cwd: projectPath }) 
// }
const generateRoute = (projectPath) => __awaiter(void 0, void 0, void 0, function* () {
    const serverCode = `
    import { Router, Request, Response } from 'express';

    const router = Router();
    
    // Definizione di tutte le tue rotte
    router.get('/', (req: Request, res: Response) => {
      res.send('<h1>Ciao mondo!</h1>');
    });
    
    router.get('/about', (req: Request, res: Response) => {
      res.send('<h1>About Us</h1>');
    });
    
    // Altre rotte...
    
    export default router;
    `;
    yield fs.writeFile(path.join(projectPath, '/src/routes/routes.ts'), serverCode);
});
const generateIndex = (projectPath) => __awaiter(void 0, void 0, void 0, function* () {
    const serverCode = `
  import express, { Application } from 'express';
  import routes from './routes/routes'; 
  
  const app: Application = express();
  const port = 3000;
  
  // Usa le rotte definite nel file routes.ts
  app.use('/', routes);
  
  // Avvia il server Express
  app.listen(port, () => {
    console.log(\`Server in ascolto sulla porta \${port}\`);
  });`;
    yield fs.writeFile(path.join(projectPath, '/src/index.ts'), serverCode); // Use writeFile for async writing
});
const generateExpress = (projectPath, projectName) => __awaiter(void 0, void 0, void 0, function* () {
    yield generateRoute(projectPath);
    // Generate index.js
    yield generateIndex(projectPath);
});
exports.generateExpress = generateExpress;
