import * as fs from "fs/promises"; 
import * as path from "path";


export const generateExampleRoute = async (projectPath: string) => {
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
    
    await fs.writeFile(path.join(projectPath, '/src/routes/example.route.ts'), serverCode); 
}

export const generateRoute = async (projectPath: string) => {
    const serverCode = `
        import { Router } from 'express';
        import exampleRoute from './routes/example.route';
        
        const router = Router();
        
        exampleRoute(router)
        
        export default router;
    `;

    await fs.writeFile(path.join(projectPath, '/src/routes.ts'), serverCode); 
}