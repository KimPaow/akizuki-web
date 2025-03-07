import { SchemaTypeDefinition, Template, TemplateResolver } from "sanity";
import { experience } from "./experience";
import { page } from "./page";
import { settings } from "./setting";
import { singletonTypes } from "../structure";

export const schema: {
  types: SchemaTypeDefinition[];
  templates: Template[] | TemplateResolver;
} = {
  types: [experience, page, settings],

  // Filter out singleton types from the global “New document” menu options
  templates: (templates) =>
    templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
};
