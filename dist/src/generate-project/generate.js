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
exports.initProject = void 0;
const fs = require("fs/promises");
const path = require("path");
const child_process_1 = require("child_process");
const generatePackageJSON = (projectPath, projectName) => __awaiter(void 0, void 0, void 0, function* () {
    yield fs.writeFile(path.join(projectPath, 'package.json'), JSON.stringify({
        "name": projectName,
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "scripts": {
            "start": "npx ts-node ./src/index.ts"
        },
        "keywords": [],
        "author": "",
        "license": "ISC"
    }, null, 2), 'utf-8');
    (0, child_process_1.exec)("npm install typescript ts-node express  prisma @prisma/client mongodb dotenv && npm i --save-dev @types/node @types/express", { cwd: projectPath });
});
const generateTsConfig = (projectPath) => __awaiter(void 0, void 0, void 0, function* () {
    yield fs.writeFile(path.join(projectPath, 'tsconfig.json'), JSON.stringify({
        "compilerOptions": {
            "target": "ES6",
            "module": "commonjs",
            "outDir": "./dist",
            "strict": true,
            "esModuleInterop": true
        },
    }, null, 2), 'utf-8');
});
const generateDirectoryStructure = (projectPath) => __awaiter(void 0, void 0, void 0, function* () {
    const srcDir = path.join(projectPath, "src");
    yield fs.mkdir(srcDir);
    const modelsDir = path.join(srcDir, "models");
    yield fs.mkdir(modelsDir);
    const routesDir = path.join(srcDir, "routes");
    yield fs.mkdir(routesDir);
    const servicesDir = path.join(srcDir, "services");
    yield fs.mkdir(servicesDir);
    const middlewaresDir = path.join(srcDir, "middlewares");
    yield fs.mkdir(middlewaresDir);
    const validatorDir = path.join(srcDir, "validator");
    yield fs.mkdir(validatorDir);
});
const initProject = (projectPath, projectName) => __awaiter(void 0, void 0, void 0, function* () {
    // Generate package.json
    yield generatePackageJSON(projectPath, projectName);
    // Generate tsconfig.json
    yield generateTsConfig(projectPath);
    // Generate directory structure. 
    yield generateDirectoryStructure(projectPath);
});
exports.initProject = initProject;