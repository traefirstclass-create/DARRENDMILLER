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

// Videos are hosted in a shared Google Drive folder — drop the file's
// share link into `url` (e.g. https://drive.google.com/file/d/FILE_ID/view)
// once it's uploaded, and the embed will pick it up automatically.
export const reelVideos: ReelVideo[] = [
  {
    title: "Reel 1",
    description: "Video coming soon.",
    url: "https://drive.google.com/file/d/1tsNgP_dp_QAkJKVayNbJBdFSEE0VE194/view?usp=drive_link",
  },
  {
    title: "Reel 2",
    description: "Video coming soon.",
    url: "https://drive.google.com/file/d/11q9dhp-QvbIqyXXuAUPgi1hbTCqnZM-G/view?usp=drive_link",
  },
  {
    title: "Reel 3",
    description: "Video coming soon.",
    url: null,
  },
  {
    title: "Reel 4",
    description: "Video coming soon.",
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
