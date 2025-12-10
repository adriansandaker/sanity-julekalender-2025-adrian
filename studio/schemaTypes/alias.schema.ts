import { defineField, defineType } from "sanity";

export const aliasType = defineType({
  name: "alias",
  title: "Alias",
  description: "Musikkalias",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      description: "Navn på aliaset",
      type: "string",
      validation: (rule) => rule.required(),
    }),
 defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
    defineField({
      name: "genre",
      title: "Genre",
      description: "Primærsjanger for aliaset",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "url",
      title: "URL",
      description: "Lenke til aliasets nettside eller profil",
      type: "array",
      of: [{ type: "platform" }],
      validation: (rule) => rule.required(),
    })
  ],
})
