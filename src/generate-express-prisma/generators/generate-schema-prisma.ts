import * as fs from 'fs/promises';
import * as path from 'path';
import { exec } from 'child_process';

export const generateSchemaPrisma = async (projectPath: string) => {
  const serverCode = `
        // prisma/schema.prisma

        generator client {
            provider = "prisma-client-js"
        }
        
        datasource db {
            provider = "mongodb"
            url      = env("DATABASE_URL")
        }
        
        model Example {
            id       String  @id @default(auto()) @map("_id") @db.ObjectId
            firstName String
            lastName  String
        }
    `;

  await exec('npx prisma generate', { cwd: projectPath });

  await fs.writeFile(path.join(projectPath, '/prisma/schema.prisma'), serverCode);
};
