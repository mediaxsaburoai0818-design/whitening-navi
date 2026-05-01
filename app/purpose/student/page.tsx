import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "学生向けホワイトニング【安い・コスパで選ぶ2026年版】",
  description:
    "学生でも通えるお手頃なホワイトニングを紹介。学割プラン、月額1万円以下で続けられるサロン、大学生・高校生の注意点を詳しく解説します。",
};

const faqs = [
  {
    q: "学生でもホワイトニングを受けられますか？",
    a: "18歳以上であればほとんどのホワイトニングサロン・クリニックで施術を受けられます。高校生（18歳未満）の場合、セルフホワイトニングは利用可能ですが、オフィスホワイトニング（医療行為）は保護者の同意が必要なことが多いです。",
  },
  {
    q: "学生向けに安いホワイトニングはどこですか？",
    a: "スターホワイトニングが1回2,750円〜と最安級です。セルフホワイトニングのKiratt（1回4,980円〜）やホワイトニングバー（1回5,080円〜）も学生に人気です。月に1〜2回通っても5,000〜10,000円程度で収まります。",
  },
  {
    q: "ホワイトニングに学割はありますか？",
    a: "一部のサロン・クリニックでは学割プランを用意しています。ホワイトエッセンスは学生証提示で初回割引、一部のセルフホワイトニングサロンでは学生証提示で10〜20%OFFになるキャンペーンを随時実施しています。",
  },
  {
    q: "就活前にホワイトニングは効果的ですか？",
    a: "就活では第一印象が非常に重要です。清潔感のある白い歯は面接官に好印象を与えます。就活開始の1〜2ヶ月前からホワイトニングを始めると、面接時に自然な白さで臨めます。",
  },
  {
    q: "アルバイト代でもホワイトニングに通えますか？",
    a: "セルフホワイトニングなら月1〜2回の通院で月額5,000〜10,000円程度です。スターホワイトニングのオフィスホワイトニングでも月1回2,750円〜と、アルバイト代で十分に続けられる金額です。",
  },
  {
    q: "ホワイトニング歯磨き粉だけでも白くなりますか？",
    a: "市販のホワイトニング歯磨き粉は、日常的な着色汚れの除去には一定の効果がありますが、歯そのものの色を白くすることはできません。本格的に白くしたい場合は、サロンやクリニックでの施術が必要です。ただし、施術後のメンテナンスとしてホワイトニング歯磨き粉を併用するのは効果的です。",
  },
];

