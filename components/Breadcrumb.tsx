import Link from "next/link";

type BreadcrumbItem = {
  name: string;
  href?: string;
};

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.href ? { item: `https://whitening-navi.pages.dev${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="パンくずリスト" className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
            {items.map((item, i) => (
              <li key={i} className="flex items-center gap-1">
                {i > 0 && <span className="text-gray-300">/</span>}
                {item.href ? (
                  <Link href={item.href} className="hover:text-[#0EA5E9] transition-colors">
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-gray-700">{item.name}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
