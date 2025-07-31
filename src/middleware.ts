import { jwtVerify } from "jose";
import { MiddlewareConfig, NextRequest, NextResponse } from "next/server";

const publicRoutes = [
  { path: "/login", authenticated: "redirect" },
  { path: "/register", authenticated: "redirect" },
  { path: "/logout", authenticated: "notRedirect" },
  { path: "/", authenticated: "redirect" },
] as const;

const redirectTarget = "/login";

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const publicRoute = publicRoutes.find((route) => route.path === path);

  const token = req.cookies.get("token")?.value;

  if (!token && publicRoute) {
    return NextResponse.next();
  }
  if (!token && !publicRoute) {
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = redirectTarget;

    return NextResponse.redirect(redirectUrl);
  }
  if (token && publicRoute && publicRoute.authenticated === "redirect") {
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = "/dashboard";

    return NextResponse.redirect(redirectUrl);
  }
  if (token && !publicRoute) {
    try {
      const { payload } = await jwtVerify(
        token,
        new TextEncoder().encode(process.env.JWT_SECRET)
      );

      if (payload.exp && payload.exp < Date.now() / 1000) {
        const redirectUrl = req.nextUrl.clone();
        redirectUrl.pathname = "/logout";
        return NextResponse.redirect(redirectUrl);
      }
    } catch {
      const redirectUrl = req.nextUrl.clone();
      redirectUrl.pathname = "/logout";
      return NextResponse.redirect(redirectUrl);
    }
  }

  return NextResponse.next();
}

export const config: MiddlewareConfig = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sw.js).*)"],
};
