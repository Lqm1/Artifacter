import BuildCard from "@/components/build-card";
import { fetchUid } from "@/lib/enka-network";
import { notFound } from "next/navigation";

export default async function HomePage() {
  const enkaData = await fetchUid(895578273);
  if (!enkaData.avatarInfoList) {
    return notFound();
  }
  return (
    <div>
      <BuildCard avatarInfo={enkaData.avatarInfoList[0]} scoreType="CRIT" />
    </div>
  );
}
