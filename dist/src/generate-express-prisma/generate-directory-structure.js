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
exports.generateDirectoryStructure = void 0;
// Importa il modulo fs/promises come fs
const fs = require("fs/promises");
// Importa il modulo path
const path = require("path");
// Funzione asincrona che genera la struttura di directory per il progetto
const generateDirectoryStructure = (projectPath) => __awaiter(void 0, void 0, void 0, function* () {
    const srcDir = path.join(projectPath, "src");
    const prismaDir = path.join(projectPath, "prisma");
    // Crea le directory principali
    yield Promise.all([fs.mkdir(srcDir, { recursive: true }), fs.mkdir(prismaDir, { recursive: true })]);
    // Sottodirectory da creare all'interno di srcDir
    const subDirs = ["models", "routes", "services", "middlewares", "generator"];
    // Crea le sottodirectory in parallelo
    yield Promise.all(subDirs.map((dir) => __awaiter(void 0, void 0, void 0, function* () {
        const dirPath = path.join(srcDir, dir);
        yield fs.mkdir(dirPath, { recursive: true });
    })));
});
exports.generateDirectoryStructure = generateDirectoryStructure;
