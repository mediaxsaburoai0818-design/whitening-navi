import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ホワイトニングの選び方ガイド【初心者向け5つのポイント】",
  description:
    "ホワイトニング初心者向けの選び方ガイド。方式・料金・痛み・効果・通いやすさの5つのポイントから、自分に合ったホワイトニングの選び方を解説します。",
};

const faqs = [
  {
    q: "初めてのホワイトニングはどこがおすすめですか？",
    a: "初めての方には、まずセルフホワイトニングかスターホワイトニングのような低価格のオフィスホワイトニングがおすすめです。セルフは痛みがなく安価で体験しやすく、スターホワイトニングは1回2,750円からオフィスホワイトニングを試せます。",
  },
  {
    q: "歯医者とサロン、どちらを選ぶべきですか？",
    a: "歯そのものの色を白くしたい場合は歯医者（オフィスホワイトニング）、表面の着色汚れを落としたい場合はサロン（セルフホワイトニング）が適しています。虫歯や歯周病が心配な方は、歯科検診も兼ねられる歯医者がおすすめです。",
  },
  {
    q: "ホワイトニング選びで失敗しないコツは？",
    a: "事前に複数のサービスを比較し、料金の総額（追加費用含む）を確認することが大切です。口コミも参考になりますが、効果には個人差があることを理解しておきましょう。初回体験プランがあるサービスで試してから継続を決めるのも良い方法です。",
  },
  {
    q: "ホワイトニングの予算はどのくらい見ておけばいいですか？",
    a: "初めての方は、まず1〜2万円の予算で試してみることをおすすめします。セルフホワイトニングなら3〜4回分、オフィスホワイトニングなら1〜2回分が目安です。理想の白さまで追求する場合は5〜10万円程度を想定しておくと安心です。",
  },
  {
    q: "自宅でできるホワイトニングは効果がありますか？",
    a: "歯科医院で処方されるホームホワイトニングは効果があります。市販のホワイトニング歯磨き粉やテープは、表面の汚れを落とす効果はありますが、歯科医院のホワイトニングほどの効果は期待できません。本格的に白くしたい場合は専門のサービスを利用しましょう。",
  },
  {
    q: "ホワイトニングを始める前にやるべきことは？",
    a: "歯科検診で虫歯や歯周病がないか確認することをおすすめします。問題がある場合は先に治療が必要です。また、施術前に歯科医師やサロンスタッフにアレルギーや持病について伝え、自分に適した方法かどうか確認しましょう。",
  },
];

