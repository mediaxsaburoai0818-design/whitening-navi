import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ホワイトニングの費用相場【2026年最新】方式別料金一覧",
  description:
    "ホワイトニングの費用相場を方式別に徹底解説。オフィス・ホーム・セルフ・デュアルの料金目安から、追加費用、安く受けるコツまで2026年最新情報をまとめました。",
};

const faqs = [
  {
    q: "ホワイトニングの平均費用はいくらですか？",
    a: "方式によって大きく異なります。セルフホワイトニングは1回3,000〜8,000円、オフィスホワイトニングは1回10,000〜50,000円、ホームホワイトニングはマウスピース製作費込みで15,000〜40,000円が相場です。",
  },
  {
    q: "ホワイトニングは保険適用されますか？",
    a: "ホワイトニングは審美目的の施術であるため、健康保険は適用されません。全額自己負担となります。ただし、医療費控除の対象になる場合もあるため、確定申告の際に確認してみてください。",
  },
  {
    q: "一番安いホワイトニングはどの方式ですか？",
    a: "1回あたりの料金が最も安いのはセルフホワイトニングで、1回3,000〜8,000円程度です。ただし、効果の出方や持続期間が異なるため、トータルコストで比較することをおすすめします。",
  },
  {
    q: "ホワイトニングの費用を抑えるコツはありますか？",
    a: "初回限定キャンペーンの活用、回数券やコースプランの利用、複数サービスの比較検討がおすすめです。また、ホームホワイトニングは追加ジェルの購入だけで継続できるため、長期的にはコスパが良くなる場合があります。",
  },
  {
    q: "追加費用がかかることはありますか？",
    a: "クリニックによっては、初回のカウンセリング料、クリーニング料、マウスピース製作費、追加照射料などが別途かかることがあります。事前に総額を確認し、追加料金の有無を確認しましょう。",
  },
  {
    q: "理想の白さになるまでの総費用はどのくらいですか？",
    a: "目標とする白さや元の歯の色によりますが、オフィスホワイトニングで3〜5回通う場合は30,000〜150,000円程度、セルフホワイトニングで5〜10回の場合は15,000〜80,000円程度が目安です。デュアルホワイトニングは50,000〜100,000円程度が一般的です。",
  },
];

