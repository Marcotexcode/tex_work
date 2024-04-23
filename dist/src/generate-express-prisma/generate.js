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
const generate_index_1 = require("./generate-index");
const generate_route_1 = require("./generate-route");
const generate_service_1 = require("./generate-service");
const generate_package_json_1 = require("./generate-package-json");
const generate_ts_config_1 = require("./generate-ts-config");
const generate_directory_structure_1 = require("./generate-directory-structure");
const generate_env_1 = require("./generate-env");
const generate_schema_prisma_1 = require("./generate-schema-prisma");
const generate_type_1 = require("./generate-type");
const generator_index_1 = require("./generate-command-line/generator-index");
const create_route_1 = require("./generate-command-line/create-route");
const create_service_1 = require("./generate-command-line/create-service");
const create_model_1 = require("./generate-command-line/create-model");
const create_types_1 = require("./generate-command-line/create-types");
const generateExpressPrisma = (projectPath, projectName, urlDb) => __awaiter(void 0, void 0, void 0, function* () {
    // Generate package.json
    yield (0, generate_package_json_1.generatePackageJSON)(projectPath, projectName);
    // Generate .env
    yield (0, generate_env_1.generateEnv)(projectPath, urlDb);
    // Generate tsconfig.json
    yield (0, generate_ts_config_1.generateTsConfig)(projectPath);
    // Generate directory structure.
    yield (0, generate_directory_structure_1.generateDirectoryStructure)(projectPath);
    // Generate prisma.schema
    yield (0, generate_schema_prisma_1.generateSchemaPrisma)(projectPath);
    // Generate index.js
    yield (0, generate_index_1.generateIndex)(projectPath);
    // Generate example route
    yield (0, generate_route_1.generateExampleRoute)(projectPath);
    // Generate route.ts
    yield (0, generate_route_1.generateRoute)(projectPath);
    // Generate route.ts
    yield (0, generate_type_1.generateTypes)(projectPath);
    // Generate services example.service.ts
    yield (0, generate_service_1.generateExampleService)(projectPath);
    // TODO CONTROLLARE QUESTE FUNZIONI
    // Generate services example.service.ts
    yield (0, generator_index_1.generatorIndex)(projectPath);
    // Generate services example.service.ts
    yield (0, create_route_1.generatorRoute)(projectPath);
    // Generate services example.service.ts
    yield (0, create_model_1.generatorModel)(projectPath);
    // Generate services example.service.ts
    yield (0, create_types_1.generatorTypes)(projectPath);
    // Generate services example.service.ts
    yield (0, create_service_1.generatorService)(projectPath);
});
exports.generateExpressPrisma = generateExpressPrisma;
