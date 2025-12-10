import type { Alias, Track } from "@/lib/api/types/sanity.types";

import styles from "./AliasDetails.module.css";
import { PlatformIcons } from "@/lib/utils/platform.utils";


interface AliasDetailsProps {
  alias: Alias;
  tracks: Track[];
}

const AliasDetails = ({ alias, tracks = [] }: AliasDetailsProps) => {
  return (
    <section className={styles.container}>
      <h1>{alias.name}</h1>
      <p>Primærsjanger: {alias.genre}</p>
      <h2>Låter:</h2>
      <ul>
        {tracks?.map((track, index) => (
          <li key={index}>
            <a href={`/track/${track.slug?.current}`}>{track.title}</a>
          </li>
        ))}
      </ul>
      <h2>Plattformer:</h2>
      <ul>
        {alias.url?.map((platform, index) => (
          <li key={index}>
            <img
              src={PlatformIcons.get(platform.name as string)}
              alt={platform.name}
              width={16}
              height={16}
              style={{ marginRight: "8px" }}
            />
            <a href={platform.url} target="_blank" rel="noopener noreferrer">
              {platform.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AliasDetails;
