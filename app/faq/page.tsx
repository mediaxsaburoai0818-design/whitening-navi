import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ホワイトニングのよくある質問（FAQ）",
  description:
    "ホワイトニングに関するよくある質問をまとめました。効果の持続期間、痛み、料金相場、施術の種類、注意点など、ホワイトニングを始める前に知っておきたい情報を詳しく解説します。",
};

const faqCategories = [
  {
    title: "ホワイトニングの基礎知識",
    faqs: [
      {
        q: "ホワイトニングとは何ですか？",
        a: "ホワイトニングは、歯の色素を分解または除去して歯を白くする施術の総称です。大きく分けて、歯科医院で行うオフィスホワイトニング、自宅で行うホームホワイトニング、サロンで自分で行うセルフホワイトニングの3種類があります。",
      },
      {
        q: "オフィスホワイトニングとホームホワイトニングの違いは？",
        a: "オフィスホワイトニングは歯科医院で専門スタッフが高濃度の薬剤を使って施術します。1回で効果を実感しやすいのが特徴です。ホームホワイトニングは歯科医院で作成したマウスピースを使い、低濃度の薬剤を自宅で毎日使用します。じっくり白くなり、効果が長持ちしやすいのが特徴です。",
      },
      {
        q: "セルフホワイトニングとは何ですか？",
        a: "セルフホワイトニングは、専門サロンで自分自身で施術を行うホワイトニングです。医療行為ではないため、使用できる薬剤に制限がありますが、比較的安価で気軽に始められます。歯の表面の着色汚れを落とす効果が中心です。",
      },
      {
        q: "デュアルホワイトニングとは何ですか？",
        a: "デュアルホワイトニングは、オフィスホワイトニングとホームホワイトニングを組み合わせた方法です。オフィスで即効性のある施術を受けた後、ホームで維持・強化することで、より高い効果と持続性を実現できます。",
      },
    ],
  },
  {
    title: "効果と持続期間",
    faqs: [
      {
        q: "ホワイトニングの効果はどれくらい持続しますか？",
        a: "施術方法や生活習慣により異なりますが、一般的にオフィスホワイトニングで3〜6ヶ月、ホームホワイトニングで6ヶ月〜1年程度持続します。定期的なメンテナンスでより長く白さを保てます。コーヒーやワインなどの着色飲料を多く摂取する方は、効果の持続期間が短くなる傾向があります。",
      },
      {
        q: "何回通えば白くなりますか？",
        a: "オフィスホワイトニングは1〜3回で効果を実感する方が多いです。セルフホワイトニングは3〜5回程度の継続が目安です。元の歯の色や目標とする白さによって個人差があります。カウンセリングで歯科医師と相談し、適切な回数を決めましょう。",
      },
      {
        q: "ホワイトニングで歯はどのくらい白くなりますか？",
        a: "個人差がありますが、一般的にシェードガイドで2〜8段階程度白くなることが期待できます。元の歯の色や使用する薬剤の種類、施術回数によって結果は異なります。天然歯に近い自然な白さを目指すのが一般的です。",
      },
    ],
  },
  {
    title: "痛みとリスク",
    faqs: [
      {
        q: "ホワイトニングは痛いですか？",
        a: "個人差がありますが、施術中や施術後に一時的な知覚過敏が起こることがあります。特にオフィスホワイトニングでは高濃度の薬剤を使用するため、知覚過敏が出やすい傾向があります。ポリリン酸ホワイトニングなど痛みの少ない方法も選べますので、不安な方は事前にカウンセリングで相談しましょう。",
      },
      {
        q: "ホワイトニングで歯が傷むことはありますか？",
        a: "適切に行われたホワイトニングで歯の構造が損傷することは基本的にありません。ただし、頻度が多すぎたり、市販品を不適切に使用したりすると歯のエナメル質にダメージを与える可能性があります。必ず専門家の指導のもとで行いましょう。",
      },
      {
        q: "ホワイトニングができない人はいますか？",
        a: "妊娠中・授乳中の方、無カタラーゼ症の方、重度の歯周病がある方は施術できない場合があります。また、差し歯や詰め物などの人工歯はホワイトニングで白くすることができません。虫歯がある場合は、先に治療を完了させる必要があります。事前に歯科医師に相談しましょう。",
      },
    ],
  },
  {
    title: "料金と費用",
    faqs: [
      {
        q: "ホワイトニングの料金相場はいくらですか？",
        a: "オフィスホワイトニングは1回10,000〜50,000円、ホームホワイトニングは15,000〜40,000円（マウスピース代含む）、セルフホワイトニングは1回3,000〜8,000円が相場です。サービスによって大きく異なるため、複数のサービスを比較することが重要です。",
      },
      {
        q: "ホワイトニングに保険は適用されますか？",
        a: "ホワイトニングは審美目的の施術のため、健康保険は適用されません。全額自己負担となります。ただし、クリニックによっては医療費控除の対象となる場合がありますので、確認してみましょう。",
      },
      {
        q: "安いホワイトニングは効果がないのですか？",
        a: "価格が安いからといって必ずしも効果がないわけではありません。セルフホワイトニングは人件費を抑えることで低価格を実現しており、表面の着色除去には一定の効果があります。ただし、歯の内部の着色を白くする効果は、歯科医院のオフィスホワイトニングの方が高いです。",
      },
    ],
  },
  {
    title: "施術前後の注意点",
    faqs: [
      {
        q: "ホワイトニング後に注意すべきことは？",
        a: "施術後24〜48時間は着色しやすい食べ物（カレー、コーヒー、赤ワイン、ケチャップなど）を避けることが推奨されます。また、喫煙も着色の原因になるため控えましょう。施術後は歯の表面の保護膜（ペリクル）が一時的に除去されているため、着色しやすい状態になっています。",
      },
      {
        q: "ホワイトニング前にクリーニングは必要ですか？",
        a: "ホワイトニング前に歯のクリーニング（PMTC）を受けることをおすすめします。歯の表面の汚れや歯石を除去することで、ホワイトニング剤が歯に均一に浸透し、より効果的な結果が得られます。",
      },
      {
        q: "ホワイトニング中に食べてはいけないものは？",
        a: "ホワイトニング期間中は、カレー、ケチャップ、ソース、コーヒー、紅茶、赤ワイン、ベリー類、チョコレートなど着色性の強い飲食物を控えることが推奨されます。また、酸性の強い食品（柑橘類、炭酸飲料）も歯に影響を与える可能性があるため注意が必要です。",
      },
    ],
  },
];

