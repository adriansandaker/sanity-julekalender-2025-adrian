import { Flex, Text, Heading, Grid } from "@sanity/ui";

import synthesizer from "./icons/synth.svg";
import drumMachine from "./icons/drum_machine.svg";

import { PreviewProps } from "sanity";

type InstrumentValue = {
  manufacturer?: string;
  model?: string;
  type?: string;
};
type InstrumentPreviewProps = PreviewProps & InstrumentValue;

export function InstrumentPreview(props: InstrumentPreviewProps) {
  console.log(props);
  const { manufacturer, model, type } = props || {};

  function pickIcon(instrumentType: string | undefined) {
    switch (instrumentType) {
      case "Synthesizer":
        return synthesizer;
      case "Drum machine":
        return drumMachine;
      default:
        return synthesizer;
    }
  }

  return (
    <Grid padding={3} gap={2} cols={3}>
      <Flex gap={1}>
        <img width={20} style={{ filter: "invert(1)" }} src={pickIcon(type)} alt={type} />
        <Heading>{typeof model === "string" && model}</Heading>
      </Flex>
      <Text>{typeof manufacturer === "string" && manufacturer}</Text>
    </Grid>
  );
}
