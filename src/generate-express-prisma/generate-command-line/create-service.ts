import * as fs from "fs/promises";
import * as path from "path";

export const generatorService = async (projectPath: string) => {
  const serverCode = `
        import * as fs from "fs/promises";
        import * as path from "path";

        export const commandCreateService = async (routeName: string) => {
        const routeNameLower = routeName.toLowerCase();

        const routeNameUpper =
            routeNameLower.charAt(0).toUpperCase() + routeNameLower.slice(1);

        const serverCode = \`
                import { \${routeNameUpper}, PrismaClient } from '@prisma/client';
                import { \${routeNameUpper}CreateInput, \${routeNameUpper}UpdateInput } from './\${routeNameLower}-types';

                export const \${routeNameLower}Service = {
                    async \${routeNameLower}(props: {db: PrismaClient, id:string}): Promise<\${routeNameUpper}> {
                    const {db, id} = props

                    return await db.\${routeNameLower}.findFirstOrThrow({
                        where:{
                            id
                        }
                    })
                    },

                    async \${routeNameLower}s(props: {db: PrismaClient}): Promise<\${routeNameUpper}[]> {
                        const {db} = props

                        return await db.\${routeNameLower}.findMany({})
                    },

                    async create\${routeNameUpper}(props: {
                        db: PrismaClient
                        data: \${routeNameUpper}CreateInput
                    }): Promise<\${routeNameUpper}> {

                        const {db, data} = props;
                        const {firstName, lastName} = data

                        return await db.\${routeNameLower}.create({
                            data: {
                                firstName,
                                lastName
                            }
                        });
                    },

                    async update\${routeNameUpper}(props: {
                        db: PrismaClient
                        id: string
                        data: \${routeNameUpper}UpdateInput
                    }): Promise<\${routeNameUpper}> {

                        const {db, data, id} = props;

                        return await db.\${routeNameLower}.update({
                            where: {
                                id
                            },
                            data
                        });
                    },

                    async delete\${routeNameUpper}(props: {
                        db: PrismaClient
                        id: string
                    }): Promise<\${routeNameUpper}> {
                        const {db,  id} = props;

                        return await db.\${routeNameLower}.delete({
                            where: {
                                id
                            },
                        });

                    }
                };
            \`;

        await fs.writeFile(
            path.join(__dirname, \`../services/\${routeNameLower}.service.ts\`),
            serverCode
        );
        };
      `;

  await fs.writeFile(
    path.join(projectPath, "src/generator/create-service.ts"),
    serverCode
  );
};

// import * as fs from "fs/promises";
// import * as path from "path";

// export const commandCreateService = async (routeName: string) => {
//   const routeNameLower = routeName.toLowerCase();

//   const routeNameUpper =
//     routeNameLower.charAt(0).toUpperCase() + routeNameLower.slice(1);

//   const serverCode = `
//          import { ${routeNameUpper}, PrismaClient } from '@prisma/client';
//         import { ${routeNameUpper}CreateInput, ${routeNameUpper}UpdateInput } from './${routeNameLower}-types';

//         export const ${routeNameLower}Service = {
//             async ${routeNameLower}(props: {db: PrismaClient, id:string}): Promise<${routeNameUpper}> {
//             const {db, id} = props

//             return await db.${routeNameLower}.findFirstOrThrow({
//                 where:{
//                     id
//                 }
//             })
//             },

//             async ${routeNameLower}s(props: {db: PrismaClient}): Promise<${routeNameUpper}[]> {
//                 const {db} = props

//                 return await db.${routeNameLower}.findMany({})
//             },

//             async create${routeNameUpper}(props: {
//                 db: PrismaClient
//                 data: ${routeNameUpper}CreateInput
//             }): Promise<${routeNameUpper}> {

//                 const {db, data} = props;
//                 const {firstName, lastName} = data

//                 return await db.${routeNameLower}.create({
//                     data: {
//                         firstName,
//                         lastName
//                     }
//                 });
//             },

//             async update${routeNameUpper}(props: {
//                 db: PrismaClient
//                 id: string
//                 data: ${routeNameUpper}UpdateInput
//             }): Promise<${routeNameUpper}> {

//                 const {db, data, id} = props;

//                 return await db.${routeNameLower}.update({
//                     where: {
//                         id
//                     },
//                     data
//                 });
//             },

//             async delete${routeNameUpper}(props: {
//                 db: PrismaClient
//                 id: string
//             }): Promise<${routeNameUpper}> {
//                 const {db,  id} = props;

//                 return await db.${routeNameLower}.delete({
//                     where: {
//                         id
//                     },
//                 });

//             }
//         };
//     `;

//   await fs.writeFile(
//     path.join(__dirname, `/${routeNameLower}.service.ts`),
//     serverCode
//   );
// };
