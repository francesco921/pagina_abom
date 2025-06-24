import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const url = request.nextUrl.clone();

  // Ignora se non è medtestpublishing.com
  if (!host.endsWith("medtestpublishing.com")) {
    return NextResponse.next();
  }

  // Ignora dominio principale e altri specifici
  if (
    host === "medtestpublishing.com" ||
    host === "www.medtestpublishing.com" ||
    host === "www.hrascendpress.online"
  ) {
    return NextResponse.next();
  }

  // Riscrivi per i sottodomini
  const subdomain = host.replace(".medtestpublishing.com", "");
  url.pathname = `/quiz/${subdomain}`;
  return NextResponse.rewrite(url);
}
