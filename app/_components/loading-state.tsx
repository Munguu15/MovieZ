export function LoadingState({ label = "Loading movies..." }: { label?: string }) {
  return (
    <div className="flex min-h-40 w-full flex-col items-center justify-center gap-3 py-16 text-muted-foreground">
      <div className="size-8 animate-spin rounded-full border-2 border-border border-t-foreground" />
      <p className="text-sm">{label}</p>
    </div>
  );
}
