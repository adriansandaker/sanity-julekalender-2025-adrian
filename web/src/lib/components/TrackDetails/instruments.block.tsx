/* eslint-disable @next/next/no-img-element */
import { PortableTextComponentProps } from "@portabletext/react";

function getInstrumentIconPath(type: string): string {
  switch (type) {
    case "Synthesizer":
      return "/icons/synth.svg";
    case "Drum machine":
      return "/icons/drum_machine.svg";
    default:
      return "/icons/synthesizer.svg";
  }
}

export const instrumentsComponents = {
  types: {
    block: (props: PortableTextComponentProps<{ children: { text: string }[] }>) => {
      return props.value?.children?.map((child, index) => (
       child.text
      ));
    },
    // This will be used for any block with style: "normal"
    instrument: (
      props: PortableTextComponentProps<{
        manufacturer: string;
        model: string;
        type: string;
      }>
    ) => (
      <div className="instrument-info">
        <img
          src={getInstrumentIconPath(props.value.type || "Other")}
          alt={props.value.type || "Other"}
          width={16}
          height={16}
          style={{ marginRight: "8px" }}
        />
        <strong>{props.value.manufacturer}</strong> - {props.value.model}
      </div>
    ),
  },
};
