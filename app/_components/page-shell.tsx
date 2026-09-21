import { Header } from "./header";
import { Footer } from "./footer";

export function PageShell({
  children,
  wide = false,
}: {
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      <div
        className={`mx-auto flex w-full flex-1 flex-col gap-8 px-4 sm:px-8 ${
          wide ? "max-w-[1440px]" : "max-w-7xl"
        }`}
      >
        <Header />
        <main className="flex-1 pb-10">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
