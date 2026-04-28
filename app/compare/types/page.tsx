import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ホワイトニングの種類を徹底比較【セルフ/サロン/オフィス/ホーム】",
  description:
    "ホワイトニングの種類をわかりやすく解説。セルフ・サロン・オフィス・ホーム・デュアルの5方式について、効果・料金・メリットデメリットを徹底比較します。",
};

const faqs = [
  {
    q: "ホワイトニングは全部で何種類ありますか？",
    a: "主にセルフホワイトニング、サロンホワイトニング、オフィスホワイトニング、ホームホワイトニング、デュアルホワイトニングの5種類があります。それぞれ施術場所・施術者・使用薬剤・効果が異なります。",
  },
  {
    q: "サロンホワイトニングとセルフホワイトニングの違いは？",
    a: "どちらも医療行為ではありませんが、サロンホワイトニングはスタッフがサポートしながら施術を行うスタイルが一般的です。セルフホワイトニングは完全に自分自身で施術を行います。使用する薬剤や効果は大きく変わりません。",
  },
  {
    q: "歯医者でやるホワイトニングと市販品の違いは？",
    a: "歯医者（オフィスホワイトニング）では過酸化水素などの医療用薬剤を使い、歯そのものを漂白できます。市販のホワイトニング歯磨き粉やテープは、歯の表面汚れを除去する効果が中心で、歯科医院ほどの効果は期待できません。",
  },
  {
    q: "最も効果が高いホワイトニングはどれですか？",
    a: "効果の高さではデュアルホワイトニング（オフィス+ホームの併用）が最も高いとされています。次いでオフィスホワイトニング単独、ホームホワイトニング単独の順です。セルフ・サロンホワイトニングは表面汚れの除去が中心です。",
  },
  {
    q: "自分に合った方式はどう選べばいいですか？",
    a: "予算・求める効果・痛みへの耐性・通える頻度で選ぶのがおすすめです。費用を抑えたいならセルフ、即効性を求めるならオフィス、持続性を求めるならホーム、両方を求めるならデュアルが適しています。",
  },
  {
    q: "複数の方式を組み合わせることはできますか？",
    a: "はい、組み合わせは可能です。デュアルホワイトニングはオフィスとホームの公式な組み合わせプランです。それ以外にも、オフィスで白くしてからセルフでメンテナンスするなど、柔軟な組み合わせ方ができます。",
  },
];