export default function StudentPage() {
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
          { name: "目的別" },
          { name: "学生向けホワイトニング" },
        ]}
      />

      <section className="bg-gradient-to-b from-[#F0F9FF] to-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-[#0EA5E9]">学生向け</span>ホワイトニング【安い・コスパで選ぶ】
          </h1>
          <p className="text-gray-600 text-lg">
            大学生・専門学生でも無理なく通えるホワイトニングを厳選。月1万円以下で始められるプラン、学割情報、就活前のホワイトニング戦略を解説します。
          </p>
        </div>
      </section>

      {/* Budget Guide */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            学生の<span className="text-[#0EA5E9]">予算別おすすめプラン</span>
          </h2>
          <div className="space-y-4">
            {[
              { budget: "月3,000円以下", plan: "ホワイトニング歯磨き粉 + 月1回セルフ", desc: "最もお手頃な組み合わせ。着色予防と軽度のトーンアップが期待できます。" },
              { budget: "月5,000〜8,000円", plan: "月1〜2回のセルフホワイトニング", desc: "KirattやホワイトニングバーなどのセルフサロンでLED照射。徐々に白くなります。" },
              { budget: "月10,000円前後", plan: "月1回のオフィスホワイトニング", desc: "スターホワイトニングなら月1回2,750円〜。歯科医院での本格施術でしっかり白く。" },
            ].map((item, i) => (
              <div key={i} className="bg-[#F0F9FF] rounded-xl p-5 border border-sky-100">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-[#0EA5E9] text-white text-xs font-bold px-3 py-1 rounded-full">{item.budget}</span>
                  <h3 className="font-bold text-gray-900">{item.plan}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended for Students */}
      <section className="py-12 bg-[#F0F9FF]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            学生に<span className="text-[#0EA5E9]">おすすめのサービス</span>
          </h2>
          <div className="space-y-4">
            {[
              { name: "スターホワイトニング", price: "1回2,750円〜", reason: "オフィスホワイトニング最安級。月1回でもアルバイト代で通える。", slug: "/review/star-whitening/" },
              { name: "Kiratt", price: "1回4,980円〜", reason: "完全個室セルフ型。友達と一緒に通う学生も多い。", slug: "/review/kiratt/" },
              { name: "ホワイトニングバー", price: "1回5,080円〜", reason: "予約不要で空き時間にサクッと施術。大学近くに店舗も。", slug: "/review/whitening-bar/" },
              { name: "ブランパ", price: "1回4,980円〜", reason: "通い放題プランがあり、回数を重ねたい学生に最適。", slug: "/review/branpa/" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-900">{item.name}</h3>
                  <span className="text-sm font-bold text-[#0EA5E9]">{item.price}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-2">{item.reason}</p>
                <Link href={item.slug} className="text-sm text-[#0EA5E9] font-medium hover:underline">
                  詳しいレビューを読む →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Hunting */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            就活前の<span className="text-[#0EA5E9]">ホワイトニング戦略</span>
          </h2>
          <div className="bg-[#F0F9FF] rounded-xl p-6 border border-sky-100">
            <p className="text-gray-600 leading-relaxed mb-4">
              就職活動では面接官に与える第一印象が合否を左右します。歯の白さは清潔感に直結するため、就活開始前のホワイトニングは有効な投資です。
            </p>
            <div className="space-y-3">
              {[
                { timing: "就活3ヶ月前", action: "ホワイトニング開始。月1〜2回のペースで通院。" },
                { timing: "就活1ヶ月前", action: "理想の白さに到達。メンテナンスに移行。" },
                { timing: "面接期間中", action: "月1回のメンテナンス施術で白さをキープ。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 text-sm">
                  <span className="shrink-0 bg-[#0EA5E9] text-white font-bold px-2 py-1 rounded text-xs">{item.timing}</span>
                  <p className="text-gray-700">{item.action}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Notes for Students */}
      <section className="py-12 bg-[#F0F9FF]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            学生がホワイトニングする際の<span className="text-[#0EA5E9]">注意点</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "18歳未満は制限あり", desc: "セルフホワイトニングは18歳未満でも利用可能な場合がありますが、オフィスホワイトニングは18歳以上が対象です。18歳未満は保護者の同意が必要です。" },
              { title: "無理な勧誘に注意", desc: "初回体験後に高額なコースを勧められることがあります。その場で契約せず、一度持ち帰って検討しましょう。クーリングオフ制度も活用できます。" },
              { title: "施術後の食事制限", desc: "オフィスホワイトニング後24時間は着色食品を避ける必要があります。カレーやコーヒーが好きな方は施術のタイミングに注意しましょう。" },
              { title: "継続がカギ", desc: "1回の施術で劇的に変わることは少なく、数回通ってこそ効果を実感できます。無理のない予算で継続できるプランを選びましょう。" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            学生のホワイトニングに関する<span className="text-[#0EA5E9]">よくある質問</span>
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

      <section className="py-12 bg-[#F0F9FF]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-500 mb-4">学生でも通えるホワイトニングを探す</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#ranking" className="inline-block bg-[#0EA5E9] text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-[#0284C7] transition-colors shadow-lg shadow-sky-200">
              ランキングを見る
            </Link>
            <Link href="/compare/cost/" className="inline-block bg-white text-[#0EA5E9] font-bold px-8 py-4 rounded-full text-lg border-2 border-[#0EA5E9] hover:bg-white transition-colors">
              料金比較を見る
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-4">関連記事</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/compare/cost/" className="block bg-[#F0F9FF] rounded-xl p-4 border border-sky-100 hover:shadow-md transition-shadow">
              <p className="font-medium text-gray-900">ホワイトニングの料金相場と比較</p>
              <p className="text-xs text-gray-500 mt-1">方式別の費用を徹底比較</p>
            </Link>
            <Link href="/knowledge/toothpaste/" className="block bg-[#F0F9FF] rounded-xl p-4 border border-sky-100 hover:shadow-md transition-shadow">
              <p className="font-medium text-gray-900">ホワイトニング歯磨き粉おすすめ5選</p>
              <p className="text-xs text-gray-500 mt-1">自宅で手軽にケアする方法</p>
            </Link>
            <Link href="/compare/self-vs-office/" className="block bg-[#F0F9FF] rounded-xl p-4 border border-sky-100 hover:shadow-md transition-shadow">
              <p className="font-medium text-gray-900">セルフ vs オフィス比較</p>
              <p className="text-xs text-gray-500 mt-1">学生にはどちらが向いている？</p>
            </Link>
            <Link href="/knowledge/regret/" className="block bg-[#F0F9FF] rounded-xl p-4 border border-sky-100 hover:shadow-md transition-shadow">
              <p className="font-medium text-gray-900">ホワイトニングで後悔する人の特徴</p>
              <p className="text-xs text-gray-500 mt-1">失敗しないための事前知識</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
