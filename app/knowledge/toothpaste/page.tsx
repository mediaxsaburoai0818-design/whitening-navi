import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ホワイトニング歯磨き粉おすすめ5選【自宅ケア2026年版】",
  description:
    "市販のホワイトニング歯磨き粉おすすめ5選を厳選紹介。有効成分の違い、効果の限界、サロン施術との併用方法を歯科知識に基づき解説します。",
};

const products = [
  {
    name: "アパガードプレミオ",
    maker: "サンギ",
    price: "約1,500円（100g）",
    ingredient: "ハイドロキシアパタイト",
    feature: "歯の表面のミクロの傷を埋めてなめらかにし、着色汚れが付きにくい歯にする。エナメル質の再石灰化を促進。",
  },
  {
    name: "ルシェロ ホワイト",
    maker: "GC（ジーシー）",
    price: "約2,000円（100g）",
    ingredient: "Lime粒子・PEG400",
    feature: "歯科医院専売品として信頼性が高い。弱アルカリ性で着色汚れを浮かせて落とす。低研磨で歯にやさしい。",
  },
  {
    name: "ブリリアントモア",
    maker: "ライオン",
    price: "約1,000円（90g）",
    ingredient: "ピロリン酸ナトリウム",
    feature: "ステインを歯の表面から浮き上がらせて除去。フッ素配合で虫歯予防も兼ねる。コスパの良さが特徴。",
  },
  {
    name: "コンクール クリーニングジェル",
    maker: "ウエルテック",
    price: "約1,600円（40g）",
    ingredient: "サンゴパウダー",
    feature: "週1〜2回のスペシャルケア用。研磨力が高いため毎日の使用は不向き。PMTCに近いクリーニング効果。",
  },
  {
    name: "シュミテクト トゥルーホワイト",
    maker: "GSK",
    price: "約800円（80g）",
    ingredient: "硝酸カリウム・STP",
    feature: "知覚過敏ケアとホワイトニングを両立。低研磨で歯がしみやすい方に最適。日常使いに適した穏やかな処方。",
  },
];

const faqs = [
  {
    q: "ホワイトニング歯磨き粉で歯は本当に白くなりますか？",
    a: "市販のホワイトニング歯磨き粉は、歯の表面に付着した着色汚れ（ステイン）を除去する効果はありますが、歯そのものの色（象牙質の色）を白くすることはできません。本格的に白くしたい場合はサロンやクリニックでの施術が必要です。",
  },
  {
    q: "研磨剤入りの歯磨き粉は歯を傷つけませんか？",
    a: "過度な研磨剤は歯のエナメル質を傷つける可能性があります。RDA値（研磨度）が150以下のものを選び、力を入れすぎないブラッシングを心がけましょう。アパガードプレミオのように研磨剤なしで着色ケアできる製品もあります。",
  },
  {
    q: "ホワイトニング歯磨き粉はどのくらい使い続けると効果がでますか？",
    a: "着色汚れの除去効果は2〜4週間程度の継続使用で実感できることが多いです。ただし、期待できるのはあくまでステイン除去による本来の歯の色への回復であり、元の歯以上に白くすることはできません。",
  },
  {
    q: "サロンのホワイトニングと歯磨き粉は併用できますか？",
    a: "併用は非常に効果的です。サロンやクリニックで白くした歯を、日常的なホワイトニング歯磨き粉でメンテナンスすることで、白さの持続期間を延ばせます。特にホワイトニング施術後のケアとして推奨されています。",
  },
  {
    q: "電動歯ブラシとホワイトニング歯磨き粉の組み合わせは大丈夫ですか？",
    a: "電動歯ブラシは手磨きより圧力が強いため、研磨剤が多い歯磨き粉との組み合わせには注意が必要です。低研磨タイプのホワイトニング歯磨き粉（アパガードプレミオ、シュミテクトトゥルーホワイトなど）なら電動歯ブラシとの併用も問題ありません。",
  },
  {
    q: "海外製のホワイトニング歯磨き粉は使っても大丈夫ですか？",
    a: "海外製品には日本では認可されていない高濃度の過酸化水素が含まれている場合があります。これらは歯や歯茎にダメージを与えるリスクがあるため、日本国内で販売されている製品を選ぶことをおすすめします。",
  },
];

