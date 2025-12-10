import { defineType, defineField } from "sanity";

export const trackType = defineType({
  name: "track",
  title: "Track",
  type: "document",
  fields: [
    defineField({
      name: "alias",
      title: "Alias",
      description: "Alias benyttet på låten",
      type: "reference",
      to: [{ type: "alias" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      description: "Tittel på utgivelsen",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      description: "Beskrivelse av utgivelsen",
      type: "array",
      of: [{ type: "block" }, { type: "instrument" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "coverart",
      title: "Cover-art",
      description: "Albumcover for utgivelsen",
      type: "image",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "duration",
      title: "Duration",
      description: "Varighet på låten (mm:ss)",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "year",
      title: "Year",
      description: "Utgivelsesår",
      type: "date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "genre",
      title: "Genre",
      description: "Sjanger",
      type: "array",
      of: [{ type: "reference", to: [{ type: "genre" }] }],
    }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      description: "Type utgivelse, eks. originallåt eller remix.",
      options: {
        layout: "radio",
        list: ["Original", "Remix"],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "playable",
      title: "Playable",
      description: "Avspillbar ressurs",
      type: "object",
      fields: [
        defineField({
          name: "provider",
          title: "Provider",
          type: "string",
          description: "Musikkleverandør, eks. Spotify eller Apple Music",
          options: {
            layout: "radio",
            list: ["Spotify", "SoundCloud"],
          },
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "uri",
          title: "URI",
          type: "string",
          description: "URI til låten",
          validation: (rule) => rule.required(),
        }),
      ],
    }),
  ],
});
