import * as fs from 'fs/promises';
import * as path from 'path';

export const generateTsConfig = async (projectPath: string) => {
  await fs.writeFile(
    path.join(projectPath, 'tsconfig.json'),
    JSON.stringify(
      {
        compilerOptions: {
          target: 'ES6',
          module: 'commonjs',
          outDir: './dist',
          strict: true,
          esModuleInterop: true,
        },
      },
      null,
      2,
    ),
    'utf-8',
  );
};
