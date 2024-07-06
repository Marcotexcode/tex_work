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
exports.generateExpressPrisma = void 0;
const generate_index_1 = require("./generators/generate-index");
const generate_route_1 = require("./generators/generate-route");
const generate_service_1 = require("./generators/generate-service");
const generate_package_json_1 = require("./generators/generate-package-json");
const generate_ts_config_1 = require("./generators/generate-ts-config");
const generate_directory_structure_1 = require("./generators/generate-directory-structure");
const generate_env_1 = require("./generators/generate-env");
const generate_schema_prisma_1 = require("./generators/generate-schema-prisma");
const generate_type_1 = require("./generators/generate-type");
const generator_index_1 = require("./generate-command-line/generator-index");
const create_route_1 = require("./generate-command-line/create-route");
const create_service_1 = require("./generate-command-line/create-service");
const create_model_1 = require("./generate-command-line/create-model");
const create_types_1 = require("./generate-command-line/create-types");
const generate_pritter_1 = require("./generators/generate-pritter");
const insert_in_routers_1 = require("./generate-command-line/insert-in-routers");
// Esporta la funzione generateExpressPrisma come una funzione asincrona che accetta tre parametri: projectPath, projectName e urlDb
const generateExpressPrisma = (projectPath, projectName, urlDb) => __awaiter(void 0, void 0, void 0, function* () {
    // Genera il file package.json
    yield (0, generate_package_json_1.generatePackageJSON)(projectPath, projectName);
    // Genera il file .env
    yield (0, generate_env_1.generateEnv)(projectPath, urlDb);
    // Genera il file tsconfig.json
    yield (0, generate_ts_config_1.generateTsConfig)(projectPath);
    // Genera il file .prettierrc
    yield (0, generate_pritter_1.generatePritter)(projectPath);
    // Genera la struttura delle directory
    yield (0, generate_directory_structure_1.generateDirectoryStructure)(projectPath);
    // Genera il file prisma.schema
    yield (0, generate_schema_prisma_1.generateSchemaPrisma)(projectPath);
    // Genera il file index.js
    yield (0, generate_index_1.generateIndex)(projectPath);
    // Genera la rotta di esempio
    yield (0, generate_route_1.generateExampleRoute)(projectPath);
    // Genera il file route.ts
    yield (0, generate_route_1.generateRoute)(projectPath);
    // Genera il file types.ts
    yield (0, generate_type_1.generateTypes)(projectPath);
    // Genera il servizio di esempio example.service.ts
    yield (0, generate_service_1.generateExampleService)(projectPath);
    // Genera il file index.ts
    yield (0, generator_index_1.generatorIndex)(projectPath);
    // Genera il file route.ts
    yield (0, create_route_1.generatorRoute)(projectPath);
    // Genera il file route.ts
    yield (0, insert_in_routers_1.insertInRouters)(projectPath);
    // Genera il file model.ts
    yield (0, create_model_1.generatorModel)(projectPath);
    // Genera il file types.ts
    yield (0, create_types_1.generatorTypes)(projectPath);
    // Genera il file service.ts
    yield (0, create_service_1.generatorService)(projectPath);
});
exports.generateExpressPrisma = generateExpressPrisma;
