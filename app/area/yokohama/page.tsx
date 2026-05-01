import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "横浜でおすすめのホワイトニング5選【2026年最新】",
  description:
    "横浜で人気のホワイトニングサロン・クリニック5院を厳選比較。横浜駅・みなとみらい・関内エリアの料金・口コミ・アクセスを詳しく解説します。",
};

const clinics = [
  {
    name: "スターホワイトニング 横浜院",
    area: "横浜駅",
    price: "1回2,750円〜",
    type: "オフィス",
    access: "JR横浜駅西口 徒歩5分",
    features: ["圧倒的コスパ", "歯科医院提携", "年間15万人の実績"],
    slug: "/review/star-whitening/",
  },
  {
    name: "ホワイトエッセンス 横浜院",
    area: "横浜駅",
    price: "1回16,500円〜",
    type: "オフィス+ホーム",
    access: "JR横浜駅東口 徒歩4分",
    features: ["業界最大手", "返金保証", "症例100万件"],
    slug: "/review/white-essence/",
  },
  {
    name: "ミュゼホワイトニング 横浜院",
    area: "横浜駅",
    price: "1回11,000円〜",
    type: "オフィス",
    access: "JR横浜駅西口 徒歩3分",
    features: ["ポリリン酸で痛み軽減", "女性人気No.1"],
    slug: "/review/musee-whitening/",
  },
  {
    name: "ホワイトニングバー 横浜店",
    area: "横浜駅",
    price: "1回5,080円〜",
    type: "セルフ",
    access: "JR横浜駅 徒歩6分",
    features: ["セルフ型で気軽", "予約不要", "短時間施術"],
    slug: "/review/whitening-bar/",
  },
  {
    name: "Kiratt 横浜店",
    area: "関内",
    price: "1回4,980円〜",
    type: "セルフ",
    access: "JR関内駅 徒歩3分",
    features: ["完全個室", "最新LED照射", "リーズナブル"],
    slug: "/review/kiratt/",
  },
];

const faqs = [
  {
    q: "横浜で一番安いホワイトニングはどこですか？",
    a: "スターホワイトニング横浜院がオフィスホワイトニングで1回2,750円〜と最安級です。セルフホワイトニングではKiratt横浜店が1回4,980円〜でお手頃です。",
  },
  {
    q: "横浜のホワイトニングの相場はいくらですか？",
    a: "セルフホワイトニングは1回3,000〜5,000円、オフィスホワイトニングは1回10,000〜25,000円が横浜エリアの相場です。東京都心部と比較してやや安い傾向にあります。",
  },
  {
    q: "横浜駅周辺にホワイトニングは集中していますか？",
    a: "はい、横浜エリアのホワイトニングサロン・クリニックの大半がJR横浜駅周辺に集中しています。駅から徒歩5分圏内にほとんどの店舗があり、アクセスの便利さが特徴です。",
  },
  {
    q: "東京と横浜のどちらでホワイトニングを受けるべきですか？",
    a: "自宅や職場に近いほうを選ぶのが基本です。料金は横浜のほうがやや安い傾向があります。ただし東京は選択肢が豊富なので、特定の方式やサロンにこだわりがある場合は東京も検討しましょう。",
  },
  {
    q: "横浜でメンズ向けのホワイトニングはありますか？",
    a: "スターホワイトニング、ホワイトエッセンス、Kirattなど、横浜エリアの主要なサロン・クリニックは男女問わず利用可能です。スターホワイトニングは男性利用者も多く、気軽に通える雰囲気です。",
  },
  {
    q: "横浜で土日に通えるホワイトニングはありますか？",
    a: "横浜エリアの主要なホワイトニングサロン・クリニックはほぼ全て土日営業しています。土日は予約が混み合うため、早めの予約がおすすめです。",
  },
];

