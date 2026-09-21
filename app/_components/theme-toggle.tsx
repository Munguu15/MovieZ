"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="flex items-center justify-center size-9 rounded-lg border border-border"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex items-center justify-center size-9 rounded-lg border border-border hover:bg-muted transition-colors"
    >
      {isDark ? (
        <Sun className="size-4 text-foreground" />
      ) : (
        <Moon className="size-4 text-foreground" />
      )}
    </button>
  );
}
