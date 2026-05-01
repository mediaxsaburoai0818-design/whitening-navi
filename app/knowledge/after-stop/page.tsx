import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ホワイトニングをやめたら戻る？【持続期間とメンテナンス】",
  description:
    "ホワイトニングの効果はいつまで持続するのか、やめたら元に戻るのかを方式別に解説。色戻りを防ぐメンテナンス方法と最適な通院頻度を紹介します。",
};

const faqs = [
  {
    q: "ホワイトニングをやめたら元の色に戻りますか？",
    a: "完全に元の色に戻ることは稀ですが、時間の経過とともに徐々に色が戻っていきます。オフィスホワイトニングの効果は3〜6ヶ月、ホームホワイトニングは6〜12ヶ月程度持続します。定期的なメンテナンスで白さを長期間キープできます。",
  },
  {
    q: "色戻りはどのくらいの期間で起こりますか？",
    a: "個人差はありますが、オフィスホワイトニングの場合、施術後1〜2週間で若干の色戻りが起こり、3〜6ヶ月で安定した色合いに落ち着きます。食生活や喫煙習慣によっても変わります。",
  },
  {
    q: "色戻りを防ぐにはどうすればいいですか？",
    a: "着色しやすい食品・飲料（コーヒー、赤ワイン、カレーなど）を控える、ホワイトニング効果のある歯磨き粉を使う、3〜6ヶ月に1回のタッチアップ施術を受けるのが効果的です。",
  },
  {
    q: "メンテナンスの頻度はどのくらいが理想ですか？",
    a: "一般的に3〜6ヶ月に1回のタッチアップ施術が推奨されます。喫煙者やコーヒーをよく飲む方は2〜3ヶ月に1回のペースがおすすめです。ホームホワイトニングのジェルを併用すると間隔を延ばせます。",
  },
  {
    q: "ホワイトニングを長年続けると歯に悪影響がありますか？",
    a: "適切な方法・頻度で行う限り、長期的な悪影響は報告されていません。ただし、短期間に過度な施術を繰り返すとエナメル質に負担がかかる可能性があるため、歯科医師の指示に従った頻度を守ることが重要です。",
  },
  {
    q: "自宅でできる色戻り防止のケアはありますか？",
    a: "ホワイトニング効果のある歯磨き粉の使用、食後すぐのうがい・歯磨き、ストローを使ってコーヒーを飲むなどの工夫が有効です。また、ホームホワイトニングのジェルを月1〜2回使用するメンテナンス方法もあります。",
  },
];

