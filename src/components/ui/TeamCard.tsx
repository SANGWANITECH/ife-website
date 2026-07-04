"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { TeamAvatar } from "@/components/ui/TeamAvatar";
import { TeamPhotoLarge } from "@/components/ui/TeamPhotoLarge";
import type { TeamMember } from "@/content/team";

export function TeamCard({ member }: { member: TeamMember }) {
  const [open, setOpen] = useState(false);
  const hasBio = member.background.trim().length > 0;

  return (
    <>
      <button
        type="button"
        onClick={() => hasBio && setOpen(true)}
        className={`flex flex-col items-center rounded-2xl border border-black/5 bg-ife-paper p-6 text-center transition-shadow ${
          hasBio ? "cursor-pointer hover:shadow-md" : "cursor-default"
        }`}
      >
        <TeamAvatar src={member.image} name={member.name} size={88} />
        <h3 className="mt-4 font-display text-base font-semibold text-ife-ink">
          {member.name}
        </h3>
        <p className="text-sm font-medium text-ife-green-deep">
          {member.position}
        </p>

        {hasBio ? (
          <>
            <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ife-grey">
              {member.background}
            </p>
            <span className="mt-3 text-xs font-semibold uppercase tracking-wide text-ife-red">
              Read full bio
            </span>
          </>
        ) : (
          <p className="mt-3 text-sm italic text-ife-grey/60">
            Bio coming soon
          </p>
        )}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-2xl bg-white p-8 max-h-[85vh] overflow-y-auto"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 rounded-full p-1.5 text-ife-grey hover:bg-black/5"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex flex-col items-center text-center">
  <div className="w-48">
    <TeamPhotoLarge src={member.image} name={member.name} />
  </div>
  <h3 className="mt-5 font-display text-xl font-semibold text-ife-ink">
    {member.name}
  </h3>
              <p className="text-sm font-medium text-ife-green-deep">
                {member.position}
              </p>
              <p className="mt-5 text-left text-sm leading-relaxed text-ife-grey">
                {member.background}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}