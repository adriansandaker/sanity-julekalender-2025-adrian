export const getAllTracks = `*[_type == "track"]{_id, title, year, genre -> {name, slug}, duration, slug, playable, alias -> {name, genre}, coverart, url}`;

export const getAllTracksByGenre = `*[_type == "track" && references(*[_type == "genre" && slug.current == $genre]._id)]{
  _id,
  title,
  year,
  genre[]->{name, slug},
  duration,
  slug,
  playable,
  alias -> {name, genre},
  coverart,
  url
}`
export const getTrackDetails = `*[_type == "track" && slug.current == $slug]{_id, title, description, genre[]->{name}, type, slug, year, duration, playable, alias -> {name, genre}, coverart, url}[0]`;

export const getTracksByGenre = (genreId: string) => `
  *[_type == "track" && "${genreId}" in genre[]._ref]{
    _id,
    title,
    alias->{_id, title},
    description,
    coverart,
    duration,
    year,
    genre[]->{_id, title},
    type,
    slug,
    playable
  }
`;
