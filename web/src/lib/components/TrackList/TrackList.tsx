import type { Genre, Track } from "@/lib/api/types/sanity.types";

import GenreFilter from "@/lib/components/GenreFilter";
import TrackItem from "./TrackItem";

import styles from "./TrackList.module.css";

interface TrackListProps {
  readonly genres: Genre[];
  readonly tracks: Track[];
}

const TrackList = ({ genres = [], tracks = [] }: TrackListProps) => {
  return (
    <div className={styles.container}>
      <h2>Her er litt av musikken:</h2>
      <GenreFilter genres={genres} />
      <hr />
      <div className={styles.trackList}>
        {tracks.map((track) => (
          <TrackItem key={track._id} track={track} />
        ))}
      </div>
    </div>
  );
};

export default TrackList;