const allFaqs = faqCategories.flatMap((cat) => cat.faqs);

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((faq) => ({
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
          { name: "よくある質問" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#F0F9FF] to-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            ホワイトニングの<span className="text-[#0EA5E9]">よくある質問</span>
          </h1>
          <p className="mt-4 text-gray-600">
            ホワイトニングを始める前に知っておきたい情報をまとめました
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      {faqCategories.map((category, catIdx) => (
        <section
          key={catIdx}
          className={catIdx % 2 === 0 ? "py-12 bg-white" : "py-12 bg-[#F0F9FF]"}
        >
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              <span className="text-[#0EA5E9]">{category.title}</span>
            </h2>
            <div className="space-y-4">
              {category.faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group bg-white rounded-xl border border-gray-200 overflow-hidden"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-5 text-left font-medium text-gray-900 hover:bg-[#F0F9FF] transition-colors">
                    <span className="flex items-center gap-3">
                      <span className="text-[#0EA5E9] font-bold text-sm">Q</span>
                      {faq.q}
                    </span>
                    <svg
                      className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
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
      ))}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-b from-white to-[#F0F9FF]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            自分に合ったホワイトニングを見つけよう
          </h2>
          <p className="text-gray-600 mb-8">
            各サービスの料金・口コミ・特徴を比較して、最適なホワイトニングを選びましょう
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-[#0EA5E9] text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-[#0284C7] transition-colors shadow-lg shadow-sky-200"
          >
            ランキングを見る
          </Link>
        </div>
      </section>
    </>
  );
}
