"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav className="mb-6 text-sm" aria-label="Breadcrumb">
      <ol className="flex items-center gap-2">
        <li>
          <Link href="/" className="text-neutral-500 hover:text-emerald-600">
            Home
          </Link>
        </li>
        {segments.map((seg, idx) => {
          const href = "/" + segments.slice(0, idx + 1).join("/");
          const isLast = idx === segments.length - 1;
          return (
            <li key={href} className="flex items-center gap-2">
              <span className="mx-1 text-neutral-400">/</span>
              {isLast ? (
                <span className="font-medium text-neutral-900">
                  {decodeURIComponent(seg)}
                </span>
              ) : (
                <Link
                  href={href}
                  className="text-neutral-500 hover:text-emerald-600"
                >
                  {decodeURIComponent(seg)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
