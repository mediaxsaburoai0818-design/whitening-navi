import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ホワイトニングの効果がない原因と対策【方式別に解説】",
  description:
    "ホワイトニングで効果を感じない原因を方式別に解説。テトラサイクリン歯、神経のない歯、差し歯など白くならないケースと、効果を最大化する方法を紹介します。",
};

const faqs = [
  {
    q: "ホワイトニングしたのに全然白くならないのですがなぜですか？",
    a: "効果を感じにくい原因はいくつか考えられます。セルフホワイトニングの場合は漂白成分を含まないため効果に限界があります。オフィスホワイトニングで効果が出にくい場合は、テトラサイクリン歯、神経を抜いた歯、詰め物・被せ物による変色など、ホワイトニングでは対応できないケースの可能性があります。",
  },
  {
    q: "テトラサイクリン歯はホワイトニングで白くなりますか？",
    a: "テトラサイクリン歯（抗生物質による変色）は、軽度であればオフィスホワイトニングやデュアルホワイトニングで改善できるケースがあります。ただし、重度の場合はホワイトニングだけでは十分な効果が得られず、ラミネートベニアなどの審美歯科治療が必要になることがあります。",
  },
  {
    q: "差し歯や被せ物はホワイトニングで白くなりますか？",
    a: "残念ながら、差し歯・被せ物・詰め物などの人工歯はホワイトニングでは白くなりません。天然歯のみ効果があります。人工歯の色が気になる場合は、ホワイトニング後に天然歯の色に合わせて作り直すことを歯科医師に相談してください。",
  },
  {
    q: "セルフホワイトニングに通っていますが効果がありません。なぜですか？",
    a: "セルフホワイトニングで使用する薬剤には漂白成分（過酸化水素）が含まれていないため、歯そのものの色を白くする効果はありません。表面の着色汚れを除去する効果はありますが、元の歯の色以上に白くすることはできません。本格的に白くしたい場合はオフィスホワイトニングを検討してください。",
  },
  {
    q: "何回通えば効果を実感できますか？",
    a: "オフィスホワイトニングの場合、1回目の施術で1〜3トーン程度の変化が見られることが多いです。理想の白さには3〜5回の施術が一般的です。セルフホワイトニングは5〜10回程度の継続で効果を実感する方が多いです。",
  },
  {
    q: "加齢による黄ばみはホワイトニングで改善できますか？",
    a: "はい、加齢による黄ばみ（象牙質の変色がエナメル質を通して透ける状態）はホワイトニングで改善可能です。特にオフィスホワイトニングやデュアルホワイトニングが効果的です。ただし、エナメル質が薄くなっている場合は知覚過敏に注意が必要です。",
  },
];

