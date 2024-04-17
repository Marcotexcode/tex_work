"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateIndex = void 0;
const fs = require("fs/promises");
const path = require("path");
const generateIndex = (projectPath) => __awaiter(void 0, void 0, void 0, function* () {
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
    yield fs.writeFile(path.join(projectPath, '/src/index.ts'), serverCode);
});
exports.generateIndex = generateIndex;
