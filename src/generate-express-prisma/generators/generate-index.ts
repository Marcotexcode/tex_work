// Importa il modulo fs/promises come fs
import * as fs from 'fs/promises';
// Importa il modulo path
import * as path from 'path';

// Esporta la funzione generateIndex come funzione asincrona che accetta un parametro projectPath di tipo stringa
export const generateIndex = async (projectPath: string) => {
  // Definisce una costante serverCode che contiene il codice sorgente per il server Express
  const serverCode = `
    import express, { Application } from 'express';
    import routes from './routes'; 
    import dotenv from 'dotenv';
  
    dotenv.config({ path: './.env' });
  
    const app: Application = express();
  
    app.use(express.json());
  
    const port = 3000;
    
    app.use('/', routes);
    
    app.listen(port, () => {
      console.log(\`Server in ascolto sulla porta localhost:\${port}\`);
    });`;

  // Scrive il codice sorgente serverCode nel file index.ts nella directory specificata da projectPath
  await fs.writeFile(path.join(projectPath, '/src/index.ts'), serverCode);
};
