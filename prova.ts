import { prompt } from "enquirer";
import * as fs from "fs/promises";
import * as path from "path";
import { commandCreateRoute } from "./src/generate-express-prisma/generate-command-line/create-route";
(async () => {
  commandCreateRoute();
})();
