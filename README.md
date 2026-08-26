# Darren Dequan Miller — Actor / Entertainer

Next.js (App Router) site for Darren Dequan Miller's actor portfolio: hero comp card, credits, screening room, about, resume/spec sheet, gallery, and a booking form that emails inquiries via [Resend](https://resend.com).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Booking form setup

The form at `#book` posts to `/api/book`, which sends an email through Resend. Copy `.env.example` to `.env.local` and fill in:

- `RESEND_API_KEY` — from [resend.com/api-keys](https://resend.com/api-keys)
- `BOOKING_TO_EMAIL` — the inbox that should receive booking requests
- `BOOKING_FROM_EMAIL` *(optional)* — a sender address on a domain you've verified in Resend; otherwise Resend's shared sandbox sender is used

Without these two required env vars, the API route returns a clear error instead of silently failing.

When deploying to Vercel, add the same variables under **Project Settings → Environment Variables**.

## Content to fill in before launch

`src/lib/content.ts` centralizes everything that's still a placeholder:

- `repInfo` — agent/agency name, booking email, phone
- `unionStatus`
- `socialLinks` — currently point to `#`

`credits` is sourced from [his IMDb profile](https://www.imdb.com/name/nm18058249/) and the `imdbUrl` constant links to it from the About section — update both together as new credits are added there.

`reelVideos` — set `url` to a YouTube or Vimeo link and the reel card automatically becomes clickable and embeds it.

Photos live in `public/images/`; swap the files (keep the same names, or update the references in `src/lib/content.ts` and `src/app/page.tsx`) to replace them.

## Deploying

Push to a Git repo and import it in [Vercel](https://vercel.com/new) — no special build configuration is needed. Remember to set the environment variables above in the Vercel project before the booking form will work in production.
