export function SkeletonGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="panel animate-pulse rounded-lg p-4">
          <div className="aspect-[4/3] rounded bg-slate-200 dark:bg-slate-800" />
          <div className="mt-4 h-4 w-2/3 rounded bg-slate-200 dark:bg-slate-800" />
          <div className="mt-3 h-4 w-1/2 rounded bg-slate-200 dark:bg-slate-800" />
          <div className="mt-6 h-9 rounded bg-slate-200 dark:bg-slate-800" />
        </div>
      ))}
    </div>
  );
}
