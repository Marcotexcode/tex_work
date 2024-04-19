import * as fs from "fs/promises";
import * as path from "path";

export const generatorRoute = async (projectPath: string) => {
  const serverCode = `
        import { prompt } from "enquirer";
        import * as fs from "fs/promises";
        import * as path from "path";
        import { commandCreateService } from "./create-service"; 

        export const commandCreateRoute = async () => {
          const { routeName } = (await prompt({
            type: "input",
            name: "routeName",
            message: "Come vuoi chiamare la tua rotta?",
            initial: "new-node-project",
          })) as any;

          const routeNameLower = routeName.toLowerCase();

          const routeNameUpper =
            routeNameLower.charAt(0).toUpperCase() + routeNameLower.slice(1);

          const serverCode = \`
            import { Router, Request, Response, NextFunction } from 'express';
            import { \${routeNameLower}Service } from '../services/\${routeNameLower}.service';
    
            import { PrismaClient } from '@prisma/client';
            import { \${routeNameUpper}CreateInput, \${routeNameUpper}UpdateInput } from './\${routeNameLower}.types';
    
            const \${routeNameLower}Route = (router: Router, db: PrismaClient) => {
    
                router.get('/\${routeNameLower}', async (req: Request, res: Response) => {
                    const result = await \${routeNameLower}Service.\${routeNameLower}({
                        db,
                        id: req.body.id
                    });
    
                    res.send(result);
                });
    
                router.get('/\${routeNameLower}s', async (req: Request, res: Response) => {
                    const result = await \${routeNameLower}Service.\${routeNameLower}s({db});
                    res.send(result);
                });
    
                router.post('/\${routeNameLower}-create', async (req: Request, res: Response) => {
    
                    const result = await \${routeNameLower}Service.create\${routeNameUpper}({
                        db,
                        data: req.body as \${routeNameUpper}CreateInput
                    });
                    res.send(result);
                });
    
                router.post('/\${routeNameLower}-update', async (req: Request, res: Response) => {
                    const { id, ...data } = req.body;
    
                    const result = await \${routeNameLower}Service.update\${routeNameUpper}({
                        db,
                        id: req.body.id,
                        data: data as \${routeNameUpper}UpdateInput
                    });
    
                    res.send(result);
                    
                                    });
    
                router.post('/\${routeNameLower}-delete', async (req: Request, res: Response) => {
                    const result = await \${routeNameLower}Service.delete\${routeNameUpper}({
                        db,
                        id: req.body.id as string
                    });
                    res.send(result);
                });
            }
    
            export default \${routeNameLower}Route;
          \`;
    
          await commandCreateService(routeNameLower);

          await fs.writeFile(
            path.join(__dirname, \`../routes/\${routeNameLower}.route.ts\`),
            serverCode
          );
        };
      `;

  await fs.writeFile(
    path.join(projectPath, "src/generator/create-route.ts"),
    serverCode
  );
};

// import { prompt } from "enquirer";
// import * as fs from "fs/promises";
// import * as path from "path";
// import { commandCreateService } from "./create-service";

// export const commandCreateRoute = async () => {
//   const { routeName } = (await prompt({
//     type: "input",
//     name: "routeName",
//     message: "Come vuoi chiamare la tua rotta?",
//     initial: "new-node-project",
//   })) as any;

//   const routeNameLower = routeName.toLowerCase();

//   const routeNameUpper =
//     routeNameLower.charAt(0).toUpperCase() + routeNameLower.slice(1);

//   const serverCode = `
//         import { Router, Request, Response, NextFunction } from 'express';
//         import { ${routeNameLower}Service } from './${routeNameLower}.service';

//         import { PrismaClient } from '@prisma/client';
//         import { ${routeNameUpper}CreateInput, ${routeNameUpper}UpdateInput } from './${routeNameLower}.types';

//         const ${routeNameLower}Route = (router: Router, db: PrismaClient) => {

//             router.get('/${routeNameLower}', async (req: Request, res: Response) => {
//                 const result = await ${routeNameLower}Service.${routeNameLower}({
//                     db,
//                     id: req.body.id
//                 });

//                 res.send(result);
//             });

//             router.get('/${routeNameLower}s', async (req: Request, res: Response) => {
//                 const result = await ${routeNameLower}Service.${routeNameLower}s({db});
//                 res.send(result);
//             });

//             router.post('/${routeNameLower}-create', async (req: Request, res: Response) => {

//                 const result = await ${routeNameLower}Service.create${routeNameUpper}({
//                     db,
//                     data: req.body as ${routeNameUpper}CreateInput
//                 });
//                 res.send(result);
//             });

//             router.post('/${routeNameLower}-update', async (req: Request, res: Response) => {
//                 const { id, ...data } = req.body;

//                 const result = await ${routeNameLower}Service.update${routeNameUpper}({
//                     db,
//                     id: req.body.id,
//                     data: data as ${routeNameUpper}UpdateInput
//                 });

//                 res.send(result);
//             });

//             router.post('/${routeNameLower}-delete', async (req: Request, res: Response) => {
//                 const result = await ${routeNameLower}Service.delete${routeNameUpper}({
//                     db,
//                     id: req.body.id as string
//                 });
//                 res.send(result);
//             });
//         }

//         export default ${routeNameLower}Route;
//     `;

//   await fs.writeFile(
//     path.join(__dirname, `/${routeNameLower}-route.ts`),
//     serverCode
//   );

//   await commandCreateTypes(routeName);
//   await commandCreateService(routeName);
// };

// export const commandCreateTypes = async (routeName: string) => {
//   const routeNameLower = routeName.toLowerCase();

//   const routeNameUpper =
//     routeNameLower.charAt(0).toUpperCase() + routeNameLower.slice(1);

//   const serverCode = `
//     export interface ${routeNameUpper} {
//       id: string,
//       firstName: string;
//       lastName: string;
//     }

//     export interface ${routeNameUpper}CreateInput {
//       firstName: string;
//       lastName: string;
//     }

//     export interface ${routeNameUpper}UpdateInput {
//       firstName?: string;
//       lastName?: string;
//     }
//     `;

//   await fs.writeFile(
//     path.join(__dirname, `${routeNameLower}.types.ts`),
//     serverCode
//   );
// };
