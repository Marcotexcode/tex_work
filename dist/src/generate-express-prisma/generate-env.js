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
exports.generateEnv = void 0;
const fs = require("fs/promises");
const path = require("path");
const generateEnv = (projectPath, dbUrl) => __awaiter(void 0, void 0, void 0, function* () {
    const serverCode = `
        DATABASE_URL=${dbUrl}
    `;
    yield fs.writeFile(path.join(projectPath, "/.env"), serverCode);
});
exports.generateEnv = generateEnv;