export default function CostPage() {
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
          { name: "費用相場" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#F0F9FF] to-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ホワイトニングの費用相場<span className="text-[#0EA5E9]">【2026年最新】</span>
          </h1>
          <p className="text-gray-600 text-lg">
            方式別の料金目安から追加費用の内訳、費用を抑えるコツまで、ホワイトニングの費用に関する情報を網羅的に解説します。
          </p>
        </div>
      </section>

      {/* Price Overview */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            方式別<span className="text-[#0EA5E9]">料金一覧</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#F0F9FF]">
                  <th className="text-left p-4 border border-gray-200 font-bold text-gray-700">方式</th>
                  <th className="text-left p-4 border border-gray-200 font-bold text-gray-700">1回の料金</th>
                  <th className="text-left p-4 border border-gray-200 font-bold text-gray-700">理想までの総額目安</th>
                  <th className="text-left p-4 border border-gray-200 font-bold text-gray-700">通院回数目安</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { method: "セルフホワイトニング", once: "3,000〜8,000円", total: "15,000〜80,000円", visits: "5〜10回" },
                  { method: "オフィスホワイトニング", once: "10,000〜50,000円", total: "30,000〜150,000円", visits: "1〜5回" },
                  { method: "ホームホワイトニング", once: "15,000〜40,000円 (初回)", total: "20,000〜60,000円", visits: "2〜4週間使用" },
                  { method: "デュアルホワイトニング", once: "50,000〜100,000円 (セット)", total: "50,000〜120,000円", visits: "2〜3回+自宅" },
                ].map((row) => (
                  <tr key={row.method} className="hover:bg-[#F0F9FF] transition-colors">
                    <td className="p-4 border border-gray-200 font-medium text-gray-900">{row.method}</td>
                    <td className="p-4 border border-gray-200 text-gray-700">{row.once}</td>
                    <td className="p-4 border border-gray-200 text-gray-700">{row.total}</td>
                    <td className="p-4 border border-gray-200 text-gray-700">{row.visits}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">※ 料金は目安です。サービスや地域によって異なります。税込表示。</p>
        </div>
      </section>

      {/* Each Method Detail */}
      <section className="py-12 bg-[#F0F9FF]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            方式別の<span className="text-[#0EA5E9]">費用詳細</span>
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">セルフホワイトニングの費用</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                セルフホワイトニングは1回あたり3,000〜8,000円が相場で、全方式の中で最もリーズナブルです。多くのサロンでは回数券やサブスクリプションプランを用意しており、まとめ買いで1回あたりの料金をさらに抑えることができます。
              </p>
              <p className="text-gray-600 leading-relaxed">
                効果を実感するまでに3〜5回の施術が必要なため、トータルでは15,000〜40,000円程度を想定しておくと良いでしょう。定期的に通う場合は、月額5,000〜10,000円程度のサブスクプランがお得です。
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">オフィスホワイトニングの費用</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                オフィスホワイトニングは1回10,000〜50,000円と幅が広いです。料金の差はクリニックの立地、使用する薬剤の種類、照射回数などによって生じます。スターホワイトニングのように1回2,750円から受けられるサービスもあれば、1回50,000円を超えるプレミアムなクリニックもあります。
              </p>
              <p className="text-gray-600 leading-relaxed">
                1回で効果を実感できるため通院回数は少なくて済みますが、理想の白さを目指すなら3〜5回の施術が目安です。初回割引やコースプランを利用することで費用を抑えられます。
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">ホームホワイトニングの費用</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                ホームホワイトニングは、初回にマウスピースの製作費とホワイトニングジェルの費用で15,000〜40,000円程度かかります。2回目以降は追加ジェルの購入（1本2,000〜5,000円）のみで継続できるため、長期的にはコスパが良い方式です。
              </p>
              <p className="text-gray-600 leading-relaxed">
                自宅で毎日〜隔日で2〜4週間程度使用します。マウスピースは繰り返し使えるため、ランニングコストはジェル代のみです。
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">デュアルホワイトニングの費用</h3>
              <p className="text-gray-600 leading-relaxed">
                デュアルホワイトニングはオフィスとホームを組み合わせたプランで、セット価格で50,000〜100,000円程度が相場です。それぞれを単独で受けるよりもお得に設定されていることが多く、効果と持続性の両方を求める方に適しています。初期費用は高めですが、効果の持続期間が長いため、年間のトータルコストでは割安になるケースもあります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Saving Tips */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            費用を<span className="text-[#0EA5E9]">抑えるコツ</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "初回キャンペーンを活用", desc: "多くのクリニック・サロンが初回限定の割引価格を用意しています。複数のサービスを比較し、初回特典がお得なところを選びましょう。" },
              { title: "回数券・コースプランを利用", desc: "単発で通うよりも、回数券やコースプランを購入したほうが1回あたりの料金が安くなります。継続する予定がある場合はまとめ買いがお得です。" },
              { title: "ホームホワイトニングで維持", desc: "オフィスホワイトニングで白くした後、ホームホワイトニングで維持するハイブリッド運用がコスパ良好です。追加ジェル代のみで白さをキープできます。" },
              { title: "複数サービスを比較検討", desc: "同じオフィスホワイトニングでも、サービスによって料金は大きく異なります。当サイトのランキングを参考に、複数のサービスを比較してから決めましょう。" },
            ].map((tip) => (
              <div key={tip.title} className="bg-[#F0F9FF] rounded-xl p-5 border border-sky-100">
                <h3 className="font-bold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Costs */}
      <section className="py-12 bg-[#F0F9FF]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            注意すべき<span className="text-[#0EA5E9]">追加費用</span>
          </h2>
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <p className="text-gray-600 leading-relaxed mb-4">
              ホワイトニングの料金は表示価格だけでなく、以下のような追加費用が発生する場合があります。事前に総額を確認しておくことが重要です。
            </p>
            <div className="space-y-3">
              {[
                { label: "カウンセリング料", value: "無料〜3,000円（初回のみ）" },
                { label: "クリーニング料", value: "3,000〜5,000円（施術前に必要な場合）" },
                { label: "マウスピース製作費", value: "5,000〜15,000円（ホームの場合）" },
                { label: "追加照射料", value: "2,000〜5,000円/回（オフィスの場合）" },
                { label: "メンテナンス料", value: "3,000〜10,000円（定期的に）" },
                { label: "追加ジェル代", value: "2,000〜5,000円/本（ホームの場合）" },
              ].map((item) => (
                <div key={item.label} className="flex border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                  <span className="w-40 shrink-0 text-sm font-medium text-gray-500">{item.label}</span>
                  <span className="text-sm text-gray-900">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            費用に関する<span className="text-[#0EA5E9]">よくある質問</span>
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
          <p className="text-gray-500 mb-4">サービスごとの料金を比較してみましょう</p>
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
