import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ホワイトニングは痛い？知覚過敏の原因と対策【方式別】",
  description:
    "ホワイトニングの痛みや知覚過敏について方式別に解説。痛みの原因・持続時間・対策方法から、痛みが少ないホワイトニングの選び方まで詳しくまとめました。",
};

const faqs = [
  {
    q: "ホワイトニングはどのくらい痛いですか？",
    a: "痛みの度合いは方式によって大きく異なります。セルフホワイトニングはほぼ痛みがありません。オフィスホワイトニングでは施術中〜施術後に「ズキン」とした軽い痛みや冷たいものがしみる知覚過敏が起こることがあります。痛みの感じ方には個人差が大きいです。",
  },
  {
    q: "ホワイトニング後の痛みはどのくらい続きますか？",
    a: "通常、施術後の知覚過敏や痛みは数時間〜24時間程度で治まります。稀に2〜3日程度続くこともありますが、徐々に軽減していきます。痛みが3日以上続く場合は、施術を受けたクリニックに相談してください。",
  },
  {
    q: "痛みが怖くてホワイトニングを躊躇しています。どうすればいいですか？",
    a: "痛みが心配な場合は、まずセルフホワイトニングから試すことをおすすめします。医療用の過酸化水素を使用しないため、知覚過敏がほぼ起きません。オフィスホワイトニングを希望する場合は、ポリリン酸ホワイトニングなど痛みが少ない方式を選ぶか、事前カウンセリングで薬剤の濃度を相談しましょう。",
  },
  {
    q: "知覚過敏がある人でもホワイトニングできますか？",
    a: "元々知覚過敏がある方でもホワイトニングは可能ですが、事前に歯科医師に相談することが重要です。薬剤の濃度を調整したり、知覚過敏用の歯磨き粉で事前ケアしたり、セルフホワイトニングを選択するなど、対策を講じることで安全に施術を受けられます。",
  },
  {
    q: "ホワイトニング中に痛みを感じたらどうすればいいですか？",
    a: "オフィスホワイトニングの場合、施術中に我慢できない痛みを感じたらすぐに歯科医師に伝えてください。薬剤の除去や濃度の変更、施術の中断など適切な対応をしてもらえます。痛みを我慢し続ける必要はありません。",
  },
  {
    q: "痛みを軽減する方法はありますか？",
    a: "施術前に知覚過敏用歯磨き粉（シュミテクトなど）を2週間程度使用する、施術前後に鎮痛剤を服用する（歯科医師に相談の上）、施術直後は冷たい・熱い飲食物を避けるなどの方法があります。また、ポリリン酸ホワイトニングなど痛みが少ない方式を選ぶのも有効です。",
  },
];

