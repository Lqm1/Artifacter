"use client";

import { useState, useEffect } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useTranslations } from "next-intl";
import BuildCard from "@/components/build-card";
import {
  avatarRemap,
  convertNameTextMapHash,
  getProfilePicturePath,
  getTheaterDifficulty,
} from "@/lib/enka-network";
import { EnkaApi } from "@/types/enka-network";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  User,
  Star,
  Trophy,
  MapPin,
  Activity,
  Shield,
  Heart,
  Layers,
  ChevronRight,
  Sword,
  Gauge,
} from "lucide-react";
import { ScoreType, scoreTypeMenuItems } from "@/utils/build-card";
import { NextAvatarImage } from "@/components/next-avatar-image";

// スコアタイプに対応するアイコンのマッピング
const scoreTypeIcons = {
  CRIT: <Activity className="h-4 w-4" />,
  HP: <Heart className="h-4 w-4" />,
  ATK: <Sword className="h-4 w-4" />,
  DEF: <Shield className="h-4 w-4" />,
  EM: <Layers className="h-4 w-4" />,
  ER: <Star className="h-4 w-4" />,
};

export default function ClientComponent({ enkaData }: { enkaData: EnkaApi }) {
  const t = useTranslations("genshin-user-page");
  const genshinT = useTranslations("genshin");
  const [selectedAvatarIndex, setSelectedAvatarIndex] = useState<number>(0);
  const [scoreType, setScoreType] = useState<ScoreType>("CRIT");
  const [isMobile, setIsMobile] = useState(false);

  // レスポンシブデザイン用のwindowサイズ検知
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="min-h-screen flex flex-col bg-[#0a0a0f] text-white">
      <Header />
      <div
        className="relative min-h-screen pt-24 md:pt-28 pb-10 md:pb-16"
        style={{
          backgroundImage:
            'linear-gradient(to top, rgba(17, 17, 17, 1) 0%, rgba(17, 17, 17, 0.7) 50%, rgba(17, 17, 17, 0) 100%), url("https://fastcdn.hoyoverse.com/static-resource-v2/2025/02/06/262a66c106cb8204cc15f5635a3c1cee_4407399352008735294.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
          {/* プレイヤープロフィールカード */}
          <>
            <Card className="bg-black/80 backdrop-blur-md border-slate-700 mb-8 overflow-hidden shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <Avatar className="h-24 w-24 border-2 border-slate-600 shadow-md">
                    {enkaData.playerInfo &&
                      getProfilePicturePath(
                        enkaData.playerInfo.profilePicture
                      ) && (
                        <NextAvatarImage
                          src={`https://enka.network/ui/${getProfilePicturePath(
                            enkaData.playerInfo.profilePicture
                          )}.png`}
                          alt="Profile Picture"
                          width={100}
                          height={100}
                        />
                      )}
                    <AvatarFallback className="bg-slate-800">
                      <User className="h-10 w-10" />
                    </AvatarFallback>
                  </Avatar>

                  <div className="text-center md:text-left flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      <h1 className="text-2xl font-bold text-white">
                        {enkaData.playerInfo.nickname}
                      </h1>
                      <Badge
                        variant="outline"
                        className="bg-purple-900/70 text-purple-100 border-purple-500 shadow-sm"
                      >
                        AR {enkaData.playerInfo.level}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="bg-amber-900/70 text-amber-100 border-amber-500 shadow-sm"
                      >
                        WL {enkaData.playerInfo.worldLevel}
                      </Badge>
                    </div>

                    <p className="text-slate-200 mt-2 italic">
                      &quot;
                      {enkaData.playerInfo.signature || genshinT("3626582017")}
                      &quot;
                    </p>

                    <Tabs defaultValue="stats" className="mt-6">
                      <TabsList className="bg-slate-800/90 border border-slate-700 shadow-md">
                        <TabsTrigger
                          value="stats"
                          className="text-slate-100 data-[state=active]:bg-amber-600 data-[state=active]:text-white data-[state=active]:shadow-md"
                        >
                          {t("stats")}
                        </TabsTrigger>
                        <TabsTrigger
                          value="abyss"
                          className="text-slate-100 data-[state=active]:bg-amber-600 data-[state=active]:text-white data-[state=active]:shadow-md"
                        >
                          {t("abyss")}
                        </TabsTrigger>
                        <TabsTrigger
                          value="theater"
                          className="text-slate-100 data-[state=active]:bg-amber-600 data-[state=active]:text-white data-[state=active]:shadow-md"
                        >
                          {t("theater")}
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent
                        value="stats"
                        className="mt-4 bg-black/40 p-4 rounded-md"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 place-items-center">
                          <div className="flex items-center gap-2">
                            <Heart className="h-5 w-5 text-rose-400" />
                            <span className="text-slate-100">
                              好感度MAXキャラクター:{" "}
                              {enkaData.playerInfo.fetterCount}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Trophy className="h-5 w-5 text-amber-400" />
                            <span className="text-slate-100">
                              完了アチーブメント:{" "}
                              {enkaData.playerInfo.finishAchievementNum}
                            </span>
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent
                        value="abyss"
                        className="mt-4 bg-black/40 p-4 rounded-md"
                      >
                        <div className="flex items-center gap-3">
                          <Layers className="h-5 w-5 text-blue-400" />
                          <div className="flex items-center">
                            <span className="text-slate-100">
                              第{enkaData.playerInfo.towerFloorIndex}層
                            </span>
                            <ChevronRight className="h-4 w-4 mx-1 text-slate-300" />
                            <span className="text-slate-100">
                              第{enkaData.playerInfo.towerLevelIndex}間
                            </span>
                          </div>
                          <div className="flex items-center text-yellow-400 ml-2">
                            {[...Array(enkaData.playerInfo.towerStarIndex)].map(
                              (_, i) => (
                                <Star
                                  key={i}
                                  className="h-4 w-4 fill-yellow-400"
                                />
                              )
                            )}
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent
                        value="theater"
                        className="mt-4 bg-black/40 p-4 rounded-md"
                      >
                        <div className="flex items-center gap-3">
                          <MapPin className="h-5 w-5 text-red-400" />
                          <div className="flex items-center">
                            <span className="text-slate-100">
                              第{enkaData.playerInfo.theaterActIndex}幕
                            </span>
                            <ChevronRight className="h-4 w-4 mx-1 text-slate-300" />
                            <span className="text-slate-100">
                              {enkaData.playerInfo.theaterModeIndex &&
                                t(
                                  getTheaterDifficulty(
                                    enkaData.playerInfo.theaterModeIndex
                                  ) ?? "NONE"
                                )}
                              モード
                            </span>
                          </div>
                          <div className="flex items-center text-yellow-400 ml-2">
                            {[
                              ...Array(enkaData.playerInfo.theaterStarIndex),
                            ].map((_, i) => (
                              <Star
                                key={i}
                                className="h-4 w-4 fill-yellow-400"
                              />
                            ))}
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>
              </CardContent>
            </Card>
          </>

          {enkaData.avatarInfoList && (
            <>
              {/* キャラクター選択エリア */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center text-white">
                  <User className="mr-2 h-5 w-5" /> {t("character")}
                </h2>
                <Card className="bg-black/70 border-slate-700 p-4 shadow-md">
                  <div
                    className={`grid ${
                      isMobile ? "grid-cols-6 gap-2" : "grid-cols-12 gap-3"
                    }`}
                  >
                    {enkaData.avatarInfoList
                      .map(avatarRemap)
                      .map((avatarRemapped, index) => (
                        <div key={index}>
                          <Avatar
                            className={`cursor-pointer transition-all duration-200 overflow-hidden h-12 w-12 md:h-14 md:w-14 ${
                              selectedAvatarIndex === index
                                ? "ring-2 ring-offset-2 ring-offset-black ring-amber-500 shadow-lg"
                                : "opacity-80 hover:opacity-100"
                            }`}
                            onClick={() => setSelectedAvatarIndex(index)}
                          >
                            <NextAvatarImage
                              src={`https://enka.network/ui/${avatarRemapped.sideIcon}.png`}
                              alt="Avatar Picture"
                              className="object-cover object-top scale-[1.2] -translate-y-1"
                              width={100}
                              height={100}
                            />
                            <AvatarFallback className="bg-slate-800 text-xs">
                              {genshinT(
                                convertNameTextMapHash(
                                  avatarRemapped.avatarId,
                                  "avatar"
                                ).toString()
                              )}
                            </AvatarFallback>
                          </Avatar>
                        </div>
                      ))}
                  </div>
                </Card>
              </div>

              {/* スコアタイプ選択 */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center text-white">
                  <Gauge className="mr-2 h-5 w-5" /> {t("score-type")}
                </h2>
                <Card className="bg-black/70 border-slate-700 p-4 shadow-md">
                  <div className="flex flex-wrap gap-2">
                    {scoreTypeMenuItems.map((type, index) => (
                      <div key={index}>
                        <Badge
                          variant={scoreType === type ? "default" : "outline"}
                          className={`text-sm cursor-pointer py-2 px-3 ${
                            scoreType === type
                              ? "bg-amber-600 hover:bg-amber-700 text-white shadow-md"
                              : "bg-slate-800/80 hover:bg-slate-700/90 text-slate-200 border-slate-600"
                          }`}
                          onClick={() => setScoreType(type)}
                        >
                          <span className="flex items-center gap-1">
                            {scoreTypeIcons[type]}
                            {t(type)}
                          </span>
                        </Badge>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              <Separator className="my-8 bg-slate-700/70" />

              {/* BuildCardコンポーネント */}
              <>
                <BuildCard
                  avatarInfo={enkaData.avatarInfoList[selectedAvatarIndex]}
                  scoreType={scoreType}
                  className="w-full rounded-md shadow-md"
                />
              </>
            </>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}
