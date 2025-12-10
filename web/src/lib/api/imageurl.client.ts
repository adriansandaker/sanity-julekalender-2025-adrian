import {
  createImageUrlBuilder,
  type SanityImageSource,
} from "@sanity/image-url";

import client from "./client";

export function urlFor(source: SanityImageSource) {
  return createImageUrlBuilder(client).image(source);
}
