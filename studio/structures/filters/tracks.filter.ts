import { StructureBuilder } from "sanity/structure";

export const tracksByGenre = (builder: StructureBuilder) => {
  return builder.listItem()
    .title("Tracks by genre")
    .child(
      builder.documentTypeList("genre")
        .schemaType("genre")
        .title("Genres")
        .child((genreId) =>
          builder.documentList()
            .title("Tracks")
            .filter('_type == "track" && $genreId in genre[]._ref')
            .params({ genreId: genreId ?? "" }),
        ),
    );
};

export const tracksByYear = (builder: StructureBuilder) => {
  return builder.listItem()
    .title("Tracks by year")
    .child(
      builder.documentTypeList("track")
        .schemaType("track")
        .title("Release years")
        .child((yearId) =>
          builder.documentList()
            .title("Tracks")
            .filter('_type == "track" && $yearId in year[]._ref')
            .params({ yearId: yearId ?? null }),
        ),
    );
};