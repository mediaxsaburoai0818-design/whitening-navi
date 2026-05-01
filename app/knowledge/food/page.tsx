import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ホワイトニング後の食事制限ガイド【何時間？何がNG？】",
  description:
    "ホワイトニング後に避けるべき食べ物・飲み物を詳しく解説。制限時間の目安、方式別の注意点、食べてOKな食品リストまでまとめました。",
};

const faqs = [
  {
    q: "ホワイトニング後、何時間食事を控えればいいですか？",
    a: "一般的には施術後24〜48時間の食事制限が推奨されています。特に施術直後の2〜3時間は飲食を避けるのがベストです。セルフホワイトニングの場合は1〜2時間程度と短めです。",
  },
  {
    q: "コーヒーはいつから飲んでも大丈夫ですか？",
    a: "オフィスホワイトニング後は最低24時間、できれば48時間は控えることをおすすめします。どうしても飲みたい場合はストローを使って歯に直接触れないようにし、飲んだ後すぐに水で口をゆすいでください。",
  },
  {
    q: "ホワイトニング後に食べてもいい食べ物は何ですか？",
    a: "白い食べ物や色の薄い食べ物がおすすめです。具体的には、白米、うどん、パン、鶏肉、白身魚、豆腐、ヨーグルト、牛乳、水、白ワインなどです。色素が少なく、酸性度の低い食品を選びましょう。",
  },
  {
    q: "セルフホワイトニングでも食事制限は必要ですか？",
    a: "セルフホワイトニングはオフィスホワイトニングと比べて食事制限が緩やかです。ただし、施術直後1〜2時間程度は着色しやすい飲食物を避けたほうが効果が長持ちします。",
  },
  {
    q: "タバコはいつから吸えますか？",
    a: "ホワイトニング後は最低24〜48時間は喫煙を控えてください。タバコのヤニ（タール）は強力な着色原因です。できればホワイトニングを機に禁煙・減煙を検討することをおすすめします。",
  },
  {
    q: "食事制限を守らないとどうなりますか？",
    a: "ホワイトニング直後の歯はペリクル（歯の表面の保護膜）が除去されており、色素を吸収しやすい状態です。食事制限を守らないと、着色性の高い飲食物の色素が歯に沈着し、ホワイトニングの効果が低減する可能性があります。",
  },
];

