import * as fs from "fs/promises"; 
import * as path from "path";


export const generateEnv = async (projectPath: string, dbUrl: string) => {
    const serverCode = `
        DATABASE_URL="mongodb+srv://root:root@cluster0.shgypfe.mongodb.net/example?retryWrites=true&w=majority&appName=Cluster0"
    `;

    await fs.writeFile(path.join(projectPath, '/.env'), serverCode); 
}