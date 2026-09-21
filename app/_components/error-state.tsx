import { Button } from "@/components/ui/button";

export function ErrorState({
  message = "Something went wrong.",
  onRetry,
}: {
  message?: string;
  onRetry?: () => void;
}) {
  return (
    <div className="flex min-h-40 w-full flex-col items-center justify-center gap-3 py-16 text-center">
      <p className="text-sm text-muted-foreground">{message}</p>
      {onRetry && (
        <Button type="button" variant="outline" onClick={onRetry}>
          Try again
        </Button>
      )}
    </div>
  );
}
