import { SchemaTypeDefinition } from "sanity";
import { experience } from "./experience";
import { page } from "./page";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [experience, page],
};
