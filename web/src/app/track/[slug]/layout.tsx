import styles from "./layout.module.css";

export default function TrackLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}