export default function HowToChoosePage() {
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
          { name: "選び方ガイド" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#F0F9FF] to-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ホワイトニングの<span className="text-[#0EA5E9]">選び方ガイド</span>
          </h1>
          <p className="text-gray-600 text-lg">
            初心者向けに、ホワイトニングを選ぶ際の5つの重要ポイントをわかりやすく解説します。自分に合ったホワイトニングが見つかります。
          </p>
        </div>
      </section>

      {/* 5 Points */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            選び方の<span className="text-[#0EA5E9]">5つのポイント</span>
          </h2>
          <div className="space-y-8">
            {[
              {
                num: 1,
                title: "方式を決める",
                desc: "ホワイトニングにはセルフ・サロン・オフィス・ホーム・デュアルの5方式があります。歯そのものを白くしたいならオフィスまたはデュアル、表面の汚れを落としたいならセルフ・サロン、自宅でじっくり行いたいならホームが適しています。",
                tips: [
                  "気軽に始めたい → セルフホワイトニング",
                  "確実な効果を求める → オフィスホワイトニング",
                  "自分のペースで行いたい → ホームホワイトニング",
                  "最大の効果を求める → デュアルホワイトニング",
                ],
              },
              {
                num: 2,
                title: "予算を設定する",
                desc: "ホワイトニングは方式によって料金が大きく異なります。セルフは1回3,000〜8,000円、オフィスは1回10,000〜50,000円が相場です。初回は表示価格だけでなく、追加費用（カウンセリング料、クリーニング料など）を含めた総額を確認しましょう。",
                tips: [
                  "低予算（〜1万円） → セルフホワイトニング",
                  "中予算（1〜3万円） → オフィスホワイトニング（低価格帯）",
                  "高予算（3万円〜） → プレミアムオフィス or デュアル",
                ],
              },
              {
                num: 3,
                title: "痛みへの耐性を考慮する",
                desc: "ホワイトニングの痛みは方式によって異なります。セルフ・サロンはほぼ痛みがなく、オフィス・ホーム・デュアルは知覚過敏が起こる場合があります。痛みが不安な方はセルフから始めるか、ポリリン酸ホワイトニングなど痛みの少ない方式を選びましょう。",
                tips: [
                  "痛みが苦手 → セルフホワイトニング",
                  "多少の痛みはOK → ポリリン酸オフィスホワイトニング",
                  "痛みに強い → 通常のオフィスホワイトニング",
                ],
              },
              {
                num: 4,
                title: "求める効果を明確にする",
                desc: "「歯の黄ばみを取りたい」「真っ白にしたい」「芸能人のような白さにしたい」など、目標によって選ぶべき方式が変わります。コーヒーやタバコの着色を落としたいだけならセルフで十分ですが、歯の色そのものを変えたい場合はオフィスが必要です。",
                tips: [
                  "着色汚れを落としたい → セルフホワイトニング",
                  "自然な白さにしたい → オフィスホワイトニング（3〜5回）",
                  "最大限白くしたい → デュアルホワイトニング",
                ],
              },
              {
                num: 5,
                title: "通いやすさを確認する",
                desc: "ホワイトニングは1回で完結することは少なく、複数回の通院や定期的なメンテナンスが必要です。自宅や職場からのアクセス、営業時間、予約の取りやすさを確認しましょう。通いにくい場所を選ぶと継続が難しくなります。",
                tips: [
                  "駅チカの店舗を優先する",
                  "土日営業しているか確認する",
                  "Web予約ができるか確認する",
                  "ホームホワイトニングなら通院は最小限",
                ],
              },
            ].map((point) => (
              <div key={point.num} className="bg-[#F0F9FF] rounded-xl p-6 border border-sky-100">
                <div className="flex items-start gap-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#0EA5E9] text-white font-bold text-lg shrink-0">
                    {point.num}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{point.desc}</p>
                    <div className="bg-white rounded-lg p-4">
                      <ul className="space-y-2">
                        {point.tips.map((tip) => (
                          <li key={tip} className="flex items-start gap-2 text-sm text-gray-700">
                            <svg className="w-5 h-5 text-[#0EA5E9] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            選ぶ前の<span className="text-[#0EA5E9]">チェックリスト</span>
          </h2>
          <div className="bg-[#F0F9FF] rounded-xl p-6 border border-sky-100">
            <ul className="space-y-3">
              {[
                "虫歯や歯周病がないか確認した（歯科検診を受けた）",
                "自分の目標とする白さを明確にした",
                "予算を決めた（初回費用 + 継続費用）",
                "通いやすい立地のサービスをリストアップした",
                "料金の総額（追加費用含む）を確認した",
                "口コミやレビューを参考にした",
                "初回カウンセリングや体験プランの有無を確認した",
                "施術後の食事制限やケア方法を理解した",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="w-5 h-5 border-2 border-gray-300 rounded shrink-0 mt-0.5"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Step Flow */}
      <section className="py-12 bg-[#F0F9FF]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            初めてのホワイトニング<span className="text-[#0EA5E9]">ステップ</span>
          </h2>
          <div className="space-y-4">
            {[
              { step: "STEP 1", title: "歯科検診を受ける", desc: "虫歯や歯周病がないか確認。問題があれば先に治療します。" },
              { step: "STEP 2", title: "方式と予算を決める", desc: "この記事の5つのポイントを参考に、自分に合った方式を選びます。" },
              { step: "STEP 3", title: "サービスを比較する", desc: "当サイトのランキングや比較ページを参考に、複数のサービスを検討します。" },
              { step: "STEP 4", title: "カウンセリング・体験を受ける", desc: "初回カウンセリングや体験プランで実際の施術を試します。" },
              { step: "STEP 5", title: "継続して通う", desc: "理想の白さに向けて定期的に通院し、メンテナンスを続けます。" },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-xl p-5 border border-gray-100 flex items-start gap-4">
                <span className="text-[#0EA5E9] font-bold text-sm whitespace-nowrap mt-0.5">{item.step}</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
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
            選び方に関する<span className="text-[#0EA5E9]">よくある質問</span>
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
          <p className="text-gray-500 mb-4">サービスを比較して自分に合ったものを見つけましょう</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#ranking"
              className="inline-block bg-[#0EA5E9] text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-[#0284C7] transition-colors shadow-lg shadow-sky-200"
            >
              ランキングを見る
            </Link>
            <Link
              href="/compare/types/"
              className="inline-block bg-white text-[#0EA5E9] font-bold px-8 py-4 rounded-full text-lg border-2 border-[#0EA5E9] hover:bg-white transition-colors"
            >
              方式の違いを比較
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
