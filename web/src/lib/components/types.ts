import { Track } from "../api/types/sanity.types";

export function hasAlias(track: Track): track is Track & { alias: { name: string, genre: string } } {
  return track.alias !== undefined;
}