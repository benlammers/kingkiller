import { config } from "https://deno.land/x/dotenv/mod.ts";
import { MongoClient } from "https://deno.land/x/mongo@v0.21.0/mod.ts";
import { Database } from "https://deno.land/x/mongo@v0.21.0/src/database.ts";

let db: Database;
const env = config();

export async function connect() {
   const client = new MongoClient();
   await client.connect({
      db: env.DATABASE,
      tls: true,
      servers: [
         {
            host: env.HOST,
            port: +env.PORT,
         },
      ],
      credential: {
         username: env.USERNAME,
         password: env.PASSWORD,
         db: env.DATABASE,
         mechanism: "SCRAM-SHA-1",
      },
   });

   db = client.database(env.DATABASE);
}

export function getDb(): Database {
   return db;
}
