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
exports.generateProjectJavascript = void 0;
const fs = require("fs/promises"); // Use fs/promises for asynchronous file operations
const path = require("path");
const generatePackageJSON = (projectPath, projectName) => __awaiter(void 0, void 0, void 0, function* () {
    yield fs.writeFile(path.join(projectPath, 'package.json'), JSON.stringify({
        "name": projectName,
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "scripts": {
            "start": "node ./src/index.js"
        },
        "keywords": [],
        "author": "",
        "license": "ISC"
    }, null, 2), 'utf-8');
});
const generateDirectoryStructure = (projectPath) => __awaiter(void 0, void 0, void 0, function* () {
    const srcDir = path.join(projectPath, "src");
    yield fs.mkdir(srcDir);
    const modelDir = path.join(srcDir, "model");
    yield fs.mkdir(modelDir);
    const routesDir = path.join(srcDir, "routes");
    yield fs.mkdir(routesDir);
    const controllerDir = path.join(srcDir, "controller");
    yield fs.mkdir(controllerDir);
});
const generateIndexJS = (projectPath) => __awaiter(void 0, void 0, void 0, function* () {
    const serverCode = `
  const http = require('http');
  const port = 3000;

  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Ciao mondo!</h1>');
    res.end();
  });

  server.listen(port, () => {
    console.log(\`Server in ascolto sulla porta \`);
  });`;
    yield fs.writeFile(path.join(projectPath, '/src/index.js'), serverCode); // Use writeFile for async writing
});
const generateProjectJavascript = (projectPath, projectName) => __awaiter(void 0, void 0, void 0, function* () {
    // Generate package.json
    yield generatePackageJSON(projectPath, projectName);
    // Generate directory structure. 
    yield generateDirectoryStructure(projectPath);
    // Generate index.js
    yield generateIndexJS(projectPath);
});
exports.generateProjectJavascript = generateProjectJavascript;
