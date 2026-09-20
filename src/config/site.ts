import { readdirSync } from "node:fs";
import { join } from "node:path";

/**
 * Central konfiguration för Göteborg Pickleball Klubbs webbplats.
 *
 * Alla länkar, texter och lättändrade värden samlas här. Inga hemligheter –
 * allt i den här filen är publik information som ändå syns på webbplatsen.
 *
 * Sätt ett värde till `null` för att dölja funktionen med en neutral
 * platshållartext i stället för en trasig länk eller iframe.
 */

export interface SiteConfig {
	name: string;
	shortName: string;
	url: string;
	email: string;
	whatsappInviteUrl: string | null;
	googleForm: {
		embedUrl: string | null;
		formUrl: string | null;
		/** Iframens höjd i px – justera efter visuell kontroll i webbläsare. */
		embedHeight: number;
	};
	extraMeeting: {
		dateIso: string;
		label: string;
	};
	logo: {
		src: string | null;
		alt: string;
	};
	seo: {
		title: string;
		titleIntegritet: string;
		description: string;
		descriptionIntegritet: string;
	};
	copy: {
		intro: string;
		interestHeading: string;
		interestIntro: string;
		interestPending: string;
		whatsappHeading: string;
		whatsappIntro: string;
		whatsappPending: string;
		meetingHeading: string;
		meetingNote: string;
	};
}

// public/media relativt projektroten (process.cwd() under astro dev/build)
const mediaDir = join(process.cwd(), "public", "media");
const preferredLogo = "gpk-logo.jpg";

/**
 * Löser upp logotypen: föredrar gpk-logo.* i public/media, annars första
 * bildfilen i katalogen. `null` om ingen logotyp finns ännu.
 */
function resolveLogoSrc(): string | null {
	try {
		const files = readdirSync(mediaDir).filter((file) =>
			/\.(png|jpe?g|webp|avif|svg)$/i.test(file),
		);
		if (files.length === 0) {
			return null;
		}
		const preferred = files.find((file) => file === preferredLogo);
		return `/media/${preferred ?? files[0]}`;
	} catch {
		return null;
	}
}

export const site: SiteConfig = {
	name: "Göteborg Pickleball Klubb",
	shortName: "GPK",
	url: "https://goteborgpickleballklubb.com",
	email: "goteborgpickleballklubb@gmail.com",

	// Publik inbjudningslänk till klubbens medlemschat i WhatsApp.
	whatsappInviteUrl: "https://chat.whatsapp.com/Hsp1qM21pQ3LLRI3OKwgIK",

	googleForm: {
		// Ägs av klubbens Google-konto. Skicka → < > i Google Forms ger embedUrl.
		embedUrl:
			"https://docs.google.com/forms/d/e/1FAIpQLSdhZcdCI0LNT7ucsAD1_X8inpPByGRfUulJfSe7gUWXgnW9tA/viewform?embedded=true",
		formUrl:
			"https://docs.google.com/forms/d/e/1FAIpQLSdhZcdCI0LNT7ucsAD1_X8inpPByGRfUulJfSe7gUWXgnW9tA/viewform",
		embedHeight: 1200,
	},

	extraMeeting: {
		dateIso: "2026-10-24",
		label: "24 oktober 2026",
	},

	logo: {
		src: resolveLogoSrc(),
		alt: "Göteborg Pickleball Klubb – logotyp",
	},

	seo: {
		title: "Göteborg Pickleball Klubb",
		titleIntegritet: "Integritetsinformation – Göteborg Pickleball Klubb",
		description:
			"Vi bygger en öppen och välkomnande pickleballklubb i Göteborg. Anmäl intresse för medlemskap och följ klubbens utveckling.",
		descriptionIntegritet:
			"Integritetsinformation för Göteborg Pickleball Klubb – hur vi hanterar personuppgifter i intresseanmälan.",
	},

	copy: {
		intro:
			"Vi bygger en öppen och välkomnande pickleballklubb i Göteborg. Här ska nya och erfarna spelare kunna mötas, utvecklas och spela tillsammans.",
		interestHeading: "Intresserad av att bli medlem?",
		interestIntro:
			"Lämna dina kontaktuppgifter så håller vi dig uppdaterad om medlemskap och klubbens fortsatta utveckling. Intresseanmälan är inte bindande och innebär inte att du blir medlem. Medlemsavgiften är ännu inte fastställd.",
		interestPending:
			"Intresseanmälan öppnar snart. Kontakta oss gärna på e-post så länge.",
		whatsappHeading: "Följ klubbens utveckling",
		whatsappIntro:
			"Information och uppdateringar delas i klubbens medlemschat på WhatsApp. Gå gärna med så håller vi dig uppdaterad om medlemskap och klubbens fortsatta utveckling.",
		whatsappPending: "Länk till klubbens WhatsApp publiceras snart.",
		meetingHeading: "Extra årsmöte den 24 oktober 2026",
		meetingNote: "Mer information om tid, plats och kallelse kommer.",
	},
} as const;
