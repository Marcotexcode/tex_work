import * as fs from 'fs/promises';
import * as path from 'path';

export const generateTypes = async (projectPath: string) => {
  const serverCode = `
export interface Example {
  id: string,
  firstName: string;
  lastName: string;
}

export interface ExampleCreateInput {
  firstName: string;
  lastName: string;
}

export interface ExampleUpdateInput {
  firstName?: string;
  lastName?: string;
}
    `;

  await fs.writeFile(path.join(projectPath, '/src/services/types.ts'), serverCode);
};
