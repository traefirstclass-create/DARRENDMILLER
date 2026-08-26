"use client";

import { useState } from "react";
import type { ReelVideo } from "@/lib/content";
import { getEmbedUrl } from "@/lib/video";

export default function ReelCard({ video }: { video: ReelVideo }) {
  const [playing, setPlaying] = useState(false);
  const embedUrl = video.url ? getEmbedUrl(video.url) : null;
  const playable = Boolean(embedUrl);

  return (
    <div className="reel-card fade-in">
      {playing && embedUrl ? (
        <div className="reel-thumb">
          <iframe
            src={embedUrl}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <button
          type="button"
          className={`reel-thumb${playable ? " playable" : ""}`}
          onClick={() => playable && setPlaying(true)}
          aria-label={playable ? `Play ${video.title}` : video.title}
          disabled={!playable}
        >
          <div className="knob play-knob">
            <div className="tri" />
          </div>
        </button>
      )}
      <div className="reel-info">
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </div>
    </div>
  );
}
