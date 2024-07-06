#!/usr/bin/env node

import { prompt } from 'enquirer';
import * as fs from 'fs/promises';
import * as path from 'path';

import { generateExpressPrisma } from './src/generate-express-prisma/generate';

(async () => {
  const { projectName } = (await prompt({
    type: 'input',
    name: 'projectName',
    message: 'Come vuoi chiamare il tuo progetto?',
    initial: 'new-node-project',
  })) as any;

  const { urlDb } = (await prompt({
    type: 'input',
    name: 'urlDb',
    message: 'Inserisci la stringa per la connessione a mongoDb',
    initial: 'new-node-project',
  })) as any;

  const projectPath = path.resolve(projectName);

  await fs.mkdir(projectPath, { recursive: true });

  await generateExpressPrisma(projectPath, projectName, urlDb);
})();
