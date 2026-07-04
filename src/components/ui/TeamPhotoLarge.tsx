"use client";

import { useState } from "react";
import Image from "next/image";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function TeamPhotoLarge({ src, name }: { src: string; name: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex aspect-[4/5] w-full items-center justify-center rounded-2xl bg-ife-green-deep">
        <span className="font-display text-5xl font-semibold text-white">
          {getInitials(name)}
        </span>
      </div>
    );
  }

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-ife-green-deep/10">
      <Image
        src={src}
        alt={name}
        fill
        className="object-cover"
        onError={() => setFailed(true)}
      />
    </div>
  );
}