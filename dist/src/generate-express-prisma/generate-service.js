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
exports.generateExampleService = void 0;
const fs = require("fs/promises");
const path = require("path");
const generateExampleService = (projectPath) => __awaiter(void 0, void 0, void 0, function* () {
    const serverCode = `
        import { Example, PrismaClient } from '@prisma/client';
        import { ExampleCreateInput, ExampleUpdateInput } from './types';
        
        
        export const exampleService = {
            async example(props: {db: PrismaClient, id:string}): Promise<Example> {
            const {db, id} = props
        
            return await db.example.findFirstOrThrow({
                where:{
                    id
                }
            })
            },
        
            async examples(props: {db: PrismaClient}): Promise<Example[]> {
                const {db} = props
        
                return await db.example.findMany({})
            },
        
            async createExample(props: {
                db: PrismaClient
                data: ExampleCreateInput
            }): Promise<Example> {
                
                const {db, data} = props;
                const {firstName, lastName} = data
        
                return await db.example.create({
                    data: {
                        firstName,
                        lastName
                    }
                });
            },
        
            async updateExample(props: {
                db: PrismaClient
                id: string
                data: ExampleUpdateInput
            }): Promise<Example> {
        
                const {db, data, id} = props;
        
                return await db.example.update({
                    where: {
                        id
                    },
                    data
                });
            },
        
            async deleteExample(props: {
                db: PrismaClient
                id: string
            }): Promise<Example> {
                const {db,  id} = props;
                
                
                return await db.example.delete({
                    where: {
                        id
                    },
                });
        
            }
        };
    `;
    yield fs.writeFile(path.join(projectPath, '/src/services/example.service.ts'), serverCode);
});
exports.generateExampleService = generateExampleService;
