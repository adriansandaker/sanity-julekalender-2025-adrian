import client from "@/lib/api/client";
import { getAllGenres } from "@/lib/api/queries/genre.queries";
import {
  getAllTracks,
  getAllTracksByGenre,
} from "@/lib/api/queries/track.queries";

import Header from "@/lib/components/Header/Header";
import Footer from "@/lib/components/Footer/Footer";
import TrackList from "@/lib/components/TrackList/TrackList";

import styles from "./page.module.css";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const genre = params["genre"];

  const [tracks, genres] = await Promise.all([
    client.fetch(genre ? getAllTracksByGenre : getAllTracks, { genre: genre }),
    client.fetch(getAllGenres),
  ]);

  return (
    <div className={styles.page}>
      <Header />
      <section className={styles.tracks}>
        <TrackList tracks={tracks} genres={genres} />
      </section>
      <Footer />
    </div>
  );
}
