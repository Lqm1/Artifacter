"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTranslations } from "next-intl";
import BuildCard from "@/components/build-card";
import { avatarRemap, convertNameTextMapHash } from "@/lib/enka-network";
import { EnkaApi } from "@/types/enka-network";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function GenshinDashboard({ enkaData }: { enkaData: EnkaApi }) {
  const genshinT = useTranslations("genshin");
  const [selectedAvatarIndex, setSelectedAvatarIndex] = useState<number>(0);

  return (
    <main className="min-h-screen flex flex-col bg-[#111111]">
      <Header />
      <div
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage:
            'linear-gradient(to top, rgba(17, 17, 17, 1) 0%, rgba(17, 17, 17, 0.7) 50%, rgba(17, 17, 17, 0) 100%), url("https://fastcdn.hoyoverse.com/static-resource-v2/2025/02/06/262a66c106cb8204cc15f5635a3c1cee_4407399352008735294.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <p>ニックネーム: {enkaData.playerInfo.nickname}</p>
          <p>ステータスメッセージ: {enkaData.playerInfo.signature}</p>
          <p>冒険ランク: {enkaData.playerInfo.level}</p>
          <p>世界ランク: {enkaData.playerInfo.worldLevel}</p>
          <p>好感度MAXキャラクター数: {enkaData.playerInfo.fetterCount}</p>
          <p>
            完了したアチーブメント数: {enkaData.playerInfo.finishAchievementNum}
          </p>
          <p>
            幻想シアター: {enkaData.playerInfo.theaterActIndex}幕{" "}
            {enkaData.playerInfo.theaterModeIndex}モード{" "}
            {enkaData.playerInfo.theaterStarIndex}★
          </p>
          <p>
            深境螺旋: {enkaData.playerInfo.towerFloorIndex}層{" "}
            {enkaData.playerInfo.towerLevelIndex}間{" "}
            {enkaData.playerInfo.towerStarIndex}★
          </p>
          {enkaData.avatarInfoList && (
            <>
              <div className="grid grid-cols-12 gap-4">
                {enkaData.avatarInfoList
                  .map(avatarRemap)
                  .map((avatarRemapped, index) => (
                    <Avatar
                      key={index}
                      onClick={() => setSelectedAvatarIndex(index)}
                    >
                      <AvatarImage
                        src={`https://res.cloudinary.com/genshin/image/upload/sprites/${avatarRemapped.sideIcon}.webp`}
                      />
                      <AvatarFallback>
                        {genshinT(
                          convertNameTextMapHash(
                            avatarRemapped.avatarId,
                            "avatar"
                          ).toString()
                        )}
                      </AvatarFallback>
                    </Avatar>
                  ))}
              </div>
              <BuildCard
                avatarInfo={enkaData.avatarInfoList[selectedAvatarIndex]}
                scoreType="CRIT"
              />
            </>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}
