import { defineField, defineType } from "sanity";

export const platformType = defineType({
  name: "platform",
  title: "Plattform",
  description: "Musikkplattform",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Navn",
      description: "Navn på plattformen",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "url",
      title: "URL",
      description: "Lenke til plattformens nettside eller profil",
      type: "url",
      validation: (rule) => rule.required(),
    }),
  ],
});
