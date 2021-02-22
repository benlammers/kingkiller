export interface CharacterSchema {
   _id: { $oid: string };
   name: string;
   species: string;
   occupations: string[];
}
