import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ブライダルホワイトニング完全ガイド【結婚式前の最適タイミング】",
  description:
    "結婚式前のブライダルホワイトニングを徹底解説。いつから始めるべきか、方式別の効果とスケジュール、費用相場、おすすめクリニックまで詳しく紹介します。",
};

const faqs = [
  {
    q: "結婚式の何ヶ月前からホワイトニングを始めるべきですか？",
    a: "理想は結婚式の3〜6ヶ月前です。オフィスホワイトニングなら3ヶ月前、ホームホワイトニングなら6ヶ月前から開始すると、自然で美しい白さに仕上がります。最低でも1ヶ月前には始めましょう。",
  },
  {
    q: "ブライダルホワイトニングの費用はどのくらいですか？",
    a: "方式や回数によりますが、一般的にオフィスホワイトニング3〜5回で30,000〜80,000円、デュアルホワイトニング（オフィス+ホーム）で50,000〜100,000円が目安です。セルフホワイトニングなら10,000〜25,000円程度に抑えられます。",
  },
  {
    q: "結婚式直前のホワイトニングはリスクがありますか？",
    a: "結婚式の1週間前以降のオフィスホワイトニングは避けるのが無難です。知覚過敏や歯茎の違和感が残る可能性があります。最後の施術は2週間前までに終わらせるスケジュールが安全です。",
  },
  {
    q: "新郎もブライダルホワイトニングをするべきですか？",
    a: "結婚式の写真やビデオは一生残るものです。新郎新婦の歯の白さに差があると目立つため、可能であれば新郎も同時にホワイトニングすることをおすすめします。ペア割引を提供しているクリニックもあります。",
  },
  {
    q: "結婚式当日にホワイトニングの色が不自然に見えませんか？",
    a: "適切なスケジュールで施術すれば、結婚式当日には自然な白さに落ち着きます。施術直後の白さはやや不自然に見えることもありますが、2週間程度で周囲の歯と馴染んだ自然なトーンになります。",
  },
  {
    q: "ホワイトニング後、結婚式までに色戻りしませんか？",
    a: "オフィスホワイトニングの効果は3〜6ヶ月持続します。色戻りを防ぐためには、施術後に着色の強い食べ物・飲み物（コーヒー、赤ワイン、カレーなど）を控え、ホームホワイトニングでメンテナンスすることが効果的です。",
  },
];

const schedule = [
  { period: "6ヶ月前", action: "カウンセリング・歯科検診", detail: "虫歯や歯周病の治療を先に済ませる。ホームホワイトニングならこの時期に開始。" },
  { period: "3ヶ月前", action: "オフィスホワイトニング開始", detail: "2〜3週間おきに通院。1回目の施術で2〜3トーン明るくなることが多い。" },
  { period: "2ヶ月前", action: "2回目〜3回目の施術", detail: "理想の白さに近づいていく時期。必要に応じて追加施術を検討。" },
  { period: "1ヶ月前", action: "仕上げの施術", detail: "最後のオフィスホワイトニング。この時点で希望の白さに到達しているのが理想。" },
  { period: "2週間前", action: "最終確認", detail: "これ以降の施術は控える。ホームホワイトニングで微調整する程度に留める。" },
  { period: "当日", action: "最高の笑顔で", detail: "自然な白さが定着。写真映えする美しい歯で結婚式を迎えられる。" },
];

