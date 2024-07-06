import * as fs from 'fs/promises';
import * as path from 'path';

export const generatePritter = async (projectPath: string) => {
  const serverCode = `
{
  "semi": true,
  "trailingComma": "all",
  "singleQuote": true,
  "printWidth": 120,
  "tabWidth": 2
}
    `;

  await fs.writeFile(path.join(projectPath, '/.prettierrc.json'), serverCode);
};