export default function AfterStopPage() {
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
          { name: "やめたら戻る？" },
        ]}
      />

      <section className="bg-gradient-to-b from-[#F0F9FF] to-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ホワイトニングを<span className="text-[#0EA5E9]">やめたら戻る？</span>持続期間とメンテナンス
          </h1>
          <p className="text-gray-600 text-lg">
            ホワイトニングの効果がどのくらい続くのか、やめた後の色戻りはどうなるのか。方式別の持続期間と、白さを長くキープするメンテナンス方法を解説します。
          </p>
        </div>
      </section>

      {/* Duration by Method */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            方式別の<span className="text-[#0EA5E9]">効果持続期間</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#F0F9FF]">
                  <th className="text-left p-4 border border-gray-200 font-bold text-gray-700">方式</th>
                  <th className="text-left p-4 border border-gray-200 font-bold text-gray-700">持続期間</th>
                  <th className="text-left p-4 border border-gray-200 font-bold text-gray-700">色戻りの速さ</th>
                  <th className="text-left p-4 border border-gray-200 font-bold text-gray-700">メンテナンス頻度</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { method: "オフィスホワイトニング", duration: "3〜6ヶ月", speed: "やや早い", maintenance: "3〜4ヶ月に1回" },
                  { method: "ホームホワイトニング", duration: "6〜12ヶ月", speed: "ゆっくり", maintenance: "6ヶ月に1回" },
                  { method: "デュアルホワイトニング", duration: "6〜12ヶ月", speed: "最も遅い", maintenance: "6ヶ月に1回" },
                  { method: "セルフホワイトニング", duration: "1〜3ヶ月", speed: "早い", maintenance: "月1〜2回" },
                ].map((row) => (
                  <tr key={row.method} className="hover:bg-[#F0F9FF] transition-colors">
                    <td className="p-4 border border-gray-200 font-medium text-gray-900">{row.method}</td>
                    <td className="p-4 border border-gray-200 text-gray-700">{row.duration}</td>
                    <td className="p-4 border border-gray-200 text-gray-700">{row.speed}</td>
                    <td className="p-4 border border-gray-200 text-gray-700">{row.maintenance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why color returns */}
      <section className="py-12 bg-[#F0F9FF]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            色戻りが起こる<span className="text-[#0EA5E9]">原因</span>
          </h2>
          <div className="space-y-4">
            {[
              { title: "日常的な着色", desc: "コーヒー、紅茶、赤ワイン、カレー、ソースなどの色素が歯の表面に沈着し、徐々に色が戻っていきます。喫煙も大きな着色原因の一つです。" },
              { title: "歯の再石灰化", desc: "ホワイトニングで脱灰したエナメル質が唾液中のミネラルで再石灰化する際に、若干色味が変わります。これは歯が健康に回復するプロセスの一部です。" },
              { title: "象牙質の色が透ける", desc: "加齢とともにエナメル質が薄くなり、黄色い象牙質の色が透けてきます。この自然な変化はホワイトニングでリセットできますが、やめると再び進行します。" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Tips */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            白さをキープする<span className="text-[#0EA5E9]">7つのメンテナンス法</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "ホワイトニング歯磨き粉を使う", desc: "研磨剤入りではなく、ポリリン酸ナトリウムやハイドロキシアパタイト配合の歯磨き粉で日常的にケアしましょう。" },
              { title: "着色食品の後はすぐうがい", desc: "コーヒーやカレーを食べた後、すぐに水でうがいするだけでも着色の沈着を防げます。" },
              { title: "ストローを活用する", desc: "コーヒーや紅茶をストローで飲むと、歯の表面への着色を軽減できます。" },
              { title: "定期的なクリーニング", desc: "歯科医院で3〜6ヶ月に1回のPMTC（プロフェッショナルクリーニング）を受けると表面の着色を除去できます。" },
              { title: "タッチアップ施術を受ける", desc: "3〜6ヶ月に1回の軽いホワイトニング（タッチアップ）で白さを維持。初回ほどの回数は不要です。" },
              { title: "禁煙を検討する", desc: "タバコのタール・ニコチンは最も歯を着色させる原因の一つ。禁煙はホワイトニングの維持に最も効果的です。" },
              { title: "ホームホワイトニングを併用", desc: "オフィスホワイトニング後にホームホワイトニングのジェルで月1〜2回メンテナンスすると、通院頻度を減らせます。" },
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
            持続期間に関する<span className="text-[#0EA5E9]">よくある質問</span>
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
          <p className="text-gray-500 mb-4">メンテナンスしやすいサービスを探す</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#ranking" className="inline-block bg-[#0EA5E9] text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-[#0284C7] transition-colors shadow-lg shadow-sky-200">
              ランキングを見る
            </Link>
            <Link href="/compare/types/" className="inline-block bg-white text-[#0EA5E9] font-bold px-8 py-4 rounded-full text-lg border-2 border-[#0EA5E9] hover:bg-white transition-colors">
              方式を比較する
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
              <p className="text-xs text-gray-500 mt-1">自宅メンテナンスに最適な歯磨き粉</p>
            </Link>
            <Link href="/knowledge/food/" className="block bg-white rounded-xl p-4 border border-gray-100 hover:shadow-md transition-shadow">
              <p className="font-medium text-gray-900">ホワイトニング後の食事制限</p>
              <p className="text-xs text-gray-500 mt-1">避けるべき食品と食べていいもの</p>
            </Link>
            <Link href="/knowledge/sessions/" className="block bg-white rounded-xl p-4 border border-gray-100 hover:shadow-md transition-shadow">
              <p className="font-medium text-gray-900">ホワイトニングの回数と期間</p>
              <p className="text-xs text-gray-500 mt-1">何回通えば白くなるのか解説</p>
            </Link>
            <Link href="/compare/cost/" className="block bg-white rounded-xl p-4 border border-gray-100 hover:shadow-md transition-shadow">
              <p className="font-medium text-gray-900">ホワイトニングの料金相場と比較</p>
              <p className="text-xs text-gray-500 mt-1">メンテナンス費用も含めた総額比較</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
