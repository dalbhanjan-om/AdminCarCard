export default function Generate() {
  return (
    <article className="premium-card p-6 md:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-amber-200/70">Workflow</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-amber-50">Generate</h3>
          <p className="mt-3 max-w-2xl text-sm text-zinc-300">
            Generate page is ready. Add generation forms and approval actions here for a polished operator workflow.
          </p>
        </div>
        <span className="premium-chip px-4 py-2 text-xs text-amber-100/85">Ready</span>
      </div>
    </article>
  )
}
