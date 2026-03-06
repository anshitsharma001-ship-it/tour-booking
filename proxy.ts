import { NextRequest, NextResponse } from "next/server";

export default function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === "/old") {
    return NextResponse.redirect(new URL("/new", request.url));
  }
  return NextResponse.next();
}