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
// TODO SPOSTARE QUESTE FUNZIONI IN GENERATE PRISMA E AGGIUNGERE LE CODE PER GENERARE PRISMA
const generateExampleRoute = (projectPath) => __awaiter(void 0, void 0, void 0, function* () {
    const serverCode = `
    import { Router, Request, Response } from 'express';
    import { exampleService } from '../services/example.service';

    const exampleRoute = (router: Router) => {

        router.get('/example', async (req: Request, res: Response) => {
            const result = await exampleService.example({});
            res.send(result);
        });

        router.get('/examples', async (req: Request, res: Response) => {
            const result = await exampleService.examples({});
            res.send(result);
        });
        // TODO Cambiarlo con post 

        router.get('/example-create', async (req: Request, res: Response) => {
            const result = await exampleService.createExample({});
            res.send(result);
        });

        // TODO Cambiarlo con post 

        router.get('/example-update', async (req: Request, res: Response) => {
            const result = await exampleService.updateExample({});
            res.send(result);
        });
        // TODO Cambiarlo con post 

        router.get('/example-delete', async (req: Request, res: Response) => {
            const result = await exampleService.deleteExample({});
            res.send(result);
        });
    }

    export default exampleRoute;
  `;
    yield fs.writeFile(path.join(projectPath, '/src/routes/example.route.ts'), serverCode);
});
const generateRoute = (projectPath) => __awaiter(void 0, void 0, void 0, function* () {
    const serverCode = `
    import { Router } from 'express';
    import exampleRoute from './routes/example.route';
    
    const router = Router();
    
    exampleRoute(router)
    
    export default router;
  `;
    yield fs.writeFile(path.join(projectPath, '/src/routes.ts'), serverCode);
});
const generateExampleService = (projectPath) => __awaiter(void 0, void 0, void 0, function* () {
    const serverCode = `
    export const exampleService = {
      async example(props: {}): Promise<string> {
          // Logica per la creazione di un esempio
          return '<h1>Example!</h1>';
      },

      async examples(props: {}): Promise<string> {
          // Logica per la creazione di un esempio
          return '<h1>Examples!</h1>';
      },

      async createExample(props: {}): Promise<string> {
          // Logica per la creazione di un esempio
          return '<h1>Example created!</h1>';
      },

      async updateExample(props: {}): Promise<string> {
          // Logica per l'aggiornamento di un esempio
          return '<h1>Example updated!</h1>';
      },

      async deleteExample(props: {}): Promise<string> {
          // Logica per l'eliminazione di un esempio
          return '<h1>Example deleted!</h1>';
      }
    };
  `;
    yield fs.writeFile(path.join(projectPath, '/src/services/example.service.ts'), serverCode);
});
const generateIndex = (projectPath) => __awaiter(void 0, void 0, void 0, function* () {
    const serverCode = `
  import express, { Application } from 'express';
  import routes from './routes'; 
  
  const app: Application = express();
  const port = 3000;
  
  // Usa le rotte definite nel file routes.ts
  app.use('/', routes);
  
  // Avvia il server Express
  app.listen(port, () => {
    console.log(\`Server in ascolto sulla porta localhost:\${port}\`);
  });`;
    yield fs.writeFile(path.join(projectPath, '/src/index.ts'), serverCode);
});
const generateExpress = (projectPath) => __awaiter(void 0, void 0, void 0, function* () {
    // Generate index.js
    yield generateIndex(projectPath);
    // Generate index.js
    yield generateExampleRoute(projectPath);
    // Generate route.ts
    yield generateRoute(projectPath);
    // Generate services example.service.ts
    yield generateExampleService(projectPath);
});
exports.generateExpress = generateExpress;
