import * as fs from "fs/promises";
import * as path from "path";

export const generateEnv = async (projectPath: string, dbUrl: string) => {
  const serverCode = `
        DATABASE_URL=${dbUrl}
    `;

  await fs.writeFile(path.join(projectPath, "/.env"), serverCode);
};
