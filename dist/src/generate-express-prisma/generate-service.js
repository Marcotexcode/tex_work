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
exports.generateExampleService = void 0;
const fs = require("fs/promises");
const path = require("path");
const generateExampleService = (projectPath) => __awaiter(void 0, void 0, void 0, function* () {
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
    yield fs.writeFile(path.join(projectPath, '/src/services/example.service.ts'), serverCode);
});
exports.generateExampleService = generateExampleService;
