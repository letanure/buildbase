export const appConfig = {
	defaultLocale: "en",

	locales: {
		en: { label: "English", enabled: true },
		pt: { label: "Português", enabled: true },
		es: { label: "Español", enabled: false },
	},

	branding: {
		siteName: "Buildbase",
		description: "Reusable boilerplate for full-featured Next.js apps",
	},
} as const;

// Helpers
export const enabledLocales = Object.entries(appConfig.locales)
	.filter(([, value]) => value.enabled)
	.map(([locale]) => locale);

export const defaultLocale = appConfig.defaultLocale;
