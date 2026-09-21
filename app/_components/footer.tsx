import Link from "next/link";
import { Film, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto w-full bg-[#4338CA] text-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-6 py-10 sm:px-20 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
        <div className="flex flex-col gap-3">
          <Link href="/" className="inline-flex items-center gap-2">
            <Film className="size-5" strokeWidth={2.25} />
            <span className="text-lg font-bold italic tracking-tight">
              Movie Z
            </span>
          </Link>
          <p className="text-sm text-white/90">
            © 2026 Movie Z. All Rights Reserved.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold">Contact Information</h3>
          <div className="flex flex-col gap-4 text-sm">
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 size-4 shrink-0" />
              <div className="flex flex-col gap-0.5">
                <span>Email:</span>
                <a
                  href="mailto:support@moviez.com"
                  className="hover:underline"
                >
                  support@moviez.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 size-4 shrink-0" />
              <div className="flex flex-col gap-0.5">
                <span>Phone:</span>
                <a href="tel:+976111234567" className="hover:underline">
                  +976 (11) 123-4567
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-base font-semibold">Follow us</h3>
          <div className="flex flex-wrap gap-5 text-sm">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              Twitter
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              Youtube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
