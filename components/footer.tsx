import { GithubIcon, Heart } from "lucide-react";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">{t("credits")}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://enka.network"
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("enka-network-api")}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/luisfun/paimon.plus"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon size={16} />
                  {t("original-repository")}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Lqm1/Artifacter"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon size={16} />
                  {t("artifacter-repository")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">{t("attribution")}</h3>
            <p className="text-sm">{t("disclaimer")}</p>
            <div className="mt-4 flex items-center gap-2">
              <Heart size={16} className="text-red-500" />
              <span>{t("made-with-love")}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
