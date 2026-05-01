import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "メンズホワイトニングおすすめ【男性向けサロン・クリニック】",
  description:
    "男性におすすめのホワイトニングサロン・クリニックを厳選紹介。メンズが通いやすい雰囲気、料金相場、ビジネスマンに人気の方式を詳しく解説します。",
};

const faqs = [
  {
    q: "男性でもホワイトニングサロンに行って大丈夫ですか？",
    a: "全く問題ありません。近年は男性の美意識の高まりにより、ホワイトニングに通う男性が急増しています。スターホワイトニングやホワイトエッセンスでは男性利用者が全体の30〜40%を占めるほど一般的になっています。",
  },
  {
    q: "メンズホワイトニングの費用相場はどのくらいですか？",
    a: "男性だからといって料金が変わることはありません。セルフホワイトニングは1回3,000〜5,000円、オフィスホワイトニングは1回10,000〜30,000円が相場です。男性向けのセットプランを用意しているクリニックもあります。",
  },
  {
    q: "ビジネスマンにおすすめのホワイトニング方式は？",
    a: "忙しいビジネスマンには、短時間で効果が出るオフィスホワイトニングがおすすめです。1回30〜60分の施術で2〜3トーン明るくなります。通院時間が取りにくい方はホームホワイトニングで自宅ケアする方法もあります。",
  },
  {
    q: "タバコのヤニでも白くなりますか？",
    a: "タバコのヤニによる着色はホワイトニングで改善可能です。ただし、着色が強い場合はクリーニング（PMTC）を先に受けてからホワイトニングするとより効果的です。喫煙を続ける場合は定期的なメンテナンスが必要です。",
  },
  {
    q: "営業職なので自然な白さにしたいのですが可能ですか？",
    a: "ホワイトニングの回数や方式を調整することで、自然な白さに仕上げることが可能です。カウンセリングで「不自然にならない程度の白さ」と伝えれば、適切なプランを提案してもらえます。1〜2回の施術で自然なトーンアップが実現できます。",
  },
  {
    q: "ヒゲ脱毛とホワイトニングは同時にできますか？",
    a: "ヒゲ脱毛とホワイトニングの同時進行は基本的に問題ありません。ただし、脱毛直後は口元がデリケートな状態になるため、同日の施術は避け、数日空けることをおすすめします。",
  },
];

