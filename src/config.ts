export type AppConfig = {
	defaultLocale: string;
	locales: Array<{
		code: string;
		label: string;
		enabled: boolean;
	}>;
	branding: {
		siteName: string;
		description: string;
	};
};

export const appConfig = {
	defaultLocale: "en",

	locales: [
		{ code: "en", label: "English", enabled: true },
		{ code: "pt", label: "Português", enabled: true },
	],

	branding: {
		siteName: "Buildbase",
		description: "Reusable boilerplate for full-featured Next.js apps",
	},
} as const;

// Helpers
export const enabledLocales = appConfig.locales
	.filter((locale) => locale.enabled)
	.map((locale) => ({
		code: locale.code,
		label: locale.label,
	}));

export const defaultLocale = appConfig.defaultLocale;
