// Importa il modulo fs/promises come fs
import * as fs from 'fs/promises';
// Importa il modulo path
import * as path from 'path';

// Funzione asincrona generateEnv che accetta projectPath e dbUrl come parametri
export const generateEnv = async (projectPath: string, dbUrl: string) => {
  // Definisce una stringa serverCode con la variabile DATABASE_URL impostata su dbUrl
  const serverCode = `
        DATABASE_URL=${dbUrl} 
    `; // Imposta la variabile DATABASE_URL

  // Scrive il contenuto di serverCode in un file .env nella directory projectPath
  await fs.writeFile(path.join(projectPath, '/.env'), serverCode);
};
