"use client";

import NextLink from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, GithubIcon, Home, Star, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";

export function Header() {
  const pathname = usePathname();
  const t = useTranslations("header");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const menuItems =
    pathname === "/"
      ? [
          { href: "#home", icon: Home, label: t("home") },
          { href: "#features", icon: Star, label: t("features") },
          { href: "#latest-builds", icon: Share2, label: t("latest-builds") },
          {
            href: "https://github.com/Lqm1/Artifacter",
            icon: GithubIcon,
            label: "GitHub",
            isExternal: true,
          },
        ]
      : [
          { href: "/#home", icon: Home, label: t("home") },
          { href: "/#features", icon: Star, label: t("features") },
          { href: "/#latest-builds", icon: Share2, label: t("latest-builds") },
          {
            href: "https://github.com/Lqm1/Artifacter",
            icon: GithubIcon,
            label: "GitHub",
            isExternal: true,
          },
        ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/90 backdrop-blur-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <NextLink
              href="/"
              className="text-2xl font-bold text-white transition-transform hover:scale-105"
              aria-label="Artifacter Home"
            >
              {t("title")}
            </NextLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-all hover:scale-105"
                {...(item.isExternal && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-white w-12 h-12 hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden fixed inset-0 top-[${
            isScrolled ? "64px" : "80px"
          }] bg-gray-900/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          aria-hidden={!isMenuOpen}
        >
          <nav className="h-full flex flex-col">
            <div className="flex-1 overflow-y-auto py-8 px-4">
              {menuItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`
                    flex items-center gap-4 py-4 px-6 text-lg text-gray-300 
                    hover:text-white hover:bg-white/5 rounded-lg transition-all
                    active:scale-95 transform
                    ${index === 0 ? "animate-fade-in" : `animate-fade-in-delay`}
                  `}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                  onClick={() => setIsMenuOpen(false)}
                  {...(item.isExternal && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                >
                  <item.icon size={24} />
                  <span className="font-medium">{item.label}</span>
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
