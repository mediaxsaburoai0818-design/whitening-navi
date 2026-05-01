import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ホワイトニングで後悔する人の特徴と回避法【失敗しない選び方】",
  description:
    "ホワイトニングで後悔した人の口コミや体験談を分析。後悔しやすい5つのパターンと、失敗を避けるための具体的な対策・選び方を詳しく解説します。",
};

const faqs = [
  {
    q: "ホワイトニングで後悔する人はどのくらいいますか？",
    a: "正確な統計はありませんが、口コミサイトやSNSの分析では利用者の10〜15%程度が何らかの不満を感じているとされています。主な原因は「期待した効果が得られなかった」「痛みが予想以上だった」「費用が高かった」の3つです。",
  },
  {
    q: "ホワイトニングで白くなりすぎることはありますか？",
    a: "適切な施術回数であれば不自然に白くなりすぎることは稀です。ただし、短期間に過度な施術を繰り返すと一時的に不自然な白さになることがあります。カウンセリングで理想のシェードを伝え、段階的に白くしていくことが重要です。",
  },
  {
    q: "知覚過敏がひどくて後悔しています。どうすればいいですか？",
    a: "施術後の知覚過敏は通常24〜48時間で軽減します。知覚過敏用歯磨き粉（シュミテクトなど）を使用し、冷たい・熱い飲食物を控えてください。症状が3日以上続く場合は施術を受けたクリニックに相談してください。次回から薬剤の濃度を下げるか、セルフホワイトニングに切り替えることも検討しましょう。",
  },
  {
    q: "ホワイトニング後すぐに色が戻ってしまいました。なぜですか？",
    a: "施術直後に着色しやすい食品（コーヒー、赤ワイン、カレーなど）を摂取した可能性があります。施術後24〜48時間は歯が着色しやすい状態のため、食事制限を守ることが重要です。また、セルフホワイトニングの場合は漂白効果がないため、効果の持続が短い傾向にあります。",
  },
  {
    q: "高額なコースを契約して後悔しています。解約できますか？",
    a: "特定継続的役務提供に該当するホワイトニング契約は、クーリングオフ制度の対象となる場合があります。契約日から8日以内であれば無条件で解約可能です。それ以降でも中途解約が可能なケースがあるため、消費者センターに相談してください。",
  },
  {
    q: "ホワイトニングをやって良かったという人はどんな人ですか？",
    a: "事前に方式の違いや効果の限界を理解していた人、カウンセリングをしっかり受けた人、無理のない予算でコスパの良いサロンを選んだ人は満足度が高い傾向にあります。特にスターホワイトニングのような低価格のサービスで試してから、必要に応じてステップアップする方法がおすすめです。",
  },
];

