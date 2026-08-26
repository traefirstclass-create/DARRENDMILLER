// Placeholder business details — swap these for the real values before launch.
export const repInfo = {
  agent: "REPLACE — Agent / Manager Name",
  agency: "REPLACE — Agency Name",
  email: "booking@REPLACE.com",
  phone: "REPLACE",
};

export const unionStatus = "Non-Union — REPLACE";

// IMDb profile: https://www.imdb.com/name/nm18058249/
export const imdbUrl = "https://www.imdb.com/name/nm18058249/";

export type Credit = {
  year: string;
  role: string;
  project: string;
  type: string;
  /** Stage name he was credited under for this role, if different from his billed name elsewhere. */
  billedAs?: string;
  /** Short qualifier shown next to the credit type, e.g. "1 Episode" or "Pre-Production". */
  note?: string;
};

// Sourced from IMDb (nm18058249) — keep in sync as new credits are added there.
export const credits: Credit[] = [
  {
    year: "PRESENT",
    role: "Darren",
    project: "Kountry Wayne Digital Sketches",
    type: "Web Series — Recurring",
  },
  {
    year: "UPCOMING",
    role: "Deputy Ron",
    project: "No Fear",
    type: "Film",
    note: "Pre-Production",
  },
  {
    year: "2026",
    role: "Billionaire James",
    project: "Diary of a Family Affair",
    type: "TV Series",
    note: "1 Episode",
  },
  {
    year: "2026",
    role: "Malachi Jordan",
    project: "My Girlfriend's Husband",
    type: "Film",
    billedAs: "DarrenDequan",
  },
  {
    year: "2026",
    role: "Police Officer",
    project: "Fatal Attraction",
    type: "TV Series",
    note: "1 Episode",
  },
  {
    year: "2025",
    role: "Art Dealer",
    project: "Art of Murder",
    type: "Film",
    billedAs: "Darren Dequan",
  },
];

export type ReelVideo = {
  title: string;
  description: string;
  // Drop a YouTube or Vimeo URL here once it's available — the reel card
  // will automatically become clickable and embed it.
  url: string | null;
};

export const reelVideos: ReelVideo[] = [
  {
    title: "Comedy Reel",
    description: "Primary demo reel — comedic range across sketch formats.",
    url: null,
  },
  {
    title: "Self-Tape — Dramatic",
    description: "Dramatic scene self-tape, single take.",
    url: null,
  },
  {
    title: "Darren — Scene Highlight",
    description: "Featured Darren scene from Kountry Wayne's catalog.",
    url: null,
  },
];

export const galleryImages = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-5.jpg",
  "/images/gallery-6.jpg",
];

export const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "YouTube", href: "#" },
];
