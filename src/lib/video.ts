export function getEmbedUrl(url: string): string | null {
  try {
    const u = new URL(url);

    if (u.hostname.includes("youtu.be")) {
      const id = u.pathname.slice(1);
      return id ? `https://www.youtube.com/embed/${id}?autoplay=1` : null;
    }

    if (u.hostname.includes("youtube.com")) {
      if (u.pathname === "/watch") {
        const id = u.searchParams.get("v");
        return id ? `https://www.youtube.com/embed/${id}?autoplay=1` : null;
      }
      if (u.pathname.startsWith("/embed/")) {
        return `${u.origin}${u.pathname}?autoplay=1`;
      }
      if (u.pathname.startsWith("/shorts/")) {
        const id = u.pathname.split("/")[2];
        return id ? `https://www.youtube.com/embed/${id}?autoplay=1` : null;
      }
    }

    if (u.hostname.includes("vimeo.com")) {
      const id = u.pathname.split("/").filter(Boolean).pop();
      return id ? `https://player.vimeo.com/video/${id}?autoplay=1` : null;
    }

    if (u.hostname.includes("drive.google.com")) {
      const match = u.pathname.match(/\/file\/d\/([^/]+)/);
      const id = match ? match[1] : u.searchParams.get("id");
      return id ? `https://drive.google.com/file/d/${id}/preview` : null;
    }

    return null;
  } catch {
    return null;
  }
}

export function getThumbnailUrl(url: string): string | null {
  try {
    const u = new URL(url);

    if (u.hostname.includes("youtu.be")) {
      const id = u.pathname.slice(1);
      return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
    }

    if (u.hostname.includes("youtube.com")) {
      if (u.pathname === "/watch") {
        const id = u.searchParams.get("v");
        return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
      }
      if (u.pathname.startsWith("/embed/") || u.pathname.startsWith("/shorts/")) {
        const id = u.pathname.split("/")[2];
        return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
      }
    }

    if (u.hostname.includes("drive.google.com")) {
      const match = u.pathname.match(/\/file\/d\/([^/]+)/);
      const id = match ? match[1] : u.searchParams.get("id");
      return id ? `https://drive.google.com/thumbnail?id=${id}&sz=w1000` : null;
    }

    return null;
  } catch {
    return null;
  }
}
