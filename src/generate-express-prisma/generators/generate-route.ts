import * as fs from 'fs/promises';
import * as path from 'path';

export const generateExampleRoute = async (projectPath: string) => {
  const serverCode = `
        import { Router, Request, Response, NextFunction } from 'express';
        import { exampleService } from '../services/example.service';
        import { PrismaClient } from '@prisma/client';
        import { ExampleCreateInput, ExampleUpdateInput } from '../services/types';


        const exampleRoute = (router: Router, db: PrismaClient) => {

            router.get('/example', async (req: Request, res: Response) => {
                const result = await exampleService.example({
                    db,
                    id: req.body.id
                });

                res.send(result);
            });

            router.get('/examples', async (req: Request, res: Response) => {
                const result = await exampleService.examples({db});
                res.send(result);
            });
        
            router.post('/example-create', async (req: Request, res: Response) => {

                const result = await exampleService.createExample({
                    db, 
                    data: req.body as ExampleCreateInput
                });
                res.send(result);
            });

            router.post('/example-update', async (req: Request, res: Response) => {
                const { id, ...data } = req.body;

                const result = await exampleService.updateExample({
                    db,
                    id: req.body.id,
                    data: data as ExampleUpdateInput
                });

                res.send(result);
            });


            router.post('/example-delete', async (req: Request, res: Response) => {
                const result = await exampleService.deleteExample({
                    db,
                    id: req.body.id as string
                });
                res.send(result);
            });
        }

        export default exampleRoute;

    `;

  await fs.writeFile(path.join(projectPath, '/src/routes/example.route.ts'), serverCode);
};

export const generateRoute = async (projectPath: string) => {
  const serverCode = `
       
        import { Router } from 'express';
        import exampleRoute from './routes/example.route';
        import { PrismaClient } from '@prisma/client';

        const router = Router();
        const db = new PrismaClient();

        exampleRoute(router, db)

        export default router;
    
    `;

  await fs.writeFile(path.join(projectPath, '/src/routes.ts'), serverCode);
};
