import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";

import { musicStructure } from "./structures/music.structure";

export default defineConfig({
  name: "default",
  title: "Sanity Julekalender 2025 Adrian",

  projectId: process.env.SANITY_PROJECT_ID ?? "",
  dataset: "production",

  plugins: [
    structureTool({
      structure: musicStructure,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
