import * as fs from "fs/promises"; 
import * as path from "path";


export const generateIndex = async (projectPath: string) => {
    const serverCode = `
    import express, { Application } from 'express';
    import routes from './routes'; 
    
    const app: Application = express();
    
    const port = 3000;
    
    // Usa le rotte definite nel file routes.ts
    app.use('/', routes);
    
    // Avvia il server Express
    app.listen(port, () => {
      console.log(\`Server in ascolto sulla porta localhost:\${port}\`);
    });`;
  
    await fs.writeFile(path.join(projectPath, '/src/index.ts'), serverCode);
  }