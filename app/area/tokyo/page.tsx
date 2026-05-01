import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "東京でおすすめのホワイトニング8選【2026年最新】",
  description:
    "東京都内で人気のホワイトニングサロン・クリニック8院を厳選比較。新宿・銀座・渋谷・池袋エリア別に料金・口コミ・アクセスを詳しく解説します。",
};

const clinics = [
  {
    name: "スターホワイトニング 新宿院",
    area: "新宿",
    price: "1回2,750円〜",
    type: "オフィス",
    access: "JR新宿駅南口 徒歩3分",
    features: ["歯科医院提携で安心", "年間15万人の実績", "コスパNo.1"],
    slug: "/review/star-whitening/",
  },
  {
    name: "ホワイトエッセンス 銀座院",
    area: "銀座",
    price: "1回16,500円〜",
    type: "オフィス+ホーム",
    access: "東京メトロ銀座駅 徒歩2分",
    features: ["業界最大手", "症例100万件突破", "返金保証あり"],
    slug: "/review/white-essence/",
  },
  {
    name: "ミュゼホワイトニング 恵比寿院",
    area: "恵比寿",
    price: "1回11,000円〜",
    type: "オフィス",
    access: "JR恵比寿駅西口 徒歩5分",
    features: ["ポリリン酸で痛み軽減", "女性人気No.1", "リピート率が高い"],
    slug: "/review/musee-whitening/",
  },
  {
    name: "ホワイトニングバー 表参道店",
    area: "表参道",
    price: "1回5,080円〜",
    type: "セルフ",
    access: "表参道駅B1出口 徒歩2分",
    features: ["セルフ型で気軽", "予約不要・当日OK", "短時間施術"],
    slug: "/review/whitening-bar/",
  },
  {
    name: "Kiratt 池袋店",
    area: "池袋",
    price: "1回4,980円〜",
    type: "セルフ",
    access: "JR池袋駅東口 徒歩4分",
    features: ["完全個室", "最新LED照射", "リーズナブルな価格"],
    slug: "/review/kiratt/",
  },
  {
    name: "ホワイトニング東京 渋谷院",
    area: "渋谷",
    price: "1回31,900円",
    type: "オフィス",
    access: "JR渋谷駅ハチ公口 徒歩5分",
    features: ["1回で白さ実感", "最新Zoom技術", "短期集中型"],
    slug: "/review/whitening-tokyo/",
  },
  {
    name: "ブランパ 新橋院",
    area: "新橋",
    price: "1回4,980円〜",
    type: "セルフ",
    access: "JR新橋駅烏森口 徒歩3分",
    features: ["酸化チタン方式", "痛みゼロ", "通い放題プランあり"],
    slug: "/review/branpa/",
  },
  {
    name: "ティースアート 丸の内院",
    area: "丸の内",
    price: "1回16,500円〜",
    type: "オフィス",
    access: "東京駅丸の内南口 徒歩5分",
    features: ["ブライトホワイト導入", "色戻り保証", "老舗の信頼感"],
    slug: "/review/teeth-art/",
  },
];

const faqs = [
  {
    q: "東京で一番安いホワイトニングはどこですか？",
    a: "オフィスホワイトニングではスターホワイトニングが1回2,750円〜と最安級です。セルフホワイトニングではKirattが1回4,980円〜、ブランパが通い放題プランを提供しており、頻繁に通う方はコスパが良くなります。",
  },
  {
    q: "東京のホワイトニングの相場はいくらですか？",
    a: "セルフホワイトニングは1回3,000〜5,000円、オフィスホワイトニングは1回10,000〜30,000円、ホームホワイトニングは初回15,000〜30,000円が東京エリアの相場です。都心部でも郊外とほぼ同等の価格帯です。",
  },
  {
    q: "新宿でおすすめのホワイトニングはどこですか？",
    a: "新宿エリアではスターホワイトニング新宿院がコスパと実績の両面でおすすめです。JR新宿駅南口から徒歩3分とアクセスも良好で、1回2,750円から受けられます。本格的な効果を求める方はホワイトエッセンスの新宿院も選択肢に入ります。",
  },
  {
    q: "痛みが少ないホワイトニングは東京にありますか？",
    a: "ミュゼホワイトニングはポリリン酸を使用しており、従来のオフィスホワイトニングと比較して痛みが少ないと評判です。また、セルフホワイトニング（ホワイトニングバー、Kiratt、ブランパ）は医療用薬剤を使わないため、知覚過敏がほぼ起きません。",
  },
  {
    q: "東京のホワイトニングは予約なしでも行けますか？",
    a: "ホワイトニングバーは予約不要で当日施術が可能です。ただし、混雑時は待ち時間が発生するため、事前予約が推奨されます。オフィスホワイトニングのクリニックは基本的に予約制です。",
  },
  {
    q: "仕事帰りに通えるホワイトニングはありますか？",
    a: "東京都内の主要なホワイトニングサロン・クリニックは20時〜21時まで営業している店舗が多く、仕事帰りにも通えます。セルフホワイトニングは施術時間が30分程度と短いため、隙間時間での利用にも適しています。",
  },
];

