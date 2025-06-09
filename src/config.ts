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
	analytics: {
		umami: {
			enabled: boolean;
			siteId: string;
		};
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
	analytics: {
		umami: {
			enabled: true,
			siteId: "4a3a3f8c-c03b-42bc-b507-9a25b94ae0c1",
		},
		googleAnalytics: {
			enabled: false,
			siteId: "G-XXXXXXXXXX",
		},
		plausible: {
			enabled: false,
			siteId: "buildbase.com",
		},
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
