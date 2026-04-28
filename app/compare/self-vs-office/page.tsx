import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "セルフホワイトニング vs オフィスホワイトニング【徹底比較】",
  description:
    "セルフホワイトニングとオフィスホワイトニングの違いを徹底比較。料金・効果・痛み・持続期間・施術者の違いをわかりやすく解説。あなたに合った方式が見つかります。",
};

const faqs = [
  {
    q: "セルフホワイトニングとオフィスホワイトニングの一番の違いは何ですか？",
    a: "最大の違いは使用する薬剤と施術者です。オフィスホワイトニングは歯科医師・歯科衛生士が過酸化水素などの医療用薬剤を使って歯そのものを漂白します。セルフホワイトニングは医療行為ではないため、自分自身でポリリン酸や酸化チタンなどを使い、歯の表面の着色汚れを除去します。",
  },
  {
    q: "効果が高いのはどちらですか？",
    a: "歯そのものの色を白くする効果はオフィスホワイトニングのほうが高いです。1回の施術で数段階の白さアップが期待できます。セルフホワイトニングは歯の表面の汚れを落として本来の白さに戻す効果が中心で、元の歯の色以上に白くすることは難しいです。",
  },
  {
    q: "痛みが少ないのはどちらですか？",
    a: "セルフホワイトニングのほうが痛みは少ないです。医療用の過酸化水素を使用しないため、知覚過敏がほとんど起こりません。オフィスホワイトニングは高濃度の薬剤を使うため、施術中や施術後に一時的な知覚過敏が起こることがあります。",
  },
  {
    q: "どちらがコスパが良いですか？",
    a: "1回あたりの料金はセルフホワイトニング（3,000〜8,000円）のほうが安いです。ただし、効果の出方が異なるため、目的に応じて判断する必要があります。歯の表面の汚れ除去が目的ならセルフ、歯そのものを白くしたいならオフィスのほうが結果的にコスパが良くなることもあります。",
  },
  {
    q: "セルフホワイトニングとオフィスホワイトニングを併用できますか？",
    a: "併用は可能です。オフィスホワイトニングで白くした歯を、セルフホワイトニングで定期的にメンテナンスするという使い方をされる方もいます。ただし、オフィスホワイトニング直後は歯が敏感になっているため、少し期間を空けることをおすすめします。",
  },
  {
    q: "初めてのホワイトニングにはどちらがおすすめですか？",
    a: "予算を抑えて気軽に始めたい方にはセルフホワイトニングがおすすめです。確実な効果を求める方や、歯の健康チェックも兼ねたい方にはオフィスホワイトニングがおすすめです。不安がある場合は、まずセルフで体験してからオフィスに移行する方法もあります。",
  },
];

