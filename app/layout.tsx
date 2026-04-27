import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "ホワイトニング比較ナビ | おすすめホワイトニング徹底比較2026",
    template: "%s | ホワイトニング比較ナビ",
  },
  description:
    "ホワイトニング10社を徹底比較。オフィス・ホーム・セルフの3方式の料金・口コミ・効果を分かりやすく解説。あなたに合ったホワイトニングが見つかります。",
  metadataBase: new URL("https://whitening-navi.pages.dev"),
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "ホワイトニング比較ナビ",
  },
  other: {
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
  },
};

const navItems = [
  { label: "ランキング", href: "/#ranking" },
  { label: "タイプ別", href: "/#type" },
  { label: "エリア別", href: "/#area" },
  { label: "お役立ち", href: "/faq/" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full antialiased`}>
      <head>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-800 font-sans">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-[#0EA5E9]">ホワイトニング比較ナビ</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-gray-600 hover:text-[#0EA5E9] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Hamburger */}
            <details className="md:hidden relative group">
              <summary className="list-none cursor-pointer p-2">
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </summary>
              <nav className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#F0F9FF] hover:text-[#0EA5E9] transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </details>
          </div>
          <div className="bg-[#F0F9FF] text-center py-1">
            <span className="text-xs text-gray-500">PRを含みます</span>
          </div>
        </header>

        {/* Main */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300">
          <div className="max-w-5xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold text-white mb-4">ホワイトニング比較ナビ</h3>
                <p className="text-sm leading-relaxed">
                  ホワイトニングの料金・口コミ・効果を徹底比較。あなたに最適なホワイトニングサービスが見つかります。
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-4">コンテンツ</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/#ranking" className="hover:text-[#0EA5E9] transition-colors">
                      ランキング
                    </Link>
                  </li>
                  <li>
                    <Link href="/#type" className="hover:text-[#0EA5E9] transition-colors">
                      タイプ別比較
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq/" className="hover:text-[#0EA5E9] transition-colors">
                      よくある質問
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-4">サービス詳細</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/review/star-whitening/" className="hover:text-[#0EA5E9] transition-colors">
                      スターホワイトニング
                    </Link>
                  </li>
                  <li>
                    <Link href="/review/white-essence/" className="hover:text-[#0EA5E9] transition-colors">
                      ホワイトエッセンス
                    </Link>
                  </li>
                  <li>
                    <Link href="/review/musee-whitening/" className="hover:text-[#0EA5E9] transition-colors">
                      ミュゼホワイトニング
                    </Link>
                  </li>
                  <li>
                    <Link href="/review/whitening-bar/" className="hover:text-[#0EA5E9] transition-colors">
                      ホワイトニングバー
                    </Link>
                  </li>
                  <li>
                    <Link href="/review/kiratt/" className="hover:text-[#0EA5E9] transition-colors">
                      Kiratt
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-xs text-gray-500">
              <p>当サイトはアフィリエイトプログラムに参加しています。</p>
              <p className="mt-2">&copy; 2026 ホワイトニング比較ナビ All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
