"use client";

import NextImage from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Star, Share2, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Card, CardContent } from "@/components/ui/card";
import { uidTest } from "@/lib/enka-network";
import { Footer } from "@/components/footer";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("home-page");
  const [uid, setUid] = useState("");
  const router = useRouter();

  useEffect(() => {
    const uid = localStorage.getItem("uid");
    if (uid) {
      setUid(uid);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (uidTest(uid)) {
      localStorage.setItem("uid", uid);
      router.push(`/genshin/${uid}`);
    }
  };

  const latestBuilds = [
    {
      title: "Furina Build",
      description: "Hydro Support Build with HP Focus",
      image: "/images/build-card-assets/overlay.jpg",
    },
    {
      title: "Navia Build",
      description: "Geo DPS with Critical Focus",
      image: "/images/build-card-assets/overlay.jpg",
    },
    {
      title: "Xianyun Build",
      description: "Anemo Support Build",
      image: "/images/build-card-assets/overlay.jpg",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#111111]">
      <Header />

      {/* Hero Section */}
      <div
        id="home"
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage:
            'linear-gradient(to top, rgba(17, 17, 17, 1) 0%, rgba(17, 17, 17, 0.7) 50%, rgba(17, 17, 17, 0) 100%), url("https://fastcdn.hoyoverse.com/static-resource-v2/2025/02/06/262a66c106cb8204cc15f5635a3c1cee_4407399352008735294.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            {t("title")}
          </h1>
          <p className="text-xl text-gray-200 mb-8 animate-fade-in-delay">
            {t("description")}
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-4"
          >
            <Input
              type="text"
              placeholder="Enter your UID"
              value={uid}
              onChange={(e) => setUid(e.target.value)}
              className="max-w-xs text-center text-lg bg-white/10 border-white/20 text-white placeholder:text-gray-300 transition-all duration-300 focus:scale-105"
            />
            <Button
              type="submit"
              size="lg"
              className="cursor-pointer bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white transform transition-all duration-300 hover:scale-105"
              disabled={!uidTest(uid)}
            >
              {t("generate-build-cards")}
            </Button>
          </form>
        </div>
      </div>

      {/* Latest Builds Section */}
      <section id="latest-builds" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            {t("latest-builds")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {latestBuilds.map((build, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-gray-700 overflow-hidden group py-0"
              >
                <CardContent className="px-0">
                  <div className="relative aspect-video">
                    <NextImage
                      src={build.image}
                      alt={build.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      width={1920}
                      height={1080}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {build.title}
                    </h3>
                    <p className="text-gray-300">{build.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            {t("features.title")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: t("features.beautiful-cards.title"),
                description: t("features.beautiful-cards.description"),
              },
              {
                icon: Users,
                title: t("features.real-time-data.title"),
                description: t("features.real-time-data.description"),
              },
              {
                icon: Share2,
                title: t("features.easy-sharing.title"),
                description: t("features.easy-sharing.description"),
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 transform transition-all duration-300 hover:scale-105"
              >
                <feature.icon className="w-8 h-8 text-amber-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
