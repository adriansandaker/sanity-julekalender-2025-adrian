export const getAlias = `*[_type == "alias" && slug.current == $slug]{name, genre, url}`;

export const getAliasWithTracks = `*[_type == "alias" && slug.current == $slug]{
  name,
  genre,
  url,
  "tracks": *[_type == "track" && references(^._id)]{
    title,
    slug    
  }
}`;

export const getAllAliasGenres = `*[_type == "alias"]{genre}[].genre`;
