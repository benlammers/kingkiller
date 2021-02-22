import { Router } from "https://deno.land/x/oak/mod.ts";
import { Bson } from "https://deno.land/x/mongo@v0.21.0/mod.ts";

import { getDb } from "../helpers/db_client.ts";
import { CharacterSchema } from "../helpers/db_schema.ts";

const router = new Router();

router.get("/characters", async (ctx) => {
   const characters = await getDb()
      .collection<CharacterSchema>("characters")
      .find({}, { noCursorTimeout: false } as any)
      .toArray();
   ctx.response.body = { characters: characters };
});

router.get("/characters/:_id", async (ctx) => {
   const character = await getDb()
      .collection<CharacterSchema>("characters")
      .findOne({ _id: new Bson.ObjectId(ctx.params._id) }, { noCursorTimeout: false } as any);
   ctx.response.body = { character: character };
});

/*
router.post("/characters", async (ctx) => {
   const { value } = ctx.request.body({ type: "json" });
   const { name, species, occupations } = await value;

   const newCharacter: Partial<CharacterSchema> = {
      name: name,
      species: species,
      occupations: occupations,
   };

   await getDb().collection<CharacterSchema>("characters").insertOne(newCharacter);

   ctx.response.body = { character: newCharacter };
});
*/

export default router;