export default function TypesPage() {
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
          { name: "比較", href: "/#type" },
          { name: "ホワイトニングの種類" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#F0F9FF] to-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ホワイトニングの種類を<span className="text-[#0EA5E9]">徹底比較</span>
          </h1>
          <p className="text-gray-600 text-lg">
            セルフ・サロン・オフィス・ホーム・デュアルの5方式について、効果・料金・メリットデメリットをわかりやすく解説します。
          </p>
        </div>
      </section>

      {/* Overview Table */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            5つの方式を<span className="text-[#0EA5E9]">一覧比較</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#F0F9FF]">
                  <th className="text-left p-3 border border-gray-200 font-bold text-gray-700">方式</th>
                  <th className="text-left p-3 border border-gray-200 font-bold text-gray-700">施術場所</th>
                  <th className="text-left p-3 border border-gray-200 font-bold text-gray-700">料金目安</th>
                  <th className="text-left p-3 border border-gray-200 font-bold text-gray-700">効果</th>
                  <th className="text-left p-3 border border-gray-200 font-bold text-gray-700">痛み</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "セルフ", place: "専用サロン", price: "3,000〜8,000円", effect: "マイルド", pain: "ほぼなし" },
                  { type: "サロン", place: "専用サロン", price: "5,000〜15,000円", effect: "マイルド〜中程度", pain: "ほぼなし" },
                  { type: "オフィス", place: "歯科医院", price: "10,000〜50,000円", effect: "高い", pain: "やや感じる場合あり" },
                  { type: "ホーム", place: "自宅", price: "15,000〜40,000円", effect: "中〜高い", pain: "軽度の場合あり" },
                  { type: "デュアル", place: "歯科医院+自宅", price: "50,000〜100,000円", effect: "最も高い", pain: "やや感じる場合あり" },
                ].map((row) => (
                  <tr key={row.type} className="hover:bg-[#F0F9FF] transition-colors">
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{row.type}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{row.place}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{row.price}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{row.effect}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{row.pain}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Each Type Detail */}
      <section className="py-12 bg-[#F0F9FF]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            各方式の<span className="text-[#0EA5E9]">詳細解説</span>
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "セルフホワイトニング",
                desc: "専用サロンで自分自身が施術を行うスタイルです。酸化チタンやポリリン酸などの安全な薬剤を使い、LEDライトを照射して歯の表面のステイン（着色汚れ）を除去します。医療行為ではないため安価で、痛みもほとんどありません。歯本来の白さに戻すことが目的で、元の歯の色以上に白くすることは難しいです。",
                merit: ["1回3,000〜8,000円と安い", "痛みがほぼない", "施術時間が短い（約30分）", "気軽に始められる"],
                demerit: ["効果がマイルド", "複数回の通院が必要", "歯本来の白さ以上にはならない"],
              },
              {
                title: "サロンホワイトニング",
                desc: "ホワイトニング専門サロンでスタッフのサポートを受けながら施術を行います。セルフホワイトニングと使用する薬剤や仕組みは似ていますが、スタッフが手順をガイドしてくれるため、初めての方でも安心です。料金はセルフよりやや高めですが、丁寧なサービスを受けたい方に向いています。",
                merit: ["スタッフのサポートがある", "初心者でも安心", "痛みが少ない", "リラックスできる空間"],
                demerit: ["セルフより料金が高い", "効果はセルフと大差ない", "医療行為ではない"],
              },
              {
                title: "オフィスホワイトニング",
                desc: "歯科医院で歯科医師・歯科衛生士が施術する医療行為としてのホワイトニングです。過酸化水素や過酸化尿素などの医療用薬剤を使い、歯のエナメル質に浸透させて歯そのものの色を漂白します。1回で数段階の白さアップが期待でき、即効性が最大の魅力です。",
                merit: ["1回で効果を実感しやすい", "専門家による安全な施術", "短期間で結果が出る", "歯の健康チェックも可能"],
                demerit: ["料金が高い", "知覚過敏が出ることがある", "効果の持続が比較的短い"],
              },
              {
                title: "ホームホワイトニング",
                desc: "歯科医院で作製したマウスピースに専用のホワイトニングジェルを入れ、自宅で装着して行います。低濃度の過酸化尿素を使用するため、効果がゆっくり出ますが、歯の内部までしっかり浸透するため持続性が高いのが特徴です。自分のペースで行えるのも魅力です。",
                merit: ["効果が長持ちする", "自宅で好きな時間にできる", "追加ジェル代だけで継続可能", "痛みが比較的少ない"],
                demerit: ["効果が出るまで時間がかかる", "毎日の装着が必要", "マウスピース製作費がかかる"],
              },
              {
                title: "デュアルホワイトニング",
                desc: "オフィスホワイトニングとホームホワイトニングを組み合わせた方式です。クリニックでオフィスホワイトニングを行い、その後自宅でホームホワイトニングを継続します。即効性と持続性を兼ね備えた最も効果的な方法とされています。",
                merit: ["最も高い効果が期待できる", "即効性と持続性の両立", "白さを長期間維持できる", "セット料金でお得な場合も"],
                demerit: ["費用が最も高い", "通院と自宅ケアの両方が必要", "知覚過敏のリスクがある"],
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{item.desc}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-green-600 mb-2">メリット</h4>
                    <ul className="space-y-1">
                      {item.merit.map((m) => (
                        <li key={m} className="flex items-start gap-2 text-sm text-gray-700">
                          <svg className="w-4 h-4 text-green-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-red-500 mb-2">デメリット</h4>
                    <ul className="space-y-1">
                      {item.demerit.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm text-gray-700">
                          <svg className="w-4 h-4 text-red-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            ホワイトニングの種類に関する<span className="text-[#0EA5E9]">よくある質問</span>
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
          <p className="text-gray-500 mb-4">方式が決まったらサービスを比較</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#ranking"
              className="inline-block bg-[#0EA5E9] text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-[#0284C7] transition-colors shadow-lg shadow-sky-200"
            >
              ランキングを見る
            </Link>
            <Link
              href="/compare/cost/"
              className="inline-block bg-white text-[#0EA5E9] font-bold px-8 py-4 rounded-full text-lg border-2 border-[#0EA5E9] hover:bg-white transition-colors"
            >
              費用相場を見る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