export default function ToothpastePage() {
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
          { name: "ホワイトニング歯磨き粉" },
        ]}
      />

      <section className="bg-gradient-to-b from-[#F0F9FF] to-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ホワイトニング歯磨き粉<span className="text-[#0EA5E9]">おすすめ5選</span>【自宅ケア】
          </h1>
          <p className="text-gray-600 text-lg">
            自宅で手軽にできるホワイトニング歯磨き粉を厳選紹介。有効成分の違い、効果の限界を正しく理解して、日常のデンタルケアに取り入れましょう。
          </p>
        </div>
      </section>

      {/* Important Note */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <h2 className="font-bold text-gray-900 mb-2">ホワイトニング歯磨き粉の効果について</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              市販のホワイトニング歯磨き粉は「歯の表面の着色汚れを落とす」効果はありますが、「歯そのものを白くする（漂白する）」効果はありません。日本の法律上、市販の歯磨き粉には過酸化水素などの漂白成分を配合できないためです。本格的なホワイトニングにはサロンやクリニックでの施術が必要です。
            </p>
          </div>
        </div>
      </section>

      {/* Product List */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            おすすめホワイトニング歯磨き粉<span className="text-[#0EA5E9]">5選</span>
          </h2>
          <div className="space-y-6">
            {products.map((product, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 bg-[#F0F9FF] px-5 py-3 border-b border-gray-100">
                  <span className="bg-[#0EA5E9] text-white text-sm font-bold px-3 py-1 rounded-full">{i + 1}位</span>
                  <h3 className="font-bold text-gray-900">{product.name}</h3>
                  <span className="ml-auto text-xs text-gray-500">{product.maker}</span>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                    <div>
                      <p className="text-gray-500">参考価格</p>
                      <p className="font-bold text-gray-900">{product.price}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">主成分</p>
                      <p className="font-bold text-gray-900">{product.ingredient}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{product.feature}</p>
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
            ホワイトニング歯磨き粉の<span className="text-[#0EA5E9]">選び方</span>
          </h2>
          <div className="space-y-4">
            {[
              { title: "成分で選ぶ", desc: "ハイドロキシアパタイト（歯の修復）、ポリリン酸ナトリウム（着色除去）、ピロリン酸ナトリウム（ステイン分解）など、目的に合った成分を選びましょう。" },
              { title: "研磨度で選ぶ", desc: "研磨剤が強すぎると歯のエナメル質を傷つけます。RDA値150以下が目安。知覚過敏の方は低研磨タイプを選んでください。" },
              { title: "用途で選ぶ", desc: "毎日使うならマイルドなタイプ（アパガード、シュミテクト）、週1〜2回のスペシャルケアなら研磨力のあるタイプ（コンクール）がおすすめです。" },
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
            ホワイトニング歯磨き粉の<span className="text-[#0EA5E9]">よくある質問</span>
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
          <p className="text-gray-500 mb-4">本格的なホワイトニングも検討する</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#ranking" className="inline-block bg-[#0EA5E9] text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-[#0284C7] transition-colors shadow-lg shadow-sky-200">
              サロンランキングを見る
            </Link>
            <Link href="/compare/self-vs-office/" className="inline-block bg-white text-[#0EA5E9] font-bold px-8 py-4 rounded-full text-lg border-2 border-[#0EA5E9] hover:bg-white transition-colors">
              セルフ vs オフィス比較
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-4">関連記事</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/knowledge/after-stop/" className="block bg-[#F0F9FF] rounded-xl p-4 border border-sky-100 hover:shadow-md transition-shadow">
              <p className="font-medium text-gray-900">ホワイトニングをやめたら戻る？</p>
              <p className="text-xs text-gray-500 mt-1">歯磨き粉でメンテナンスする方法</p>
            </Link>
            <Link href="/knowledge/food/" className="block bg-[#F0F9FF] rounded-xl p-4 border border-sky-100 hover:shadow-md transition-shadow">
              <p className="font-medium text-gray-900">ホワイトニング後の食事制限</p>
              <p className="text-xs text-gray-500 mt-1">着色を防ぐ食事のポイント</p>
            </Link>
            <Link href="/purpose/student/" className="block bg-[#F0F9FF] rounded-xl p-4 border border-sky-100 hover:shadow-md transition-shadow">
              <p className="font-medium text-gray-900">学生向けホワイトニング</p>
              <p className="text-xs text-gray-500 mt-1">歯磨き粉から始める手軽なケア</p>
            </Link>
            <Link href="/compare/cost/" className="block bg-[#F0F9FF] rounded-xl p-4 border border-sky-100 hover:shadow-md transition-shadow">
              <p className="font-medium text-gray-900">ホワイトニングの料金相場と比較</p>
              <p className="text-xs text-gray-500 mt-1">歯磨き粉 vs サロン施術のコスト比較</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
