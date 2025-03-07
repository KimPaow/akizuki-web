import { StructureBuilder, StructureToolOptions } from "sanity/structure";

// Define the actions that should be available for singleton documents
export const singletonActions = new Set([
  "publish",
  "discardChanges",
  "restore",
]);

// Define the singleton document types
export const singletonTypes = new Set(["settings"]);

export const structure: StructureToolOptions = {
  structure: (S) =>
    S.list()
      .title("Content")
      .items([
        // Our singleton type has a list item with a custom child
        singletonListItem(S, "settings", "設定"),

        // Regular document types
        S.documentTypeListItem("experience").title("観光"),
        S.documentTypeListItem("page").title("ページ"),
      ]),
};

const singletonListItem = (
  S: StructureBuilder,
  typeName: string,
  title?: string
) =>
  S.listItem()
    .title(title || typeName)
    .id(typeName)
    .child(
      S.document()
        .schemaType(typeName)
        .documentId(typeName)
        .title(title || typeName)
    );
