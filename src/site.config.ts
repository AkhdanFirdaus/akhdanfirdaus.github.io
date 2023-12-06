import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
	// Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
	author: "Akhdan Firdaus",
	// Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
	title: "AF Personal Website",
	// Meta property used as the default description meta property
	description: "An opinionated starter theme for Astro",
	// HTML lang property, found in src/layouts/Base.astro L:18
	lang: "en-GB",
	// Meta property, found in src/components/BaseHead.astro L:42
	ogLocale: "en_GB",
	// Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
	date: {
		locale: "en-GB",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
	// Include view-transitions: https://docs.astro.build/en/guides/view-transitions/
	includeViewTransitions: false,
	webmentions: {
		link: "https://webmention.io/astro-cactus.chriswilliams.dev/webmention",
	},
};

export const profileData = {
	firstname: "Akhdan Musyaffa",
	lastname: "Firdaus",
	summary:
		"Hi, I’m a fullstack developer. I code various programmig language, but deeply in love with flutter and dart 💙.",
	origin: "",
	birthdate: "",
	about:
		"I'm a person that always try to figuring out about anything instead of asking to other people, but that is me atleast 3 years ago. Now i'm willing to collaborate solving problem and discussing about anything especially in academic and programming world:)",
	contact: [
		{
			name: "Github",
			link: "https://github.com/akhdanfirdaus",
		},
		{
			name: "Instagram",
			link: "https://instagram.com/akhdanfirdaus",
		},
		{
			name: "Twitter",
			link: "https://twitter.com/akhdanmf",
		},
		{
			name: "LinkedIn",
			link: "https://linkedin.com/akhdanmf",
		},
	],
	programmingSkills: [
		{
			name: "Flutter & Dart",
			desc: "",
		},
		{
			name: "Laravel",
			desc: "",
		},
		{
			name: "MERN Stack",
			desc: "Mongo Express React Native",
		},
		{
			name: "Java",
			desc: "Mongo Express React Native",
		},
		{
			name: "GIT",
			desc: "",
		},
	],
	fundamentalSkills: [
		{
			name: "Problem Solving",
			desc: "",
		},
		{
			name: "Good Communication",
			desc: "Indonesia and English",
		},
	],
	education: [
		{
			name: "SMKN 1 Katapang",
			major: "Software Engineering",
			graduate: "2016",
		},
		{
			name: "UIN Sunan Gunung Djati Bandung",
			major: "Informatics Engineering",
			graduate: "2023",
		},
	],
};

// Used to generate links in both the Header & Footer.
export const menuLinks: Array<{ title: string; path: string }> = [
	{
		title: "Home",
		path: "/",
	},
	{
		title: "About",
		path: "/about/",
	},
	{
		title: "Blog",
		path: "/posts/",
	},
];
