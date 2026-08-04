import { NextResponse } from "next/server";

// Every Vercel deployment gets its own throwaway preview URL
// (miami-home-guide-XXXXXXX-miami-real-estate.vercel.app), on top of the
// stable miami-home-guide.vercel.app and www.mymiamihomeguide.com aliases.
// All of them serve the same site — redirect anything that isn't the
// canonical domain there instead, so only one URL is ever the "real" one.
const CANONICAL_HOST = "mymiamihomeguide.com";

export function middleware(request) {
  const host = request.headers.get("host") || "";

  if (host === CANONICAL_HOST || host.startsWith("localhost")) {
    return NextResponse.next();
  }

  const url = new URL(request.url);
  url.protocol = "https";
  url.host = CANONICAL_HOST;
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
