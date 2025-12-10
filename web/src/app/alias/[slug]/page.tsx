import client from "@/lib/api/client";
import { getAliasWithTracks } from "@/lib/api/queries/alias.queries";
import AliasDetails from "@/lib/components/AliasDetails";

export default async function AliasPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const aliasData = await client.fetch(getAliasWithTracks, { slug });

  return <AliasDetails alias={aliasData[0]} tracks={aliasData[0].tracks} />;
}
