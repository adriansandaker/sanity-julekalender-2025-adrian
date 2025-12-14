import { Stack, TextInput, Text } from "@sanity/ui";
import { FormEvent, useEffect, useState } from "react";
import { set, StringInputProps } from "sanity";

const TRACK_DURATION_REGEX = /^([0-5]?[0-9]):([0-5][0-9])$/;

const DurationInput = (props: StringInputProps) => {
  const [duration, setDuration] = useState<string>(props.value ?? "00:00");
  const [error, setError] = useState<string | null>(null);

  const { elementProps, onChange, value = "00:00" } = props;

  useEffect(() => {
    if (duration !== value) {
      if (TRACK_DURATION_REGEX.test(duration)) {
        onChange(set(duration));
      } else {
        setError("Invalid duration format");
      }
    }
  }, [duration, onChange, value]);

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    const nextValue = event.currentTarget.value;
    setError(null);
    setDuration(nextValue);
  };

  return (
    <Stack space={2}>
      <TextInput {...elementProps} onChange={handleChange} value={duration ?? value} />
      <Text>
        {error ? (
          <small style={{ color: "rgb(150, 39, 33)" }}>{error}</small>
        ) : (
          <small>{translateDuration(value)}</small>
        )}
      </Text>
    </Stack>
  );
};

function translateDuration(duration: string) {
  const parts = duration.split(":").map(Number);
  if (parts.length !== 2) {
    return 0;
  }
  const [minutes, seconds] = parts;
  return `${minutes} minutter og ${seconds} sekunder`;
}

export default DurationInput;
