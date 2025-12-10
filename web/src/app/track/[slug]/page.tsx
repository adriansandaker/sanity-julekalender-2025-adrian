import client from "@/lib/api/client";
import { getTrackDetails } from "@/lib/api/queries/track.queries";

import TrackDetails from "@/lib/components/TrackDetails/TrackDetails";

export default async function Track({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const data = await client.fetch(getTrackDetails, { slug });

  return (
    <section>
      <TrackDetails track={data} />
    </section>
  );
}
