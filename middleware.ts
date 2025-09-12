// import { NextRequest, NextResponse } from 'next/server'

// export function middleware(request: NextRequest) {
//   // Handle registry files
//   if (request.nextUrl.pathname.startsWith('/r/')) {
//     const filename = request.nextUrl.pathname.split('/r/')[1]
    
//     // Rewrite to the static file in public/r/
//     const rewriteUrl = new URL(`/r/${filename}`, request.url)
    
//     // Set the correct content type for JSON files
//     const response = NextResponse.rewrite(rewriteUrl)
//     response.headers.set('Content-Type', 'application/json')
    
//     return response
//   }
// }

// export const config = {
//   matcher: '/r/:path*',
// }
import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // Handle registry files
  // if (request.nextUrl.pathname.startsWith('/r/')) {
  //   const filename = request.nextUrl.pathname.split('/r/')[1]
    
  //   // Rewrite to the static file in public/r/
  //   const rewriteUrl = new URL(`/r/${filename}`, request.url)
    
  //   // Set the correct content type for JSON files
  //   const response = NextResponse.rewrite(rewriteUrl)
  //   response.headers.set('Content-Type', 'application/json')
    
  //   return response
  // }
  console.log(`${request.method} ${request.url}`)
  NextResponse.next()
}

export const config = {
  matcher: '/r/:path*',
}