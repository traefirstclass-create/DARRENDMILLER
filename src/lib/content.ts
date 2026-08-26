// Placeholder business details — swap these for the real values before launch.
export const repInfo = {
  agent: "REPLACE — Agent / Manager Name",
  agency: "REPLACE — Agency Name",
  email: "booking@REPLACE.com",
  phone: "REPLACE",
};

export const unionStatus = "Non-Union — REPLACE";

export type Credit = {
  year: string;
  role: string;
  project: string;
  type: string;
};

export const credits: Credit[] = [
  {
    year: "PRESENT",
    role: "Darren",
    project: "Kountry Wayne Digital Sketches",
    type: "Web Series — Recurring",
  },
  {
    year: "REPLACE",
    role: "ROLE NAME",
    project: "PROJECT TITLE",
    type: "Film / TV / Digital",
  },
  {
    year: "REPLACE",
    role: "ROLE NAME",
    project: "PROJECT TITLE",
    type: "Film / TV / Digital",
  },
  {
    year: "REPLACE",
    role: "ROLE NAME",
    project: "PROJECT TITLE",
    type: "Commercial / Brand",
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
