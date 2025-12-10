/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { PortableText } from "@portabletext/react";

import { urlFor } from "@/lib/api/imageurl.client";
import { instrumentsComponents } from "./instruments.block";
import { hasAlias } from "@/lib/components/types";

import type { Genre, Track } from "@/lib/api/types/sanity.types";

import Playable from "@/lib/components/Playable/Playable";

import styles from "./TrackDetails.module.css";

interface TrackDetailsProps {
  readonly track: Track;
}

const TrackDetails = ({ track }: TrackDetailsProps) => {
  console.log(track);
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.backLink}>
        &lt; Tilbake til oversikten
      </Link>
      <h1>{track.title}</h1>
      <div className={styles.details}>
        <img
          src={urlFor(track.coverart ?? {}).url()}
          className={styles.coverArt}
          alt={`Cover art for ${track.title}`}
        />
        <div>
          <dl className={styles.trackInfo}>
            <dt>Alias</dt>
            <dd>
              {hasAlias(track) ? (
                <Link
                  href={`/alias/${track.alias?.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {track.alias.name}
                </Link>
              ) : (
                "Ingen"
              )}
            </dd>
            <dt>Type</dt>
            <dd>{track.type}</dd>
            <dt>Utgitt</dt>
            <dd>{track.year}</dd>
            <dt>Varighet</dt>
            <dd>{track.duration}</dd>
            <dt>Sjangere</dt>
            <dd>
              {Array.isArray(track.genre)
                ? track.genre
                    .map((genre: any) =>
                      "name" in genre && typeof genre.name === "string"
                        ? genre.name
                        : "Ukjent"
                    )
                    .join(", ")
                : "Ukjent"}
            </dd>
          </dl>
          {track.description && (
            <div className={styles.description}>
              <PortableText
                value={track.description}
                components={instrumentsComponents}
              />
            </div>
          )}
        </div>
      </div>
      <Playable
        uri={track.playable?.uri ?? ""}
        provider={track.playable?.provider ?? ""}
      />
    </div>
  );
};


export default TrackDetails;
