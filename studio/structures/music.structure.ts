import { tracksByGenre, tracksByYear } from "./filters/tracks.filter";

import type { StructureResolver, StructureBuilder } from "sanity/structure";

export const musicStructure: StructureResolver = (builder: StructureBuilder) =>
  builder.list()
    .title("Music")
    .items([
      builder.listItem()
        .title("Filters")
        .child(
          builder.list()
            .title("Filters")
            .items([tracksByGenre(builder), tracksByYear(builder)]),
        ),
      ...builder.documentTypeListItems().filter(
        (listItem) => !["platform", "genre"].includes(listItem.getId() ?? ""),
      ),
    ]);


