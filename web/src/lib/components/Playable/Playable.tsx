import styles from "./Playable.module.css";

interface PlayableProps {
  readonly uri: string;
  readonly provider: string;
}

const Playable = ({ uri, provider }: PlayableProps) => {
  if (provider === "Spotify") {
    return (
      <iframe
        className={styles.playable}
        data-testid="embed-iframe"
        src={uri}
        width="100%"
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    );
  } else if (provider === "SoundCloud") {
    return (
      <iframe
        className={styles.playable}
        width="100%"
        height="166"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
          uri
        )}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
      ></iframe>
    );
  } else {
    return <p>Ukjent leverandør</p>;
  }
};

export default Playable;
