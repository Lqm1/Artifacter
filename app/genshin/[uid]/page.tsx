import ClientComponent from "./client-component";
import { fetchUid, uidTest } from "@/lib/enka-network";
import { notFound } from "next/navigation";

export default async function User({
  params,
}: {
  params: Promise<{ uid: string }>;
}) {
  const { uid } = await params;
  if (!uidTest(uid)) {
    notFound();
  }
  const enkaData = await fetchUid(parseInt(uid)).catch(() => null);
  if (!enkaData) {
    notFound();
  }
  return <ClientComponent enkaData={enkaData} />;
}
