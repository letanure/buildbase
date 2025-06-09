import { defaultLocale, enabledLocales } from "@/config";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
	// A list of all locales that are supported
	locales: enabledLocales.map((locale) => locale.code),

	// Used when no locale matches
	defaultLocale: defaultLocale,
});
