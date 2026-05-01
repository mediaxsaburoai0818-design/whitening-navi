import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ホワイトニングは何回で白くなる？方式別の効果と回数",
  description:
    "ホワイトニングで白くなるまでの回数を方式別に解説。オフィス・ホーム・セルフそれぞれの効果実感までの回数、持続期間、メンテナンス頻度をまとめました。",
};

const faqs = [
  {
    q: "ホワイトニングは1回で白くなりますか？",
    a: "オフィスホワイトニングの場合、1回の施術で白さの変化を実感できることが多いです。ただし、理想の白さに到達するには複数回の施術が必要な場合があります。セルフホワイトニングは1回での変化は小さく、3〜5回の継続が目安です。",
  },
  {
    q: "理想の白さになるまで何回通えばいいですか？",
    a: "元の歯の色と目標とする白さによりますが、オフィスホワイトニングで3〜5回、セルフホワイトニングで5〜10回が一般的な目安です。ホームホワイトニングは毎日2〜4週間の使用で効果を実感できます。",
  },
  {
    q: "ホワイトニングの効果はどのくらい持続しますか？",
    a: "オフィスホワイトニングは3〜6ヶ月、ホームホワイトニングは6ヶ月〜1年、デュアルホワイトニングは1年以上持続することがあります。セルフホワイトニングは1〜3ヶ月程度です。生活習慣（喫煙、コーヒーの摂取頻度など）によっても異なります。",
  },
  {
    q: "メンテナンスはどのくらいの頻度で必要ですか？",
    a: "白さを維持するためには、オフィスホワイトニングの場合3〜6ヶ月に1回、ホームホワイトニングの場合半年に1回程度のタッチアップが推奨されます。セルフホワイトニングは月1〜2回の定期利用が理想的です。",
  },
  {
    q: "回数を重ねるほど白くなりますか？",
    a: "ある程度まではそうですが、歯には限界があります。エナメル質の厚さや元の歯の色によって、到達できる白さには個人差があります。一般的にシェードガイドで数段階までの改善が目安で、それ以上は追加施術をしても大きな変化は見込めません。",
  },
  {
    q: "通院間隔はどのくらい空けるべきですか？",
    a: "オフィスホワイトニングの場合、1〜2週間の間隔を空けることが推奨されます。短期間に集中して施術すると知覚過敏のリスクが高まります。ホームホワイトニングは毎日〜隔日で継続して使用するのが一般的です。",
  },
];

