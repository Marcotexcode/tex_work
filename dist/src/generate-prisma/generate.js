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
exports.generatePrisma = void 0;
const fs = require("fs/promises"); // Use fs/promises for asynchronous file operations
const path = require("path");
const updateIndexIndex = (projectPath) => __awaiter(void 0, void 0, void 0, function* () {
    const indexPath = path.join(projectPath, '/src/index.ts');
    const codeToAdd = `
    // New code added
    console.log("New code added!");
  `;
    yield fs.appendFile(indexPath, codeToAdd);
});
const generatePrisma = (projectPath) => __awaiter(void 0, void 0, void 0, function* () {
    // Generate index.js
    yield updateIndexIndex(projectPath);
});
exports.generatePrisma = generatePrisma;
