"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  User,
  Gauge,
  Activity,
  Heart,
  Sword,
  Shield,
  Layers,
  Star,
} from "lucide-react";
import { Tabs } from "@/components/ui/tabs";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslations } from "next-intl";
import { scoreTypeMenuItems } from "@/utils/build-card";
import { Badge } from "@/components/ui/badge";

// スコアタイプに対応するアイコンのマッピング
const scoreTypeIcons = {
  CRIT: <Activity className="h-4 w-4" />,
  HP: <Heart className="h-4 w-4" />,
  ATK: <Sword className="h-4 w-4" />,
  DEF: <Shield className="h-4 w-4" />,
  EM: <Layers className="h-4 w-4" />,
  ER: <Star className="h-4 w-4" />,
};

export default function Loading() {
  const t = useTranslations("genshin-user-page");

  // Create an array of 8 items for character avatars
  const avatarPlaceholders = Array(8).fill(null);

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
          {/* Player Profile Card Skeleton */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-black/80 backdrop-blur-md border-slate-700 mb-8 overflow-hidden shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  {/* Avatar Skeleton */}
                  <Skeleton className="h-24 w-24 rounded-full bg-slate-800/70" />

                  <div className="text-center md:text-left flex-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      {/* Name Skeleton */}
                      <Skeleton className="h-8 w-48 bg-slate-800/70" />

                      {/* Badge Skeletons */}
                      <Skeleton className="h-6 w-16 bg-purple-900/40" />
                      <Skeleton className="h-6 w-16 bg-amber-900/40" />
                    </div>

                    {/* Signature Skeleton */}
                    <Skeleton className="h-5 w-full max-w-md mt-2 bg-slate-800/70" />

                    {/* Tabs Skeleton */}
                    <Tabs defaultValue="stats" className="mt-6">
                      <TabsList className="bg-slate-800/90 border border-slate-700 shadow-md">
                        <TabsTrigger
                          value="stats"
                          className="text-slate-100 bg-amber-600 shadow-md"
                          disabled
                        >
                          {t("stats")}
                        </TabsTrigger>
                        <TabsTrigger
                          value="abyss"
                          className="text-slate-100"
                          disabled
                        >
                          {t("abyss")}
                        </TabsTrigger>
                        <TabsTrigger
                          value="theater"
                          className="text-slate-100"
                          disabled
                        >
                          {t("theater")}
                        </TabsTrigger>
                      </TabsList>

                      <div className="mt-4 bg-black/40 p-4 rounded-md">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <Skeleton className="h-6 w-full bg-slate-800/70" />
                          <Skeleton className="h-6 w-full bg-slate-800/70" />
                        </div>
                      </div>
                    </Tabs>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Character Selection Area Skeleton */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center text-white">
                <User className="mr-2 h-5 w-5" /> {t("character")}
              </h2>
              <Card className="bg-black/70 border-slate-700 p-4 shadow-md">
                <div className="grid grid-cols-6 md:grid-cols-12 gap-2 md:gap-3">
                  {avatarPlaceholders.map((_, index) => (
                    <div key={index} className="flex justify-center">
                      <Skeleton className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-slate-800/70" />
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Score Type Selection Skeleton */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center text-white">
                <Gauge className="mr-2 h-5 w-5" /> {t("score-type")}
              </h2>
              <Card className="bg-black/70 border-slate-700 p-4 shadow-md">
                <div className="flex flex-wrap gap-2">
                  {scoreTypeMenuItems.map((type, index) => (
                    <div key={index}>
                      <Badge
                        variant="default"
                        className={`text-sm py-2 px-3 opacity-70 cursor-not-allowed ${
                          index === 0
                            ? "bg-amber-600/80 text-white shadow-md"
                            : "bg-slate-800/80 text-slate-300 border-slate-600"
                        }`}
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

            {/* Build Card Skeleton */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="bg-black/80 border-slate-700 overflow-hidden shadow-lg">
                <CardContent className="p-0">
                  {/* Character Header Skeleton */}
                  <div className="relative h-48 bg-gradient-to-r from-slate-900 to-slate-800">
                    <div className="absolute inset-0 flex items-end p-6">
                      <div className="flex items-end gap-4">
                        <Skeleton className="h-24 w-24 rounded-full bg-slate-800/70" />
                        <div className="mb-2">
                          <Skeleton className="h-7 w-40 mb-2 bg-slate-800/70" />
                          <Skeleton className="h-5 w-24 bg-slate-800/70" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats Skeleton */}
                  <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Array(8)
                      .fill(null)
                      .map((_, index) => (
                        <div key={index} className="space-y-2">
                          <Skeleton className="h-5 w-20 bg-slate-800/70" />
                          <Skeleton className="h-7 w-full bg-slate-800/70" />
                        </div>
                      ))}
                  </div>

                  {/* Artifacts Skeleton */}
                  <div className="p-6 pt-0">
                    <Skeleton className="h-7 w-40 mb-4 bg-slate-800/70" />
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                      {Array(5)
                        .fill(null)
                        .map((_, index) => (
                          <Card
                            key={index}
                            className="bg-slate-900/50 border-slate-700"
                          >
                            <CardContent className="p-4 space-y-3">
                              <div className="flex items-center gap-3">
                                <Skeleton className="h-12 w-12 rounded-md bg-slate-800/70" />
                                <div className="space-y-1">
                                  <Skeleton className="h-5 w-24 bg-slate-800/70" />
                                  <Skeleton className="h-4 w-16 bg-slate-800/70" />
                                </div>
                              </div>
                              <div className="space-y-2">
                                {Array(4)
                                  .fill(null)
                                  .map((_, subIndex) => (
                                    <Skeleton
                                      key={subIndex}
                                      className="h-4 w-full bg-slate-800/70"
                                    />
                                  ))}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
