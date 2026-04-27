import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ホワイトニング比較ナビ | おすすめホワイトニング徹底比較2026",
  description:
    "ホワイトニング10社を徹底比較。オフィス・ホーム・セルフの3方式の料金・口コミ・効果を分かりやすく解説。あなたに合ったホワイトニングが見つかります。",
};

const rankings = [
  {
    rank: 1,
    name: "スターホワイトニング",
    slug: "star-whitening",
    price: "1回2,750円〜",
    type: "オフィス型",
    features: ["歯科医院提携で安心", "年間15万人が利用", "都内主要駅から徒歩圏内", "初回割引あり"],
    highlight: "圧倒的なコスパ",
    description:
      "歯科医院と提携したオフィスホワイトニングを1回2,750円から提供。年間15万人以上が利用する実績と安心感が魅力です。",
  },
  {
    rank: 2,
    name: "ホワイトエッセンス",
    slug: "white-essence",
    price: "1回16,500円〜",
    type: "オフィス+ホーム",
    features: ["全国200院以上の展開", "症例実績100万件突破", "個室でプライバシー配慮", "返金保証制度あり"],
    highlight: "業界最大手の安心感",
    description:
      "全国200院以上を展開する業界最大手。症例実績100万件を超える豊富な経験と返金保証制度で安心です。",
  },
  {
    rank: 3,
    name: "ミュゼホワイトニング",
    slug: "musee-whitening",
    price: "1回11,000円〜",
    type: "オフィス型",
    features: ["女性人気No.1", "ポリリン酸使用で痛みが少ない", "歯にやさしい施術", "リピート率が高い"],
    highlight: "痛みの少なさで人気",
    description:
      "ポリリン酸を使用した痛みの少ない施術が女性に支持されています。歯にやさしく、リピート率の高さが品質の証です。",
  },
  {
    rank: 4,
    name: "ホワイトニングバー",
    slug: "whitening-bar",
    price: "1回5,080円〜",
    type: "セルフ型",
    features: ["セルフ型で気軽に通える", "駅チカ店舗多数", "予約不要で当日OK", "短時間で施術完了"],
    highlight: "手軽さNo.1",
    description:
      "予約不要で駅チカ店舗に気軽に通えるセルフ型ホワイトニング。短時間で施術が完了し、忙しい方にもおすすめです。",
  },
  {
    rank: 5,
    name: "Kiratt",
    slug: "kiratt",
    price: "1回4,980円〜",
    type: "セルフ型",
    features: ["LED照射で効果的", "学生割引あり", "リーズナブルな価格設定", "清潔感のある店内"],
    highlight: "学生にもやさしい価格",
    description:
      "LED照射を使用したセルフホワイトニング。学生割引もあり、若い世代を中心に支持を集めています。",
  },
];