export default function YokohamaPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "エリア別" },
          { name: "横浜" },
        ]}
      />

      <section className="bg-gradient-to-b from-[#F0F9FF] to-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            横浜でおすすめの<span className="text-[#0EA5E9]">ホワイトニング5選</span>【2026年最新】
          </h1>
          <p className="text-gray-600 text-lg">
            横浜駅・関内エリアの人気ホワイトニングサロン・クリニックを厳選比較。料金・口コミ・アクセスから最適な1院を見つけましょう。
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            横浜のホワイトニング<span className="text-[#0EA5E9]">おすすめ5選</span>
          </h2>
          <div className="space-y-6">
            {clinics.map((clinic, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 bg-[#F0F9FF] px-5 py-3 border-b border-gray-100">
                  <span className="bg-[#0EA5E9] text-white text-sm font-bold px-3 py-1 rounded-full">{i + 1}位</span>
                  <h3 className="font-bold text-gray-900">{clinic.name}</h3>
                  <span className="ml-auto text-xs bg-white text-gray-600 px-2 py-1 rounded border border-gray-200">{clinic.type}</span>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                    <div>
                      <p className="text-gray-500">料金</p>
                      <p className="font-bold text-gray-900">{clinic.price}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">エリア</p>
                      <p className="font-bold text-gray-900">{clinic.area}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{clinic.access}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {clinic.features.map((f) => (
                      <span key={f} className="text-xs bg-sky-50 text-[#0EA5E9] px-2 py-1 rounded">{f}</span>
                    ))}
                  </div>
                  <Link href={clinic.slug} className="text-sm text-[#0EA5E9] font-medium hover:underline">
                    詳しいレビューを読む →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#F0F9FF]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            横浜でホワイトニングを<span className="text-[#0EA5E9]">選ぶポイント</span>
          </h2>
          <div className="space-y-4">
            {[
              { title: "横浜駅周辺が最もアクセス良好", desc: "横浜エリアのホワイトニングは横浜駅西口・東口周辺に集中しています。複数のサロンを比較検討する場合も、1日で複数のカウンセリングを受けやすい立地です。" },
              { title: "東京との料金差をチェック", desc: "横浜は東京都心部と比較して、同じチェーン店でもキャンペーン内容が異なる場合があります。初回価格だけでなく、2回目以降の料金も事前に確認しましょう。" },
              { title: "通院回数と総額で比較", desc: "ホワイトニングは1回で完了するものではありません。理想の白さになるまでの目安回数と、そのトータルコストで比較することが大切です。" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            横浜のホワイトニングに関する<span className="text-[#0EA5E9]">よくある質問</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-5 text-left font-medium text-gray-900 hover:bg-[#F0F9FF] transition-colors">
                  <span className="flex items-center gap-3">
                    <span className="text-[#0EA5E9] font-bold text-sm">Q</span>
                    {faq.q}
                  </span>
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  <span className="text-[#0EA5E9] font-bold mr-2">A</span>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#F0F9FF]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-500 mb-4">横浜のホワイトニングをもっと詳しく比較</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#ranking" className="inline-block bg-[#0EA5E9] text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-[#0284C7] transition-colors shadow-lg shadow-sky-200">
              全国ランキングを見る
            </Link>
            <Link href="/compare/cost/" className="inline-block bg-white text-[#0EA5E9] font-bold px-8 py-4 rounded-full text-lg border-2 border-[#0EA5E9] hover:bg-white transition-colors">
              料金比較を見る
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-4">関連記事</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/area/tokyo/" className="block bg-[#F0F9FF] rounded-xl p-4 border border-sky-100 hover:shadow-md transition-shadow">
              <p className="font-medium text-gray-900">東京でおすすめのホワイトニング8選</p>
              <p className="text-xs text-gray-500 mt-1">首都圏の人気サロン・クリニックを厳選</p>
            </Link>
            <Link href="/compare/self-vs-office/" className="block bg-[#F0F9FF] rounded-xl p-4 border border-sky-100 hover:shadow-md transition-shadow">
              <p className="font-medium text-gray-900">セルフ vs オフィスホワイトニング比較</p>
              <p className="text-xs text-gray-500 mt-1">方式の違いを徹底解説</p>
            </Link>
            <Link href="/purpose/wedding/" className="block bg-[#F0F9FF] rounded-xl p-4 border border-sky-100 hover:shadow-md transition-shadow">
              <p className="font-medium text-gray-900">ブライダルホワイトニング完全ガイド</p>
              <p className="text-xs text-gray-500 mt-1">結婚式前の最適タイミングを解説</p>
            </Link>
            <Link href="/knowledge/pain/" className="block bg-[#F0F9FF] rounded-xl p-4 border border-sky-100 hover:shadow-md transition-shadow">
              <p className="font-medium text-gray-900">ホワイトニングの痛みと対策</p>
              <p className="text-xs text-gray-500 mt-1">方式別の痛みの程度を解説</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
