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
exports.generateRoute = exports.generateExampleRoute = void 0;
const fs = require("fs/promises");
const path = require("path");
const generateExampleRoute = (projectPath) => __awaiter(void 0, void 0, void 0, function* () {
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
    yield fs.writeFile(path.join(projectPath, '/src/routes/example.route.ts'), serverCode);
});
exports.generateExampleRoute = generateExampleRoute;
const generateRoute = (projectPath) => __awaiter(void 0, void 0, void 0, function* () {
    const serverCode = `
       
        import { Router } from 'express';
        import exampleRoute from './routes/example.route';
        import { PrismaClient } from '@prisma/client';

        const router = Router();
        const db = new PrismaClient();

        exampleRoute(router, db)

        export default router;
    
    `;
    yield fs.writeFile(path.join(projectPath, '/src/routes.ts'), serverCode);
});
exports.generateRoute = generateRoute;