const faqs = [
  {
    q: "ホワイトニングの効果はどれくらい持続しますか？",
    a: "施術方法や生活習慣により異なりますが、一般的にオフィスホワイトニングで3〜6ヶ月、ホームホワイトニングで6ヶ月〜1年程度持続します。定期的なメンテナンスでより長く白さを保てます。",
  },
  {
    q: "ホワイトニングは痛いですか？",
    a: "個人差がありますが、施術中や施術後に一時的な知覚過敏が起こることがあります。ポリリン酸ホワイトニングなど痛みの少ない方法も選べます。不安な方は事前にカウンセリングで相談しましょう。",
  },
  {
    q: "オフィスホワイトニングとホームホワイトニングの違いは？",
    a: "オフィスホワイトニングは歯科医院で専門スタッフが施術し、1回で効果を実感しやすいのが特徴です。ホームホワイトニングは自宅でマウスピースを使って行い、じっくり白くしていく方法です。",
  },
  {
    q: "セルフホワイトニングとは何ですか？",
    a: "セルフホワイトニングは、専門サロンで自分自身で施術を行うホワイトニングです。医療行為ではないため比較的安価で、気軽に始められるのが特徴です。歯の表面の汚れを落とす効果があります。",
  },
  {
    q: "ホワイトニングの料金相場はいくらですか？",
    a: "オフィスホワイトニングは1回10,000〜50,000円、ホームホワイトニングは15,000〜40,000円、セルフホワイトニングは1回3,000〜8,000円が相場です。サービスによって大きく異なるため比較が重要です。",
  },
  {
    q: "ホワイトニングができない人はいますか？",
    a: "妊娠中・授乳中の方、無カタラーゼ症の方、重度の歯周病がある方は施術できない場合があります。また、差し歯や詰め物などの人工歯はホワイトニングで白くすることができません。事前に歯科医師に相談しましょう。",
  },
  {
    q: "ホワイトニング後に注意すべきことは？",
    a: "施術後24〜48時間は着色しやすい食べ物（カレー、コーヒー、赤ワインなど）を避けることが推奨されます。また、喫煙も着色の原因になるため控えましょう。定期的なメンテナンスも大切です。",
  },
  {
    q: "何回通えば白くなりますか？",
    a: "オフィスホワイトニングは1〜3回で効果を実感する方が多いです。セルフホワイトニングは3〜5回程度の継続が目安です。元の歯の色や目標とする白さによって個人差があります。",
  },
];

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#F0F9FF] to-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            あなたに合った
            <br className="md:hidden" />
            <span className="text-[#0EA5E9]">ホワイトニング</span>が見つかる
          </h1>
          <p className="mt-4 text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            料金・口コミ・効果を徹底比較して、最適なホワイトニングサービスを見つけましょう
          </p>
          <div className="mt-8">
            <a
              href="#ranking"
              className="inline-block bg-[#0EA5E9] text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-[#0284C7] transition-colors shadow-lg shadow-sky-200"
            >
              ランキングを見る
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { number: "10社", label: "厳選サービス" },
              { number: "3方式", label: "タイプ比較" },
              { number: "料金", label: "徹底比較" },
              { number: "口コミ", label: "掲載中" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-xl bg-[#F0F9FF] border border-sky-100"
              >
                <div className="text-2xl md:text-3xl font-bold text-[#0EA5E9]">{stat.number}</div>
                <div className="mt-1 text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Type comparison */}
      <section id="type" className="py-16 bg-[#F0F9FF]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
            ホワイトニング<span className="text-[#0EA5E9]">3つのタイプ</span>を比較
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "オフィスホワイトニング",
                desc: "歯科医院で専門スタッフが施術。1回で効果を実感しやすく、短期間で白い歯を目指せます。",
                price: "10,000〜50,000円/回",
                merit: "即効性が高い",
                demerit: "費用が高め",
              },
              {
                title: "ホームホワイトニング",
                desc: "自宅でマウスピースを使って施術。自分のペースでじっくり白くでき、効果が長持ちしやすいのが特徴です。",
                price: "15,000〜40,000円",
                merit: "効果が長持ち",
                demerit: "時間がかかる",
              },
              {
                title: "セルフホワイトニング",
                desc: "専門サロンで自分で施術。医療行為ではないため安価で、気軽に始められます。表面汚れの除去が中心です。",
                price: "3,000〜8,000円/回",
                merit: "安価で気軽",
                demerit: "効果はマイルド",
              },
            ].map((t) => (
              <div key={t.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{t.title}</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{t.desc}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">料金目安</span>
                    <span className="font-medium text-gray-900">{t.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">メリット</span>
                    <span className="font-medium text-[#0EA5E9]">{t.merit}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">デメリット</span>
                    <span className="font-medium text-gray-500">{t.demerit}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ranking */}
      <section id="ranking" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4">
            ホワイトニング<span className="text-[#0EA5E9]">おすすめランキング</span>
          </h2>
          <p className="text-center text-gray-500 text-sm mb-10">
            2026年4月最新 - 料金・実績・口コミを総合的に評価
          </p>

          <div className="space-y-6">
            {rankings.map((item) => (
              <div
                key={item.rank}
                className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 bg-[#F0F9FF] px-6 py-3 border-b border-sky-100">
                  <span
                    className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-white font-bold text-sm ${
                      item.rank === 1
                        ? "bg-yellow-500"
                        : item.rank === 2
                          ? "bg-gray-400"
                          : item.rank === 3
                            ? "bg-amber-600"
                            : "bg-gray-300"
                    }`}
                  >
                    {item.rank}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                  <span className="ml-auto text-xs bg-[#0EA5E9] text-white px-3 py-1 rounded-full">
                    {item.highlight}
                  </span>
                </div>

                <div className="p-6">
                  <div className="md:flex md:gap-8">
                    <div className="flex-1">
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.description}</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {item.features.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-[#0EA5E9] mt-0.5 shrink-0">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4 md:mt-0 md:w-48 flex flex-col items-center justify-center gap-2 md:border-l md:border-gray-100 md:pl-8">
                      <div className="text-sm text-gray-500">{item.type}</div>
                      <div className="text-xl font-bold text-[#0EA5E9]">{item.price}</div>
                      <Link
                        href={`/review/${item.slug}/`}
                        className="mt-2 w-full text-center bg-[#0EA5E9] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#0284C7] transition-colors text-sm"
                      >
                        詳細を見る
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Area */}
      <section id="area" className="py-16 bg-[#F0F9FF]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
            <span className="text-[#0EA5E9]">エリア別</span>で探す
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {[
              "東京", "大阪", "名古屋", "福岡",
              "横浜", "札幌", "仙台", "京都",
            ].map((area) => (
              <div
                key={area}
                className="bg-white rounded-lg p-4 text-center border border-gray-100 hover:border-[#0EA5E9] hover:shadow-sm transition-all cursor-pointer"
              >
                <span className="text-sm font-medium text-gray-700">{area}のホワイトニング</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
            サービス<span className="text-[#0EA5E9]">比較表</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#F0F9FF]">
                  <th className="text-left p-3 border border-gray-200 font-bold text-gray-700">サービス名</th>
                  <th className="text-left p-3 border border-gray-200 font-bold text-gray-700">料金</th>
                  <th className="text-left p-3 border border-gray-200 font-bold text-gray-700">タイプ</th>
                  <th className="text-left p-3 border border-gray-200 font-bold text-gray-700">特徴</th>
                </tr>
              </thead>
              <tbody>
                {rankings.map((item) => (
                  <tr key={item.rank} className="hover:bg-[#F0F9FF] transition-colors">
                    <td className="p-3 border border-gray-200 font-medium">
                      <Link href={`/review/${item.slug}/`} className="text-[#0EA5E9] hover:underline">
                        {item.name}
                      </Link>
                    </td>
                    <td className="p-3 border border-gray-200">{item.price}</td>
                    <td className="p-3 border border-gray-200">{item.type}</td>
                    <td className="p-3 border border-gray-200">{item.highlight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#F0F9FF]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
            よくある<span className="text-[#0EA5E9]">質問</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-5 text-left font-medium text-gray-900 hover:bg-[#F0F9FF] transition-colors">
                  <span className="flex items-center gap-3">
                    <span className="text-[#0EA5E9] font-bold text-sm">Q</span>
                    {faq.q}
                  </span>
                  <svg
                    className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
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
          <div className="text-center mt-8">
            <Link
              href="/faq/"
              className="text-[#0EA5E9] font-medium hover:underline"
            >
              もっと質問を見る
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-b from-white to-[#F0F9FF]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            まずは気になるサービスをチェック
          </h2>
          <p className="text-gray-600 mb-8">
            各サービスの詳細レビューで、料金・口コミ・特徴を確認できます
          </p>
          <a
            href="#ranking"
            className="inline-block bg-[#0EA5E9] text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-[#0284C7] transition-colors shadow-lg shadow-sky-200"
          >
            ランキングをもう一度見る
          </a>
        </div>
      </section>
    </>
  );
}
