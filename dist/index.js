#!/usr/bin/env node
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
const enquirer_1 = require("enquirer");
const fs = require("fs/promises");
const path = require("path");
const generate_1 = require("./src/generate-express-prisma/generate");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const { projectName } = (yield (0, enquirer_1.prompt)({
        type: 'input',
        name: 'projectName',
        message: 'Come vuoi chiamare il tuo progetto?',
        initial: 'new-node-project',
    }));
    const { urlDb } = (yield (0, enquirer_1.prompt)({
        type: 'input',
        name: 'urlDb',
        message: 'Inserisci la stringa per la connessione a mongoDb',
        initial: 'new-node-project',
    }));
    const projectPath = path.resolve(projectName);
    yield fs.mkdir(projectPath, { recursive: true });
    yield (0, generate_1.generateExpressPrisma)(projectPath, projectName, urlDb);
}))();
