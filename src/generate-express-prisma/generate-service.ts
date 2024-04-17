import * as fs from "fs/promises"; 
import * as path from "path";

export const generateExampleService = async (projectPath: string) => {
    const serverCode = `
      export const exampleService = {
        async example(props: {}): Promise<string> {
            // Logica per la creazione di un esempio
            return '<h1>Example!</h1>';
        },
  
        async examples(props: {}): Promise<string> {
            // Logica per la creazione di un esempio
            return '<h1>Examples!</h1>';
        },
  
        async createExample(props: {}): Promise<string> {
            // Logica per la creazione di un esempio
            return '<h1>Example created!</h1>';
        },
  
        async updateExample(props: {}): Promise<string> {
            // Logica per l'aggiornamento di un esempio
            return '<h1>Example updated!</h1>';
        },
  
        async deleteExample(props: {}): Promise<string> {
            // Logica per l'eliminazione di un esempio
            return '<h1>Example deleted!</h1>';
        }
      };
    `;
  
    await fs.writeFile(path.join(projectPath, '/src/services/example.service.ts'), serverCode); 
  }