"use client";

export default function HeaderNavigation() {
  return (
    <div className="flex gap-2 mt-1">
      <button
        onClick={() => (window.location.href = "/")}
        className="text-xs px-2 py-1 rounded bg-black text-[#E8D6B5]"
      >
        🏠 Home
      </button>

      <button
        onClick={() => history.back()}
        className="text-xs px-2 py-1 rounded bg-black text-[#E8D6B5]"
      >
        ← Back
      </button>

      <button
        onClick={() => history.forward()}
        className="text-xs px-2 py-1 rounded bg-black text-[#E8D6B5]"
      >
        →
      </button>
    </div>
  );
}