export default function TokyoPage() {
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
          { name: "エリア別" },
          { name: "東京" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#F0F9FF] to-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            東京でおすすめの<span className="text-[#0EA5E9]">ホワイトニング8選</span>【2026年最新】
          </h1>
          <p className="text-gray-600 text-lg">
            新宿・銀座・渋谷・池袋など東京都内の人気ホワイトニングサロン・クリニックを厳選。料金・口コミ・アクセスを比較して、あなたに合った1院が見つかります。
          </p>
        </div>
      </section>

      {/* Area Map */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            エリア別の<span className="text-[#0EA5E9]">特徴</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { area: "新宿", note: "コスパ重視の激戦区" },
              { area: "銀座", note: "高品質クリニック集中" },
              { area: "渋谷", note: "若者向けサロン多数" },
              { area: "池袋", note: "セルフ型が充実" },
            ].map((item) => (
              <div key={item.area} className="bg-[#F0F9FF] rounded-xl p-4 text-center border border-sky-100">
                <p className="font-bold text-gray-900">{item.area}</p>
                <p className="text-xs text-gray-500 mt-1">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic List */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            東京のホワイトニング<span className="text-[#0EA5E9]">おすすめ8選</span>
          </h2>
          <div className="space-y-6">
            {clinics.map((clinic, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 bg-[#F0F9FF] px-5 py-3 border-b border-gray-100">
                  <span className="bg-[#0EA5E9] text-white text-sm font-bold px-3 py-1 rounded-full">{i + 1}位</span>
                  <h3 className="font-bold text-gray-900">{clinic.name}</h3>
                  <span className="ml-auto text-xs bg-white text-gray-600 px-2 py-1 rounded border border-gray-200">{clinic.type}</span>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                    <div>
                      <p className="text-gray-500">料金</p>
                      <p className="font-bold text-gray-900">{clinic.price}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">エリア</p>
                      <p className="font-bold text-gray-900">{clinic.area}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{clinic.access}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {clinic.features.map((f) => (
                      <span key={f} className="text-xs bg-sky-50 text-[#0EA5E9] px-2 py-1 rounded">{f}</span>
                    ))}
                  </div>
                  <Link href={clinic.slug} className="text-sm text-[#0EA5E9] font-medium hover:underline">
                    詳しいレビューを読む →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Choose */}
      <section className="py-12 bg-[#F0F9FF]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            東京でホワイトニングを<span className="text-[#0EA5E9]">選ぶポイント</span>
          </h2>
          <div className="space-y-4">
            {[
              { title: "通いやすさを最優先に", desc: "東京は交通の便が良い分、選択肢も豊富です。職場や自宅の最寄り駅から近い店舗を選ぶと、継続的な通院がしやすくなります。セルフホワイトニングは週1〜2回、オフィスホワイトニングは月1〜2回の通院が一般的です。" },
              { title: "方式と目的のマッチング", desc: "結婚式前など短期集中で白くしたい方はオフィスホワイトニング、日常的にケアしたい方はセルフホワイトニング、自宅でじっくり取り組みたい方はホームホワイトニングが向いています。" },
              { title: "料金体系の比較", desc: "初回料金だけでなく、理想の白さになるまでの総額で比較しましょう。オフィスホワイトニングは3〜5回の施術が一般的なので、1回あたりの料金と回数を掛けた金額がトータルコストです。" },
              { title: "口コミと実績の確認", desc: "Google口コミや各種レビューサイトで実際の利用者の声を確認しましょう。東京は利用者が多いため口コミも豊富で、サービスの質を事前に把握しやすいです。" },
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
            東京のホワイトニングに関する<span className="text-[#0EA5E9]">よくある質問</span>
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
          <p className="text-gray-500 mb-4">東京のホワイトニングをもっと詳しく比較</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#ranking"
              className="inline-block bg-[#0EA5E9] text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-[#0284C7] transition-colors shadow-lg shadow-sky-200"
            >
              全国ランキングを見る
            </Link>
            <Link
              href="/compare/cost/"
              className="inline-block bg-white text-[#0EA5E9] font-bold px-8 py-4 rounded-full text-lg border-2 border-[#0EA5E9] hover:bg-white transition-colors"
            >
              料金比較を見る
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-4">関連記事</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/area/yokohama/" className="block bg-[#F0F9FF] rounded-xl p-4 border border-sky-100 hover:shadow-md transition-shadow">
              <p className="font-medium text-gray-900">横浜でおすすめのホワイトニング5選</p>
              <p className="text-xs text-gray-500 mt-1">東京近郊で通いやすい横浜エリアの厳選サロン</p>
            </Link>
            <Link href="/compare/cost/" className="block bg-[#F0F9FF] rounded-xl p-4 border border-sky-100 hover:shadow-md transition-shadow">
              <p className="font-medium text-gray-900">ホワイトニングの料金相場と比較</p>
              <p className="text-xs text-gray-500 mt-1">方式別の料金体系を徹底解説</p>
            </Link>
            <Link href="/purpose/mens/" className="block bg-[#F0F9FF] rounded-xl p-4 border border-sky-100 hover:shadow-md transition-shadow">
              <p className="font-medium text-gray-900">メンズホワイトニングおすすめ</p>
              <p className="text-xs text-gray-500 mt-1">男性向けサロン・クリニックを厳選紹介</p>
            </Link>
            <Link href="/knowledge/how-to-choose/" className="block bg-[#F0F9FF] rounded-xl p-4 border border-sky-100 hover:shadow-md transition-shadow">
              <p className="font-medium text-gray-900">ホワイトニングの選び方ガイド</p>
              <p className="text-xs text-gray-500 mt-1">方式・料金・目的別の選び方を解説</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
