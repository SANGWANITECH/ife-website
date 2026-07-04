// Signature brand mark: a stamped circle + tick, echoing an immunization
// record check-off. Used in the logo lockup, section dividers, and stat cards.
// Keep this the ONE recurring motif — don't scatter generic icons everywhere.

export function DoseTick({ className = "" }: { className?: string }) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M7.5 12.5L10.3 15.3L16.5 9"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }