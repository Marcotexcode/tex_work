import * as fs from "fs/promises"; 
import * as path from "path";

export const generateExampleService = async (projectPath: string) => {
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
  
    await fs.writeFile(path.join(projectPath, '/src/services/example.service.ts'), serverCode); 
  }