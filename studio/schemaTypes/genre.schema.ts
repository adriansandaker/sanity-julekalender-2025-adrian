import {defineField, defineType} from "sanity"

export const genreType = defineType({
  name: "genre",
  title: "Genre",
  description: "Musikksjanger",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      description: "Navn på sjangeren",
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
  ],
})
