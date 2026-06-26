"use client";

export default function HeaderNavigation() {
  return (
    <div className="flex gap-2 mt-1 text-sm">
      <button
        onClick={() => history.back()}
        className="hover:opacity-70"
      >
        ⏪⏩
      </button>

      <button
        onClick={() => history.forward()}
        className="hover:opacity-70"
      >
        ⏩
      </button>
    </div>
  );
}