export default function FoodPage() {
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
          { name: "食事制限ガイド" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#F0F9FF] to-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ホワイトニング後の<span className="text-[#0EA5E9]">食事制限ガイド</span>
          </h1>
          <p className="text-gray-600 text-lg">
            ホワイトニング後に避けるべき食べ物・飲み物と、食べてOKな食品を具体的にまとめました。せっかくの白さを長持ちさせるために確認しておきましょう。
          </p>
        </div>
      </section>

      {/* Why Restriction */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            なぜ食事制限が<span className="text-[#0EA5E9]">必要なのか</span>
          </h2>
          <div className="bg-[#F0F9FF] rounded-xl p-6 border border-sky-100">
            <p className="text-gray-600 leading-relaxed mb-4">
              ホワイトニング施術後の歯は、表面のペリクル（保護膜）が一時的に除去された状態になっています。この状態では歯の表面が通常よりも色素を吸収しやすく、着色しやすくなっています。
            </p>
            <p className="text-gray-600 leading-relaxed">
              ペリクルが再形成されるまでには12〜48時間程度かかるため、この間に着色性の高い飲食物を摂取すると、色素が歯に沈着してホワイトニングの効果が低減してしまいます。せっかくの施術の効果を最大限に維持するために、一定期間の食事制限が推奨されています。
            </p>
          </div>
        </div>
      </section>

      {/* NG Foods */}
      <section className="py-12 bg-[#F0F9FF]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            <span className="text-red-500">避けるべき</span>食べ物・飲み物
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-red-100">
              <h3 className="text-lg font-bold text-red-500 mb-4">着色性が高い飲み物</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {["コーヒー", "紅茶・緑茶・ウーロン茶", "赤ワイン", "コーラなどの色付き炭酸飲料", "トマトジュース・野菜ジュース", "ぶどうジュース"].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-red-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 border border-red-100">
              <h3 className="text-lg font-bold text-red-500 mb-4">着色性が高い食べ物</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {["カレーライス", "トマトソースのパスタ", "キムチ", "醤油・ソース（大量使用）", "チョコレート", "ブルーベリーなどの濃い色の果物"].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-red-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 border border-red-100">
              <h3 className="text-lg font-bold text-red-500 mb-4">酸性度が高い食品</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {["レモン・グレープフルーツ", "酢の物・ドレッシング", "炭酸飲料全般", "ヨーグルト（酸味が強いもの）"].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-red-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 border border-red-100">
              <h3 className="text-lg font-bold text-red-500 mb-4">その他の注意事項</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {["タバコ（ヤニが着色原因）", "色付きリップクリーム・口紅", "うがい薬（色付きのもの）", "合成着色料を含む食品"].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-red-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OK Foods */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            <span className="text-green-600">食べてOK</span>な食品リスト
          </h2>
          <div className="bg-green-50 rounded-xl p-6 border border-green-100">
            <p className="text-gray-600 leading-relaxed mb-4">
              基本的に「白い食べ物」「色の薄い食べ物」を選ぶのがポイントです。以下の食品は施術後でも安心して食べられます。
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">主食</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  {["白米", "うどん", "食パン", "お粥"].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">おかず</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  {["鶏肉（塩味）", "白身魚", "豆腐", "卵料理", "大根・白菜"].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">飲み物</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  {["水", "牛乳", "白ワイン", "透明な炭酸水"].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 bg-[#F0F9FF]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            方式別の<span className="text-[#0EA5E9]">制限時間の目安</span>
          </h2>
          <div className="space-y-3">
            {[
              { method: "セルフホワイトニング", time: "施術後1〜2時間", note: "制限は緩やか。着色の強いものだけ避ける" },
              { method: "オフィスホワイトニング", time: "施術後24〜48時間", note: "特に最初の2〜3時間は飲食を控える" },
              { method: "ホームホワイトニング", time: "マウスピース除去後1〜2時間", note: "毎回の装着後に注意が必要" },
              { method: "デュアルホワイトニング", time: "オフィス施術後24〜48時間", note: "ホーム使用時は毎回1〜2時間" },
            ].map((item) => (
              <div key={item.method} className="bg-white rounded-xl p-5 border border-gray-100 flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                <span className="font-bold text-gray-900 md:w-48 shrink-0">{item.method}</span>
                <span className="text-[#0EA5E9] font-medium md:w-40 shrink-0">{item.time}</span>
                <span className="text-sm text-gray-600">{item.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            食事制限の<span className="text-[#0EA5E9]">よくある質問</span>
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
          <p className="text-gray-500 mb-4">ホワイトニングサービスを比較する</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#ranking"
              className="inline-block bg-[#0EA5E9] text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-[#0284C7] transition-colors shadow-lg shadow-sky-200"
            >
              ランキングを見る
            </Link>
            <Link
              href="/knowledge/pain/"
              className="inline-block bg-white text-[#0EA5E9] font-bold px-8 py-4 rounded-full text-lg border-2 border-[#0EA5E9] hover:bg-white transition-colors"
            >
              痛みについて知る
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-4">関連記事</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/knowledge/after-stop/" className="block bg-[#F0F9FF] rounded-xl p-4 border border-sky-100 hover:shadow-md transition-shadow">
              <p className="font-medium text-gray-900">ホワイトニングをやめたら戻る？</p>
              <p className="text-xs text-gray-500 mt-1">食事制限と色戻りの関係を解説</p>
            </Link>
            <Link href="/knowledge/toothpaste/" className="block bg-[#F0F9FF] rounded-xl p-4 border border-sky-100 hover:shadow-md transition-shadow">
              <p className="font-medium text-gray-900">ホワイトニング歯磨き粉おすすめ5選</p>
              <p className="text-xs text-gray-500 mt-1">自宅ケアで着色を防ぐ方法</p>
            </Link>
            <Link href="/purpose/wedding/" className="block bg-[#F0F9FF] rounded-xl p-4 border border-sky-100 hover:shadow-md transition-shadow">
              <p className="font-medium text-gray-900">ブライダルホワイトニング完全ガイド</p>
              <p className="text-xs text-gray-500 mt-1">結婚式前の食事管理のポイント</p>
            </Link>
            <Link href="/knowledge/regret/" className="block bg-[#F0F9FF] rounded-xl p-4 border border-sky-100 hover:shadow-md transition-shadow">
              <p className="font-medium text-gray-900">ホワイトニングで後悔する人の特徴</p>
              <p className="text-xs text-gray-500 mt-1">食事制限を知らずに後悔しないために</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