export default function RegretPage() {
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
          { name: "後悔する人の特徴" },
        ]}
      />

      <section className="bg-gradient-to-b from-[#F0F9FF] to-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ホワイトニングで<span className="text-[#0EA5E9]">後悔する人の特徴</span>と回避法
          </h1>
          <p className="text-gray-600 text-lg">
            ホワイトニングで「やらなければよかった」と後悔しないために。失敗しやすいパターンを知り、正しい選び方で満足度の高い施術を受けましょう。
          </p>
        </div>
      </section>

      {/* Regret Patterns */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            後悔しやすい<span className="text-[#0EA5E9]">5つのパターン</span>
          </h2>
          <div className="space-y-4">
            {[
              {
                pattern: "効果を過度に期待していた",
                desc: "SNSや広告の「驚きの白さ」に影響され、1回の施術で劇的な変化を期待していたケース。実際には複数回の施術で徐々に白くなるのが一般的です。",
                prevention: "カウンセリングで現実的な効果の目安を確認し、必要回数と総費用を事前に把握する。",
              },
              {
                pattern: "方式の違いを理解せず選んだ",
                desc: "安さだけでセルフホワイトニングを選んだが、漂白効果がなく期待外れだったケース。逆に、高額なオフィスホワイトニングを選んだが軽度の着色にはオーバースペックだったケース。",
                prevention: "自分の歯の状態と目標に合った方式を選ぶ。まずは無料カウンセリングで相談する。",
              },
              {
                pattern: "痛みに対する準備不足",
                desc: "オフィスホワイトニングの知覚過敏について知らず、施術中・施術後の痛みに驚いたケース。元々知覚過敏がある方は特にリスクが高くなります。",
                prevention: "事前に知覚過敏用歯磨き粉で準備し、痛みが心配な場合はセルフ型やポリリン酸ホワイトニングを選ぶ。",
              },
              {
                pattern: "高額なコースの契約",
                desc: "初回体験後に勧められるまま高額なコース（10万円〜）を契約し、途中で通わなくなったケース。",
                prevention: "初回体験だけで即決せず、複数のサロンを比較検討する。都度払いのサービスから始める。",
              },
              {
                pattern: "施術後のケアを怠った",
                desc: "せっかく白くなった歯が短期間で色戻りし、「お金の無駄だった」と感じたケース。着色食品の制限やメンテナンスを怠ったことが原因。",
                prevention: "施術後24時間の食事制限を守り、定期的なメンテナンスとホワイトニング歯磨き粉で維持する。",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-bold text-gray-900 mb-2">パターン{i + 1}: {item.pattern}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.desc}</p>
                <div className="bg-[#F0F9FF] rounded-lg p-3">
                  <p className="text-sm text-[#0EA5E9] font-medium">回避法: {item.prevention}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Avoid */}
      <section className="py-12 bg-[#F0F9FF]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            後悔しないための<span className="text-[#0EA5E9]">チェックリスト</span>
          </h2>
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <div className="space-y-3">
              {[
                "自分の歯の変色原因を理解している（着色 or 歯自体の色）",
                "方式の違い（セルフ・オフィス・ホーム）を理解している",
                "理想の白さになるまでの回数と総費用を確認した",
                "痛みのリスクと対策について説明を受けた",
                "施術後の食事制限とメンテナンス方法を把握している",
                "複数のサロン・クリニックを比較検討した",
                "高額コースの即決は避け、まず都度払いで試した",
                "口コミや評判を確認した",
              ].map((item, i) => (
                <label key={i} className="flex items-start gap-3 text-sm text-gray-700 cursor-pointer">
                  <input type="checkbox" className="mt-0.5 w-4 h-4 accent-[#0EA5E9] shrink-0" />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Tips */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            満足度の高い<span className="text-[#0EA5E9]">始め方のステップ</span>
          </h2>
          <div className="space-y-4">
            {[
              { step: "Step 1", title: "まず安いサービスで試す", desc: "スターホワイトニング（1回2,750円〜）やセルフホワイトニングで、ホワイトニングの雰囲気と効果を体験しましょう。" },
              { step: "Step 2", title: "自分に合った方式を見極める", desc: "体験後、効果に満足できたか・痛みはどうだったかを振り返り、次のステップを決めましょう。" },
              { step: "Step 3", title: "必要に応じてステップアップ", desc: "より白くしたい場合はオフィスホワイトニングやデュアルホワイトニングに。満足できた場合はメンテナンスへ。" },
              { step: "Step 4", title: "継続的なメンテナンス", desc: "白さを維持するために、3〜6ヶ月に1回のタッチアップとホワイトニング歯磨き粉でのケアを続けましょう。" },
            ].map((item, i) => (
              <div key={i} className="bg-[#F0F9FF] rounded-xl p-5 border border-sky-100 flex gap-4">
                <span className="shrink-0 bg-[#0EA5E9] text-white text-xs font-bold px-3 py-1 rounded-full h-fit">{item.step}</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-[#F0F9FF]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            後悔に関する<span className="text-[#0EA5E9]">よくある質問</span>
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
          <p className="text-gray-500 mb-4">後悔しないホワイトニング選びを始める</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#ranking" className="inline-block bg-[#0EA5E9] text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-[#0284C7] transition-colors shadow-lg shadow-sky-200">
              ランキングを見る
            </Link>
            <Link href="/knowledge/how-to-choose/" className="inline-block bg-white text-[#0EA5E9] font-bold px-8 py-4 rounded-full text-lg border-2 border-[#0EA5E9] hover:bg-white transition-colors">
              選び方ガイドを読む
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#F0F9FF]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-4">関連記事</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/knowledge/no-effect/" className="block bg-white rounded-xl p-4 border border-gray-100 hover:shadow-md transition-shadow">
              <p className="font-medium text-gray-900">ホワイトニングの効果がない原因</p>
              <p className="text-xs text-gray-500 mt-1">効果が出ない場合の対処法</p>
            </Link>
            <Link href="/knowledge/pain/" className="block bg-white rounded-xl p-4 border border-gray-100 hover:shadow-md transition-shadow">
              <p className="font-medium text-gray-900">ホワイトニングの痛みと対策</p>
              <p className="text-xs text-gray-500 mt-1">痛みを軽減する方法を解説</p>
            </Link>
            <Link href="/compare/cost/" className="block bg-white rounded-xl p-4 border border-gray-100 hover:shadow-md transition-shadow">
              <p className="font-medium text-gray-900">ホワイトニングの料金相場と比較</p>
              <p className="text-xs text-gray-500 mt-1">無理のない予算設定のために</p>
            </Link>
            <Link href="/knowledge/after-stop/" className="block bg-white rounded-xl p-4 border border-gray-100 hover:shadow-md transition-shadow">
              <p className="font-medium text-gray-900">ホワイトニングをやめたら戻る？</p>
              <p className="text-xs text-gray-500 mt-1">持続期間とメンテナンス方法</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
