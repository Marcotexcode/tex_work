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
exports.generateSchemaPrisma = void 0;
const fs = require("fs/promises");
const path = require("path");
const child_process_1 = require("child_process");
const generateSchemaPrisma = (projectPath) => __awaiter(void 0, void 0, void 0, function* () {
    const serverCode = `
        // prisma/schema.prisma

        generator client {
            provider = "prisma-client-js"
        }
        
        datasource db {
            provider = "mongodb"
            url      = env("DATABASE_URL")
        }
        
        model Example {
            id       String  @id @default(auto()) @map("_id") @db.ObjectId
            firstName String
            lastName  String
        }
    `;
    yield (0, child_process_1.exec)("npx prisma generate", { cwd: projectPath });
    yield fs.writeFile(path.join(projectPath, '/prisma/schema.prisma'), serverCode);
});
exports.generateSchemaPrisma = generateSchemaPrisma;