export default function SelfVsOfficePage() {
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
          { name: "セルフ vs オフィス" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#F0F9FF] to-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            セルフホワイトニング vs オフィスホワイトニング<span className="text-[#0EA5E9]">【徹底比較】</span>
          </h1>
          <p className="text-gray-600 text-lg">
            セルフホワイトニングとオフィスホワイトニングの違いを、料金・効果・痛み・持続期間など7つの観点から比較します。
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            <span className="text-[#0EA5E9]">比較表</span>で違いを確認
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#F0F9FF]">
                  <th className="text-left p-4 border border-gray-200 font-bold text-gray-700">比較項目</th>
                  <th className="text-left p-4 border border-gray-200 font-bold text-gray-700">セルフホワイトニング</th>
                  <th className="text-left p-4 border border-gray-200 font-bold text-gray-700">オフィスホワイトニング</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { item: "料金相場", self: "1回3,000〜8,000円", office: "1回10,000〜50,000円" },
                  { item: "効果", self: "表面の着色除去（歯本来の白さに）", office: "歯そのものを漂白（数段階アップ）" },
                  { item: "即効性", self: "3〜5回で実感", office: "1回で実感しやすい" },
                  { item: "持続期間", self: "1〜3ヶ月程度", office: "3〜6ヶ月程度" },
                  { item: "痛み", self: "ほぼなし", office: "知覚過敏が出ることがある" },
                  { item: "施術者", self: "自分自身", office: "歯科医師・歯科衛生士" },
                  { item: "施術時間", self: "約30分", office: "約60〜90分" },
                  { item: "使用薬剤", self: "ポリリン酸・酸化チタンなど", office: "過酸化水素・過酸化尿素" },
                ].map((row) => (
                  <tr key={row.item} className="hover:bg-[#F0F9FF] transition-colors">
                    <td className="p-4 border border-gray-200 font-medium text-gray-900">{row.item}</td>
                    <td className="p-4 border border-gray-200 text-gray-700">{row.self}</td>
                    <td className="p-4 border border-gray-200 text-gray-700">{row.office}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Detail Sections */}
      <section className="py-12 bg-[#F0F9FF]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            それぞれの<span className="text-[#0EA5E9]">特徴</span>を詳しく解説
          </h2>

          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">セルフホワイトニングの特徴</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                セルフホワイトニングは、専用サロンで自分自身が施術を行うスタイルのホワイトニングです。医療行為に該当しないため、歯科医師免許がなくても提供できるサービスです。使用する薬剤は酸化チタンやポリリン酸などの安全性の高い成分で、歯の表面に付着したステイン（着色汚れ）を浮き上がらせて除去します。
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                料金は1回3,000〜8,000円程度とリーズナブルで、施術時間も約30分と短いため、仕事の合間や休日に気軽に通えます。痛みがほとんどないのも大きなメリットで、知覚過敏が心配な方にも安心です。
              </p>
              <p className="text-gray-600 leading-relaxed">
                一方で、歯そのものの色を変えることはできないため、効果はオフィスホワイトニングと比べるとマイルドです。コーヒーやタバコによる着色が気になる方、定期的にメンテナンスしたい方に向いています。
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">オフィスホワイトニングの特徴</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                オフィスホワイトニングは、歯科医院で歯科医師・歯科衛生士が行う医療行為としてのホワイトニングです。過酸化水素や過酸化尿素などの医療用薬剤を使い、歯のエナメル質に浸透させて歯そのものの色を白くします。
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                最大のメリットは効果の高さと即効性です。1回の施術で目に見える白さの変化を実感できることが多く、短期間で結果を出したい方に適しています。施術は専門家が行うため、歯の健康状態のチェックも同時に受けられる安心感があります。
              </p>
              <p className="text-gray-600 leading-relaxed">
                デメリットとしては、料金が1回10,000〜50,000円と高めであること、施術中や施術後に知覚過敏が起こる可能性があることが挙げられます。ただし、痛みは一時的なもので、通常は数時間〜1日程度で落ち着きます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Choose */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            あなたに合うのは<span className="text-[#0EA5E9]">どっち？</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#F0F9FF] rounded-xl p-6 border border-sky-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">セルフホワイトニングが向いている方</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                {[
                  "予算を抑えたい方（1回5,000円前後）",
                  "痛みが心配な方・知覚過敏になりやすい方",
                  "コーヒーやタバコの着色を落としたい方",
                  "短時間で気軽に施術したい方",
                  "定期的にメンテナンスしたい方",
                  "初めてホワイトニングを試す方",
                ].map((text) => (
                  <li key={text} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#0EA5E9] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#F0F9FF] rounded-xl p-6 border border-sky-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">オフィスホワイトニングが向いている方</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                {[
                  "1回で確実な効果を実感したい方",
                  "歯そのものの色を白くしたい方",
                  "結婚式や面接など大事なイベント前の方",
                  "専門家に施術してほしい方",
                  "歯の健康チェックも兼ねたい方",
                  "短期間で結果を出したい方",
                ].map((text) => (
                  <li key={text} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#0EA5E9] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-[#F0F9FF]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            セルフ vs オフィスの<span className="text-[#0EA5E9]">よくある質問</span>
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
          <p className="text-gray-500 mb-4">各サービスの詳細レビューもチェック</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#ranking"
              className="inline-block bg-[#0EA5E9] text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-[#0284C7] transition-colors shadow-lg shadow-sky-200"
            >
              ランキングを見る
            </Link>
            <Link
              href="/compare/types/"
              className="inline-block bg-white text-[#0EA5E9] font-bold px-8 py-4 rounded-full text-lg border-2 border-[#0EA5E9] hover:bg-[#F0F9FF] transition-colors"
            >
              全方式の比較を見る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
