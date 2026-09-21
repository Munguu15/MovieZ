import { NextRequest, NextResponse } from "next/server";

const BASE_URL = "https://api.themoviedb.org/3";

type RouteContext = {
  params: Promise<{ path: string[] }>;
};

export async function GET(request: NextRequest, context: RouteContext) {
  const apiKey = process.env.TMDB_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "TMDB_API_KEY is not configured" },
      { status: 500 },
    );
  }

  const { path } = await context.params;
  const incoming = request.nextUrl.searchParams;
  const params = new URLSearchParams(incoming);
  params.set("api_key", apiKey);

  if (!params.has("language")) {
    params.set("language", "en-US");
  }

  const tmdbUrl = `${BASE_URL}/${path.join("/")}?${params.toString()}`;

  try {
    const response = await fetch(tmdbUrl, { next: { revalidate: 60 } });
    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Failed to reach TMDB" },
      { status: 502 },
    );
  }
}
