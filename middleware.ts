import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const url = request.nextUrl.clone();

  // Gestione solo se è hrascendpress.online
  if (!host.endsWith("medtestpublishing.com")) {
    return NextResponse.next();
  }

  // Ignora dominio root e www
  if (
    host === "medtestpublishing.com" ||
    host === "www.hrascendpress.online"
  ) {
    return NextResponse.next();
  }

  const subdomain = host.replace(".medtestpublishing.com", "");
  url.pathname = `/quiz/${subdomain}`;
  return NextResponse.rewrite(url);
}
