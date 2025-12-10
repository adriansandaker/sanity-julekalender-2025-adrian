import { defineType, defineField } from "sanity";

import { PlugIcon } from "@sanity/icons";

import { InstrumentPreview } from "../components/InstrumentPreview";

export const instrumentType = defineType({
  name: "instrument",
  type: "object",
  title: "Instrument",
  icon: PlugIcon,
  fields: [
    defineField({
      name: "manufacturer",
      type: "string",
      title: "Manufacturer",
    }),
    defineField({
      name: "model",
      type: "string",
      title: "Model",
    }),
    defineField({
      name: "type",
      type: "string",
      title: "Type",

      options: {
        layout: "radio",
        list: ["Synthesizer", "Drum machine", "Sampler", "Effect", "Other"],
      },
    }),
  ],
  preview: {
    select: {
      manufacturer: "manufacturer",
      model: "model",
      type: "type",
    },
  },
  components: {
    preview: InstrumentPreview,
  },
});