export default function MensPage() {
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
          { name: "目的別" },
          { name: "メンズホワイトニング" },
        ]}
      />

      <section className="bg-gradient-to-b from-[#F0F9FF] to-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-[#0EA5E9]">メンズホワイトニング</span>おすすめサロン・クリニック
          </h1>
          <p className="text-gray-600 text-lg">
            男性がホワイトニングに通うのは当たり前の時代。ビジネスシーンでの好印象、清潔感のある見た目を実現する、男性におすすめのホワイトニングを紹介します。
          </p>
        </div>
      </section>

      {/* Why Mens */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            男性がホワイトニングをする<span className="text-[#0EA5E9]">3つの理由</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "ビジネスでの第一印象", desc: "商談や面接で白い歯は清潔感と信頼感を与えます。アメリカでは身だしなみの基本として定着しており、日本でもビジネスパーソンの間で広がっています。" },
              { title: "婚活・恋愛で有利に", desc: "マッチングアプリや婚活パーティーでは写真が重要です。歯が白いだけで顔の印象が明るくなり、笑顔に自信が持てるようになります。" },
              { title: "タバコ・コーヒーのケア", desc: "喫煙やコーヒー・紅茶の習慣で歯が黄ばんでいる男性は多いです。ホワイトニングで着色を除去し、本来の白さを取り戻せます。" },
            ].map((item, i) => (
              <div key={i} className="bg-[#F0F9FF] rounded-xl p-5 border border-sky-100">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Services */}
      <section className="py-12 bg-[#F0F9FF]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            男性に<span className="text-[#0EA5E9]">おすすめのサービス</span>
          </h2>
          <div className="space-y-4">
            {[
              { name: "スターホワイトニング", price: "1回2,750円〜", point: "男性利用者が多く通いやすい。コスパ最強で気軽に始められる。", slug: "/review/star-whitening/" },
              { name: "ホワイトエッセンス", price: "1回16,500円〜", point: "完全個室でプライバシー配慮。ビジネスマンの利用多数。", slug: "/review/white-essence/" },
              { name: "Kiratt", price: "1回4,980円〜", point: "完全個室のセルフ型。他人の目を気にせず通える。", slug: "/review/kiratt/" },
              { name: "ホワイトニングバー", price: "1回5,080円〜", point: "予約不要で仕事帰りに立ち寄れる手軽さ。", slug: "/review/whitening-bar/" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-900">{item.name}</h3>
                  <span className="text-sm font-bold text-[#0EA5E9]">{item.price}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-2">{item.point}</p>
                <Link href={item.slug} className="text-sm text-[#0EA5E9] font-medium hover:underline">
                  詳しいレビューを読む →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Method Guide for Men */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            男性の目的別<span className="text-[#0EA5E9]">おすすめ方式</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#F0F9FF]">
                  <th className="text-left p-4 border border-gray-200 font-bold text-gray-700">目的</th>
                  <th className="text-left p-4 border border-gray-200 font-bold text-gray-700">おすすめ方式</th>
                  <th className="text-left p-4 border border-gray-200 font-bold text-gray-700">費用目安</th>
                  <th className="text-left p-4 border border-gray-200 font-bold text-gray-700">期間</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { purpose: "手軽に始めたい", method: "セルフホワイトニング", cost: "3,000〜5,000円/回", period: "月1〜2回" },
                  { purpose: "しっかり白くしたい", method: "オフィスホワイトニング", cost: "10,000〜30,000円/回", period: "3〜5回" },
                  { purpose: "自宅でケアしたい", method: "ホームホワイトニング", cost: "20,000〜40,000円", period: "2〜4週間" },
                  { purpose: "結婚式・面接前に", method: "デュアルホワイトニング", cost: "50,000〜100,000円", period: "1〜3ヶ月" },
                ].map((row) => (
                  <tr key={row.purpose} className="hover:bg-[#F0F9FF] transition-colors">
                    <td className="p-4 border border-gray-200 font-medium text-gray-900">{row.purpose}</td>
                    <td className="p-4 border border-gray-200 text-gray-700">{row.method}</td>
                    <td className="p-4 border border-gray-200 text-gray-700">{row.cost}</td>
                    <td className="p-4 border border-gray-200 text-gray-700">{row.period}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-[#F0F9FF]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            メンズホワイトニングの<span className="text-[#0EA5E9]">よくある質問</span>
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

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-500 mb-4">男性向けホワイトニングを探す</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#ranking" className="inline-block bg-[#0EA5E9] text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-[#0284C7] transition-colors shadow-lg shadow-sky-200">
              ランキングを見る
            </Link>
            <Link href="/compare/cost/" className="inline-block bg-white text-[#0EA5E9] font-bold px-8 py-4 rounded-full text-lg border-2 border-[#0EA5E9] hover:bg-white transition-colors">
              料金比較を見る
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#F0F9FF]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-4">関連記事</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/knowledge/toothpaste/" className="block bg-white rounded-xl p-4 border border-gray-100 hover:shadow-md transition-shadow">
              <p className="font-medium text-gray-900">ホワイトニング歯磨き粉おすすめ5選</p>
              <p className="text-xs text-gray-500 mt-1">自宅ケアで手軽に始める方法</p>
            </Link>
            <Link href="/knowledge/no-effect/" className="block bg-white rounded-xl p-4 border border-gray-100 hover:shadow-md transition-shadow">
              <p className="font-medium text-gray-900">ホワイトニングの効果がない原因</p>
              <p className="text-xs text-gray-500 mt-1">効果を最大化するポイントを解説</p>
            </Link>
            <Link href="/area/tokyo/" className="block bg-white rounded-xl p-4 border border-gray-100 hover:shadow-md transition-shadow">
              <p className="font-medium text-gray-900">東京でおすすめのホワイトニング8選</p>
              <p className="text-xs text-gray-500 mt-1">都内の人気サロン・クリニック</p>
            </Link>
            <Link href="/compare/self-vs-office/" className="block bg-white rounded-xl p-4 border border-gray-100 hover:shadow-md transition-shadow">
              <p className="font-medium text-gray-900">セルフ vs オフィス比較</p>
              <p className="text-xs text-gray-500 mt-1">方式の違いを徹底比較</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