export default function WeddingPage() {
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
          { name: "ブライダルホワイトニング" },
        ]}
      />

      <section className="bg-gradient-to-b from-[#F0F9FF] to-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-[#0EA5E9]">ブライダルホワイトニング</span>完全ガイド
          </h1>
          <p className="text-gray-600 text-lg">
            結婚式で最高の笑顔を見せるために。ホワイトニングの最適な開始時期、方式の選び方、費用相場、おすすめのスケジュールを徹底解説します。
          </p>
        </div>
      </section>

      {/* Why Bridal Whitening */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            なぜブライダルホワイトニングが<span className="text-[#0EA5E9]">必要か</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "写真映えが変わる", desc: "結婚式の写真は一生の宝物。白いドレスに白い歯が映えると、顔全体がワントーン明るく見えます。" },
              { title: "ゲストの第一印象", desc: "多くのゲストと至近距離で会話する機会が多い結婚式。清潔感のある白い歯は好印象を与えます。" },
              { title: "自信を持って笑える", desc: "歯の色を気にして口元を隠す心配がなくなり、心から笑顔で特別な一日を過ごせます。" },
            ].map((item, i) => (
              <div key={i} className="bg-[#F0F9FF] rounded-xl p-5 border border-sky-100">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-12 bg-[#F0F9FF]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            ブライダルホワイトニングの<span className="text-[#0EA5E9]">理想スケジュール</span>
          </h2>
          <div className="space-y-4">
            {schedule.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-gray-100 flex gap-4">
                <div className="shrink-0 w-20 text-center">
                  <span className="inline-block bg-[#0EA5E9] text-white text-xs font-bold px-3 py-1 rounded-full">{item.period}</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.action}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Method Comparison */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            ブライダル向け<span className="text-[#0EA5E9]">方式比較</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#F0F9FF]">
                  <th className="text-left p-4 border border-gray-200 font-bold text-gray-700">方式</th>
                  <th className="text-left p-4 border border-gray-200 font-bold text-gray-700">おすすめ度</th>
                  <th className="text-left p-4 border border-gray-200 font-bold text-gray-700">費用目安</th>
                  <th className="text-left p-4 border border-gray-200 font-bold text-gray-700">必要期間</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { method: "デュアルホワイトニング", rating: "最もおすすめ", cost: "50,000〜100,000円", period: "2〜3ヶ月" },
                  { method: "オフィスホワイトニング", rating: "おすすめ", cost: "30,000〜80,000円", period: "1〜3ヶ月" },
                  { method: "ホームホワイトニング", rating: "時間がある方向け", cost: "20,000〜40,000円", period: "3〜6ヶ月" },
                  { method: "セルフホワイトニング", rating: "軽度の着色向き", cost: "10,000〜25,000円", period: "1〜2ヶ月" },
                ].map((row) => (
                  <tr key={row.method} className="hover:bg-[#F0F9FF] transition-colors">
                    <td className="p-4 border border-gray-200 font-medium text-gray-900">{row.method}</td>
                    <td className="p-4 border border-gray-200 text-gray-700">{row.rating}</td>
                    <td className="p-4 border border-gray-200 text-gray-700">{row.cost}</td>
                    <td className="p-4 border border-gray-200 text-gray-700">{row.period}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            デュアルホワイトニングは、オフィスで短期間に白くし、ホームで維持するハイブリッド方式。最も確実に理想の白さを実現できるため、ブライダルには最適です。
          </p>
        </div>
      </section>

      {/* Tips */}
      <section className="py-12 bg-[#F0F9FF]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            ブライダルホワイトニングの<span className="text-[#0EA5E9]">注意点</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "式直前の施術は避ける", desc: "最後のオフィスホワイトニングは式の2週間前までに。直前の施術は知覚過敏のリスクがあります。" },
              { title: "着色食品を控える", desc: "ホワイトニング期間中はコーヒー・赤ワイン・カレーなどの着色しやすい食品を控えると効果が長持ちします。" },
              { title: "虫歯治療を先に", desc: "ホワイトニング開始前に虫歯や歯周病の治療を済ませておくことが必須です。治療中はホワイトニングできません。" },
              { title: "差し歯・被せ物は白くならない", desc: "ホワイトニングは天然歯のみ効果があります。差し歯がある場合は歯科医師に相談し、必要に応じて作り直しを検討しましょう。" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            ブライダルホワイトニングの<span className="text-[#0EA5E9]">よくある質問</span>
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

      {/* CTA */}
      <section className="py-12 bg-[#F0F9FF]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-500 mb-4">結婚式に向けたホワイトニングを始める</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#ranking" className="inline-block bg-[#0EA5E9] text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-[#0284C7] transition-colors shadow-lg shadow-sky-200">
              おすすめランキングを見る
            </Link>
            <Link href="/compare/types/" className="inline-block bg-white text-[#0EA5E9] font-bold px-8 py-4 rounded-full text-lg border-2 border-[#0EA5E9] hover:bg-white transition-colors">
              方式を比較する
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-4">関連記事</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/compare/cost/" className="block bg-[#F0F9FF] rounded-xl p-4 border border-sky-100 hover:shadow-md transition-shadow">
              <p className="font-medium text-gray-900">ホワイトニングの料金相場と比較</p>
              <p className="text-xs text-gray-500 mt-1">方式別の費用を徹底比較</p>
            </Link>
            <Link href="/knowledge/after-stop/" className="block bg-[#F0F9FF] rounded-xl p-4 border border-sky-100 hover:shadow-md transition-shadow">
              <p className="font-medium text-gray-900">ホワイトニングをやめたら戻る？</p>
              <p className="text-xs text-gray-500 mt-1">持続期間とメンテナンス方法</p>
            </Link>
            <Link href="/knowledge/food/" className="block bg-[#F0F9FF] rounded-xl p-4 border border-sky-100 hover:shadow-md transition-shadow">
              <p className="font-medium text-gray-900">ホワイトニング後の食事制限</p>
              <p className="text-xs text-gray-500 mt-1">食べていいもの・避けるべきもの</p>
            </Link>
            <Link href="/knowledge/pain/" className="block bg-[#F0F9FF] rounded-xl p-4 border border-sky-100 hover:shadow-md transition-shadow">
              <p className="font-medium text-gray-900">ホワイトニングの痛みと対策</p>
              <p className="text-xs text-gray-500 mt-1">痛みが不安な方必見</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
