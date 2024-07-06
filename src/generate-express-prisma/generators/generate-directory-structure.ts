// Importa il modulo fs/promises come fs
import * as fs from 'fs/promises';
// Importa il modulo path
import * as path from 'path';

// Funzione asincrona che genera la struttura di directory per il progetto
export const generateDirectoryStructure = async (projectPath: string) => {
  const srcDir = path.join(projectPath, 'src');
  const prismaDir = path.join(projectPath, 'prisma');

  // Crea le directory principali
  await Promise.all([fs.mkdir(srcDir, { recursive: true }), fs.mkdir(prismaDir, { recursive: true })]);

  // Sottodirectory da creare all'interno di srcDir
  const subDirs = ['routes', 'services', 'generator'];

  // Crea le sottodirectory in parallelo
  await Promise.all(
    subDirs.map(async (dir) => {
      const dirPath = path.join(srcDir, dir);
      await fs.mkdir(dirPath, { recursive: true });
    }),
  );
};
