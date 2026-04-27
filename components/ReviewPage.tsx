import Link from "next/link";
import Breadcrumb from "./Breadcrumb";

type ReviewData = {
  name: string;
  slug: string;
  price: string;
  type: string;
  highlight: string;
  description: string;
  overview: string;
  pros: string[];
  cons: string[];
  details: { label: string; value: string }[];
  faqs: { q: string; a: string }[];
  recommendation: string;
};

export default function ReviewPage({ data }: { data: ReviewData }) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
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
          { name: "レビュー", href: "/#ranking" },
          { name: data.name },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#F0F9FF] to-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-[#0EA5E9] text-white text-xs font-bold px-3 py-1 rounded-full">
              {data.type}
            </span>
            <span className="text-sm text-gray-500">{data.highlight}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{data.name}</h1>
          <p className="text-gray-600 text-lg">{data.description}</p>
          <div className="mt-6 flex items-center gap-4">
            <span className="text-3xl font-bold text-[#0EA5E9]">{data.price}</span>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {data.name}の<span className="text-[#0EA5E9]">特徴</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">{data.overview}</p>

          {/* Details Table */}
          <div className="bg-[#F0F9FF] rounded-xl p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">基本情報</h3>
            <div className="space-y-3">
              {data.details.map((d) => (
                <div key={d.label} className="flex border-b border-sky-100 pb-3 last:border-0 last:pb-0">
                  <span className="w-32 shrink-0 text-sm font-medium text-gray-500">{d.label}</span>
                  <span className="text-sm text-gray-900">{d.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pros & Cons */}
      <section className="py-12 bg-[#F0F9FF]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            メリット・<span className="text-[#0EA5E9]">デメリット</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-green-100">
              <h3 className="text-lg font-bold text-green-600 mb-4">メリット</h3>
              <ul className="space-y-3">
                {data.pros.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 border border-red-100">
              <h3 className="text-lg font-bold text-red-500 mb-4">デメリット</h3>
              <ul className="space-y-3">
                {data.cons.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-5 h-5 text-red-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendation */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            こんな人に<span className="text-[#0EA5E9]">おすすめ</span>
          </h2>
          <div className="bg-gradient-to-r from-[#F0F9FF] to-white rounded-xl p-6 border border-sky-100">
            <p className="text-gray-700 leading-relaxed">{data.recommendation}</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-[#F0F9FF]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {data.name}の<span className="text-[#0EA5E9]">よくある質問</span>
          </h2>
          <div className="space-y-4">
            {data.faqs.map((faq, i) => (
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
          <p className="text-gray-500 mb-6">他のサービスも比較してみましょう</p>
          <Link
            href="/#ranking"
            className="inline-block bg-[#0EA5E9] text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-[#0284C7] transition-colors shadow-lg shadow-sky-200"
          >
            ランキングに戻る
          </Link>
        </div>
      </section>
    </>
  );
}
