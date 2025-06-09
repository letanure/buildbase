"use client";
import React from "react";
import {  enabledLocales } from "@/config";
import { usePathname, Link } from "@/i18n/navigation";
import { cva } from "class-variance-authority";
import { useLocale } from "next-intl";

const languageLinkVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer px-2 py-1",
  {
    variants: {
      active: {
        on: "text-blue-500",
        off: "text-red-500",
      },
    },
    defaultVariants: {
      active: "off",
    },
  }
);

export const LanguageSwitcher = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const pathname = usePathname();
    console.log(pathname);
    const currentLocale = useLocale();

    return (
      <nav ref={ref} className={className} aria-label="Language switcher" {...props}>
        <ul className="flex gap-2">
          {enabledLocales
            .map((locale) => {
              const isActive = locale.code === currentLocale;
              return (
                <li key={locale.code}>
                  <Link
                    href={pathname}
                    locale={locale.code}
                    aria-current={isActive ? "page" : undefined}
                    className={languageLinkVariants({ active: isActive ? "on" : "off" })}
                    tabIndex={isActive ? -1 : 0}
                  >
                    {locale.label}
                  </Link>
                </li>
              );
            })}
        </ul>
      </nav>
    );
  }
);

LanguageSwitcher.displayName = "LanguageSwitcher";