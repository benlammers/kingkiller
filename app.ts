import { Application } from "https://deno.land/x/oak/mod.ts";

import characterRoutes from "./routes/characters.ts";
import { connect } from "./helpers/db_client.ts";

connect();

const app = new Application();

app.use(characterRoutes.routes());
app.use(characterRoutes.allowedMethods());

await app.listen({ port: 8000 });