export default function NoEffectPage() {
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
          { name: "効果がない原因" },
        ]}
      />

      <section className="bg-gradient-to-b from-[#F0F9FF] to-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ホワイトニングの<span className="text-[#0EA5E9]">効果がない</span>原因と対策
          </h1>
          <p className="text-gray-600 text-lg">
            ホワイトニングに通っているのに白くならない、効果を感じないという方へ。考えられる原因と、効果を最大化するための対策を方式別に解説します。
          </p>
        </div>
      </section>

      {/* Causes */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            効果が出ない<span className="text-[#0EA5E9]">主な原因</span>
          </h2>
          <div className="space-y-4">
            {[
              { title: "方式の選択ミス", desc: "セルフホワイトニングには漂白効果がないため、歯そのものの色を変えたい場合はオフィスホワイトニングやホームホワイトニングが必要です。目的に合った方式を選ぶことが重要です。", solution: "オフィスまたはデュアルホワイトニングに切り替える" },
              { title: "施術回数が不十分", desc: "ホワイトニングは1回で劇的に変わるものではありません。期待した効果が出ていない場合、単純に回数が足りていない可能性があります。", solution: "3〜5回の施術を目安に継続する" },
              { title: "テトラサイクリン歯", desc: "幼少期に服用した抗生物質テトラサイクリンの影響で、歯が灰色〜茶色に変色している場合。通常のホワイトニングでは効果が限定的です。", solution: "歯科医師に相談し、デュアルホワイトニングまたは審美歯科を検討" },
              { title: "神経を抜いた歯（失活歯）", desc: "神経を抜いた歯は内側から変色するため、通常のホワイトニング（外側からの漂白）では効果がありません。", solution: "ウォーキングブリーチ（歯の内側からの漂白）を歯科医師に相談" },
              { title: "差し歯・被せ物・詰め物", desc: "人工歯はホワイトニング薬剤に反応しないため、白くすることができません。天然歯との色の差が目立つことがあります。", solution: "天然歯をホワイトニング後、人工歯を作り直す" },
              { title: "着色習慣の改善不足", desc: "施術後もコーヒー・紅茶・タバコなどの着色原因を続けていると、効果が打ち消されてしまいます。", solution: "施術後24時間の食事制限を守り、着色原因を減らす" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.desc}</p>
                <div className="bg-[#F0F9FF] rounded-lg p-3">
                  <p className="text-sm text-[#0EA5E9] font-medium">対策: {item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Effect by Method */}
      <section className="py-12 bg-[#F0F9FF]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            方式別の<span className="text-[#0EA5E9]">期待できる効果</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-white">
                  <th className="text-left p-4 border border-gray-200 font-bold text-gray-700">方式</th>
                  <th className="text-left p-4 border border-gray-200 font-bold text-gray-700">漂白効果</th>
                  <th className="text-left p-4 border border-gray-200 font-bold text-gray-700">着色除去</th>
                  <th className="text-left p-4 border border-gray-200 font-bold text-gray-700">効果実感の目安</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { method: "オフィスホワイトニング", bleach: "あり（強い）", stain: "あり", timing: "1〜2回目" },
                  { method: "ホームホワイトニング", bleach: "あり（穏やか）", stain: "あり", timing: "1〜2週間" },
                  { method: "デュアルホワイトニング", bleach: "あり（最も強い）", stain: "あり", timing: "1回目〜" },
                  { method: "セルフホワイトニング", bleach: "なし", stain: "あり", timing: "3〜5回" },
                  { method: "ホワイトニング歯磨き粉", bleach: "なし", stain: "あり（限定的）", timing: "2〜4週間" },
                ].map((row) => (
                  <tr key={row.method} className="hover:bg-white transition-colors">
                    <td className="p-4 border border-gray-200 font-medium text-gray-900">{row.method}</td>
                    <td className="p-4 border border-gray-200 text-gray-700">{row.bleach}</td>
                    <td className="p-4 border border-gray-200 text-gray-700">{row.stain}</td>
                    <td className="p-4 border border-gray-200 text-gray-700">{row.timing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Maximize Effect */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            効果を<span className="text-[#0EA5E9]">最大化する5つのポイント</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "事前のクリーニングを受ける", desc: "歯石や歯垢が付着した状態では薬剤が歯に浸透しにくくなります。施術前にPMTCを受けると効果が上がります。" },
              { title: "施術後の食事制限を守る", desc: "オフィスホワイトニング後24〜48時間は着色食品を避けましょう。この期間は歯が着色しやすい状態です。" },
              { title: "適切な回数を通う", desc: "1回で諦めず、3〜5回は施術を続けてください。回数を重ねるごとに白さが積み重なります。" },
              { title: "デュアルホワイトニングを検討", desc: "オフィスとホームの併用が最も効果的です。短期間で白くし、自宅でじっくり定着させます。" },
              { title: "施術前に歯科検診を受ける", desc: "虫歯や歯周病があると施術できない場合があります。事前の検診で口腔環境を整えましょう。" },
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
            効果に関する<span className="text-[#0EA5E9]">よくある質問</span>
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
          <p className="text-gray-500 mb-4">効果の高いサービスを選ぶ</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#ranking" className="inline-block bg-[#0EA5E9] text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-[#0284C7] transition-colors shadow-lg shadow-sky-200">
              ランキングを見る
            </Link>
            <Link href="/compare/types/" className="inline-block bg-white text-[#0EA5E9] font-bold px-8 py-4 rounded-full text-lg border-2 border-[#0EA5E9] hover:bg-white transition-colors">
              方式別に比較する
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#F0F9FF]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-4">関連記事</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/knowledge/regret/" className="block bg-white rounded-xl p-4 border border-gray-100 hover:shadow-md transition-shadow">
              <p className="font-medium text-gray-900">ホワイトニングで後悔する人の特徴</p>
              <p className="text-xs text-gray-500 mt-1">事前に知っておくべき注意点</p>
            </Link>
            <Link href="/compare/self-vs-office/" className="block bg-white rounded-xl p-4 border border-gray-100 hover:shadow-md transition-shadow">
              <p className="font-medium text-gray-900">セルフ vs オフィス比較</p>
              <p className="text-xs text-gray-500 mt-1">効果の違いを徹底比較</p>
            </Link>
            <Link href="/knowledge/sessions/" className="block bg-white rounded-xl p-4 border border-gray-100 hover:shadow-md transition-shadow">
              <p className="font-medium text-gray-900">ホワイトニングの回数と期間</p>
              <p className="text-xs text-gray-500 mt-1">何回通えば白くなるのか</p>
            </Link>
            <Link href="/knowledge/how-to-choose/" className="block bg-white rounded-xl p-4 border border-gray-100 hover:shadow-md transition-shadow">
              <p className="font-medium text-gray-900">ホワイトニングの選び方ガイド</p>
              <p className="text-xs text-gray-500 mt-1">目的に合った方式を見つける</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
