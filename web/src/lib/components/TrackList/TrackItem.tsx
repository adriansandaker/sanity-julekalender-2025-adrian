/* eslint-disable @next/next/no-img-element */
import type { Track } from "@/lib/api/types/sanity.types";

import { hasAlias } from "@/lib/components/types";

import Playable from "@/lib/components/Playable/Playable";
import Link from "next/link";

import styles from "./TrackItem.module.css";

interface TrackItemProps {
  readonly track: Track;
}

const TrackItem = ({ track }: TrackItemProps) => {
  return (
    <div className={styles.trackWrapper}>
      <div>
        <dl className={styles.trackDetails}>
          <div>
            <dt>Alias:</dt>
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
          </div>
          <div>
            <dt>Tittel:</dt>
            <dd>
              {track.title} ({track.duration})
            </dd>
          </div>
          <div>
            <dt>Utgitt:</dt>
            <dd>{track.year}</dd>
          </div>
          <Link
            className={styles.trackLink}
            href={`/track/${track.slug?.current}`}
          >
            &gt; Vis detaljer
          </Link>
        </dl>
      </div>
      <Playable
        uri={track.playable?.uri ?? ""}
        provider={track.playable?.provider ?? ""}
      />
    </div>
  );
};

export default TrackItem;
