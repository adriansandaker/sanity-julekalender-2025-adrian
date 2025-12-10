"use client";

import { useCallback, type ChangeEvent } from "react";

import styles from "./GenreFilter.module.css";
import { Genre } from "@/lib/api/types/sanity.types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface GenreFilterProps {
  readonly genres: Genre[];
}

const GenreFilter = ({ genres }: GenreFilterProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    if (e.target.value) {
      router.push(pathname + "?" + createQueryString("genre", e.target.value));
    } else {
      router.push(pathname);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.selectContainer}>
        <label htmlFor="genre-select">Velg sjanger</label>
        <select
          name="genre"
          id="genre-select"
          className={styles.select}
          onChange={handleChange}
        >
          <option key="all" value="">
            Alle
          </option>
          {genres.map((genre) => {
            return (
              <option key={genre.slug?.current} value={genre.slug?.current}>
                {genre.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default GenreFilter;