export default function PainPage() {
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
          { name: "お役立ち情報", href: "/faq/" },
          { name: "ホワイトニングの痛み" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#F0F9FF] to-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ホワイトニングは<span className="text-[#0EA5E9]">痛い？</span>知覚過敏の原因と対策
          </h1>
          <p className="text-gray-600 text-lg">
            ホワイトニングの痛みに不安を感じている方へ。方式別の痛みの程度、知覚過敏の原因、具体的な対策方法を解説します。
          </p>
        </div>
      </section>

      {/* Pain by Method */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            方式別の<span className="text-[#0EA5E9]">痛みの程度</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#F0F9FF]">
                  <th className="text-left p-4 border border-gray-200 font-bold text-gray-700">方式</th>
                  <th className="text-left p-4 border border-gray-200 font-bold text-gray-700">痛みの程度</th>
                  <th className="text-left p-4 border border-gray-200 font-bold text-gray-700">痛みの原因</th>
                  <th className="text-left p-4 border border-gray-200 font-bold text-gray-700">持続時間</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { method: "セルフホワイトニング", level: "ほぼなし", cause: "医療用薬剤を使用しないため", duration: "-" },
                  { method: "サロンホワイトニング", level: "ほぼなし", cause: "セルフと同様の薬剤", duration: "-" },
                  { method: "オフィスホワイトニング", level: "軽度〜中程度", cause: "過酸化水素がエナメル質に浸透", duration: "数時間〜24時間" },
                  { method: "ホームホワイトニング", level: "軽度", cause: "低濃度の過酸化尿素を使用", duration: "数時間程度" },
                  { method: "デュアルホワイトニング", level: "軽度〜中程度", cause: "オフィスと同様", duration: "数時間〜24時間" },
                ].map((row) => (
                  <tr key={row.method} className="hover:bg-[#F0F9FF] transition-colors">
                    <td className="p-4 border border-gray-200 font-medium text-gray-900">{row.method}</td>
                    <td className="p-4 border border-gray-200 text-gray-700">{row.level}</td>
                    <td className="p-4 border border-gray-200 text-gray-700">{row.cause}</td>
                    <td className="p-4 border border-gray-200 text-gray-700">{row.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Cause of Pain */}
      <section className="py-12 bg-[#F0F9FF]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            知覚過敏が起こる<span className="text-[#0EA5E9]">原因</span>
          </h2>
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <p className="text-gray-600 leading-relaxed mb-4">
              ホワイトニングで痛みや知覚過敏が起こるのは、主に以下のメカニズムによります。
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">1. 過酸化水素の浸透</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  オフィスホワイトニングで使用する過酸化水素は、歯のエナメル質を通過して象牙質に達します。この過程で歯の神経（歯髄）が刺激を受け、一時的な知覚過敏が起こります。これは正常な反応であり、時間の経過とともに収まります。
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">2. エナメル質の脱水</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  ホワイトニング施術によってエナメル質が一時的に脱水状態になると、外部の刺激が歯の内部に伝わりやすくなります。施術後に歯が再水和されることで、この症状は改善します。
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">3. 既存の歯のトラブル</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  虫歯、歯のひび割れ、歯茎の後退などが既にある場合、薬剤が直接神経に到達しやすくなり、痛みが強く出ることがあります。施術前の歯科検診で問題がないか確認することが重要です。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            痛みを防ぐ<span className="text-[#0EA5E9]">7つの対策</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "知覚過敏用歯磨き粉を使う", desc: "施術の2週間前から硝酸カリウム配合の歯磨き粉（シュミテクトなど）を使用すると、知覚過敏の予防に効果的です。" },
              { title: "事前の歯科検診を受ける", desc: "虫歯や歯のひび割れがあると痛みが強くなります。施術前に歯科検診を受け、問題を解消しておきましょう。" },
              { title: "薬剤の濃度を相談する", desc: "オフィスホワイトニングでは薬剤の濃度を調整できる場合があります。痛みが心配な方はカウンセリングで相談してください。" },
              { title: "施術直後の刺激物を避ける", desc: "施術後24時間は冷たい・熱い飲食物、酸性の食品を避けることで痛みを軽減できます。" },
              { title: "痛みの少ない方式を選ぶ", desc: "ポリリン酸ホワイトニングやセルフホワイトニングなど、痛みが少ない方式を選ぶのも有効な対策です。" },
              { title: "適切な間隔で施術する", desc: "短期間に集中して施術すると痛みが出やすくなります。歯科医師の指示に従い、適切な間隔を空けましょう。" },
              { title: "施術後のケアを徹底する", desc: "フッ素配合の歯磨き粉を使うなど、施術後のケアを行うことでエナメル質の回復を促進できます。" },
            ].map((item, i) => (
              <div key={i} className="bg-[#F0F9FF] rounded-xl p-5 border border-sky-100">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-[#F0F9FF]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            痛みに関する<span className="text-[#0EA5E9]">よくある質問</span>
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
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-500 mb-4">痛みの少ないサービスを探す</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#ranking"
              className="inline-block bg-[#0EA5E9] text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-[#0284C7] transition-colors shadow-lg shadow-sky-200"
            >
              ランキングを見る
            </Link>
            <Link
              href="/compare/self-vs-office/"
              className="inline-block bg-white text-[#0EA5E9] font-bold px-8 py-4 rounded-full text-lg border-2 border-[#0EA5E9] hover:bg-white transition-colors"
            >
              セルフ vs オフィス比較
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