export default function SessionsPage() {
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
          { name: "効果と回数" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#F0F9FF] to-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ホワイトニングは<span className="text-[#0EA5E9]">何回で白くなる？</span>
          </h1>
          <p className="text-gray-600 text-lg">
            方式ごとに効果を実感するまでの回数、持続期間、メンテナンス頻度を詳しく解説します。
          </p>
        </div>
      </section>

      {/* Summary Table */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            方式別の<span className="text-[#0EA5E9]">回数目安</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#F0F9FF]">
                  <th className="text-left p-4 border border-gray-200 font-bold text-gray-700">方式</th>
                  <th className="text-left p-4 border border-gray-200 font-bold text-gray-700">効果実感までの回数</th>
                  <th className="text-left p-4 border border-gray-200 font-bold text-gray-700">理想の白さまで</th>
                  <th className="text-left p-4 border border-gray-200 font-bold text-gray-700">効果の持続期間</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { method: "セルフホワイトニング", first: "3〜5回", ideal: "5〜10回", last: "1〜3ヶ月" },
                  { method: "オフィスホワイトニング", first: "1〜2回", ideal: "3〜5回", last: "3〜6ヶ月" },
                  { method: "ホームホワイトニング", first: "1〜2週間", ideal: "2〜4週間", last: "6ヶ月〜1年" },
                  { method: "デュアルホワイトニング", first: "1回+1週間", ideal: "2〜3回+2週間", last: "1年以上" },
                ].map((row) => (
                  <tr key={row.method} className="hover:bg-[#F0F9FF] transition-colors">
                    <td className="p-4 border border-gray-200 font-medium text-gray-900">{row.method}</td>
                    <td className="p-4 border border-gray-200 text-gray-700">{row.first}</td>
                    <td className="p-4 border border-gray-200 text-gray-700">{row.ideal}</td>
                    <td className="p-4 border border-gray-200 text-gray-700">{row.last}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">※ 個人差があります。元の歯の色・生活習慣・使用薬剤によって異なります。</p>
        </div>
      </section>

      {/* Each Method Detail */}
      <section className="py-12 bg-[#F0F9FF]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            方式別の<span className="text-[#0EA5E9]">詳細解説</span>
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">セルフホワイトニングの回数と効果</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                セルフホワイトニングは歯の表面の着色汚れを除去する方式のため、1回あたりの変化は緩やかです。多くの方が3〜5回の施術で「歯がきれいになった」と実感されています。理想的な白さを目指すなら5〜10回程度の継続がおすすめです。
              </p>
              <p className="text-gray-600 leading-relaxed">
                通院ペースは週1〜2回が効果的です。効果の持続は1〜3ヶ月程度のため、白さを維持するには月1〜2回の定期利用が推奨されます。サブスクリプションプランを活用すると、継続しやすくなります。
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">オフィスホワイトニングの回数と効果</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                オフィスホワイトニングは即効性が高く、1回の施術で目に見える白さの変化を実感できることが多いです。施術ではシェードガイドで2〜4段階程度の改善が一般的です。理想の白さには3〜5回の施術が目安で、1〜2週間の間隔を空けて通います。
              </p>
              <p className="text-gray-600 leading-relaxed">
                効果の持続は3〜6ヶ月程度です。喫煙やコーヒーの摂取が多い方は持続が短くなる傾向があります。半年に1回程度のメンテナンス施術で白さを維持できます。
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">ホームホワイトニングの回数と効果</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                ホームホワイトニングは低濃度の薬剤をじっくり浸透させるため、効果が出るまでに1〜2週間程度かかります。毎日〜隔日でマウスピースを2〜4時間装着し、2〜4週間継続して使用します。
              </p>
              <p className="text-gray-600 leading-relaxed">
                即効性では劣りますが、歯の内部までしっかり浸透するため持続期間が長く、6ヶ月〜1年程度白さが持続します。追加ジェルを購入すれば、同じマウスピースでタッチアップが可能なため、長期的にはコスパの良い方式です。
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">デュアルホワイトニングの回数と効果</h3>
              <p className="text-gray-600 leading-relaxed">
                デュアルホワイトニングはオフィスとホームの併用で、最も高い効果が期待できます。クリニックでオフィスホワイトニングを1〜2回行った後、自宅でホームホワイトニングを2〜4週間継続します。即効性と持続性を兼ね備え、効果は1年以上持続する場合もあります。理想の白さへの到達も早く、トータルの施術期間は1〜2ヶ月程度が目安です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Effect Factors */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            効果に影響する<span className="text-[#0EA5E9]">5つの要因</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "元の歯の色", desc: "歯が黄色みが強い方は白くなりやすい傾向がありますが、グレー系の変色は改善しにくい場合があります。" },
              { title: "エナメル質の厚さ", desc: "エナメル質が厚い方のほうが薬剤の効果が出やすく、白くなりやすい傾向があります。加齢とともにエナメル質は薄くなります。" },
              { title: "生活習慣", desc: "喫煙、コーヒー・紅茶の摂取頻度が高い方は効果の持続が短くなります。施術後のケアも重要です。" },
              { title: "使用する薬剤", desc: "過酸化水素の濃度が高いほど効果は高くなりますが、知覚過敏のリスクも上がります。クリニックによって使用する薬剤が異なります。" },
              { title: "年齢", desc: "若い方のほうが一般的に効果が出やすい傾向がありますが、どの年齢でもホワイトニングは可能です。" },
            ].map((item) => (
              <div key={item.title} className="bg-[#F0F9FF] rounded-xl p-5 border border-sky-100">
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
            回数・効果に関する<span className="text-[#0EA5E9]">よくある質問</span>
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
          <p className="text-gray-500 mb-4">自分に合ったサービスを見つける</p>
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
              費用相場を確認
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-[#F0F9FF]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-4">関連記事</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/knowledge/after-stop/" className="block bg-white rounded-xl p-4 border border-gray-100 hover:shadow-md transition-shadow">
              <p className="font-medium text-gray-900">ホワイトニングをやめたら戻る？</p>
              <p className="text-xs text-gray-500 mt-1">持続期間とメンテナンスの頻度</p>
            </Link>
            <Link href="/knowledge/no-effect/" className="block bg-white rounded-xl p-4 border border-gray-100 hover:shadow-md transition-shadow">
              <p className="font-medium text-gray-900">ホワイトニングの効果がない原因</p>
              <p className="text-xs text-gray-500 mt-1">回数を重ねても白くならない場合の対策</p>
            </Link>
            <Link href="/purpose/wedding/" className="block bg-white rounded-xl p-4 border border-gray-100 hover:shadow-md transition-shadow">
              <p className="font-medium text-gray-900">ブライダルホワイトニング完全ガイド</p>
              <p className="text-xs text-gray-500 mt-1">結婚式までの回数とスケジュール</p>
            </Link>
            <Link href="/compare/types/" className="block bg-white rounded-xl p-4 border border-gray-100 hover:shadow-md transition-shadow">
              <p className="font-medium text-gray-900">ホワイトニングの種類を比較</p>
              <p className="text-xs text-gray-500 mt-1">方式別の必要回数の違い</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
