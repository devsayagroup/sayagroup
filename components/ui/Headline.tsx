import Link from "next/link";

interface HeadlineProps {
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; href?: string }[];
  pattern?: string;
}

export default function Headline({
  title,
  subtitle,
  breadcrumbs,
  pattern = "/pattern-sayagroup.png",
}: HeadlineProps) {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Pattern */}
   

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/90" />
        <div
            className="absolute inset-0 opacity-10 bg-center bg-cover"
            style={{ backgroundImage: `url(${pattern})` }}
        />

      {/* Content */}
      <div className="relative flex flex-col items-center text-center py-22 px-4 max-w-4xl mx-auto text-white">
        {/* Breadcrumbs */}
        <div className="mt-10 mb-4 flex items-center gap-2 text-sm text-gray-200">
          {breadcrumbs.map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              {item.href ? (
                <Link href={item.href} className="hover:text-white transition">
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-400 font-medium">{item.label}</span>
              )}
              {i < breadcrumbs.length - 1 && <span>/</span>}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-6xl font-reguler mb-2">{title}</h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-lg sm:text-lg text-gray-200 mt-1">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
