import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Noto_Serif_SC, Noto_Sans_SC } from "next/font/google";
import { cn } from "@/utils/utils";
import { Toaster } from "@/components/ui/sonner";
import { I18nProvider } from "@/components/i18n/i18n-provider";
import { getServerLocale } from "@/lib/i18n/server-preference";

const notoSerifSC = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-serif-sc",
  display: "swap",
});

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-sc",
  display: "swap",
});

const SITE_URL = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : undefined;

const SITE_TITLE = process.env.NEXT_PUBLIC_APP_TITLE?.trim() || "1001种人生";
const SITE_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION?.trim() || "回答几道趣味问题，发现你下辈子的离奇转世身份";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  ...(SITE_URL && {
    metadataBase: new URL(SITE_URL),
    openGraph: { title: SITE_TITLE, description: SITE_DESCRIPTION, url: SITE_URL },
    twitter: { card: "summary_large_image", title: SITE_TITLE, description: SITE_DESCRIPTION },
  }),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#F5F1E8",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getServerLocale();
  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={cn(
        notoSerifSC.variable,
        notoSansSC.variable,
        "h-full"
      )}
    >
      <body className="min-h-svh flex flex-col bg-[#F5F1E8] font-body">
        <I18nProvider>
          {children}
          <Toaster />
        </I18nProvider>
      </body>
    </html>
  );
}
