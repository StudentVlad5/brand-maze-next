import { NextResponse } from "next/server";

export function middlware(request) {
  if (request.nextUrl.pathname.startWidth("/services/1")) {
    return NextResponse.rewrite(new URL("/about", request.url));
  }
  if (request.nextUrl.pathname.startWidth("/projects")) {
    return NextResponse.rewrite(new URL("/about", request.url));
  }
  // якщо є Cookie:nextjs=fast
  let cookie = request.cookies.get("nextjs");
  //отримаємо параметр {name: 'nextjs', value:"fast", path: '/'}
  console.log("cookie", cookie);
  let allCookies = request.cookies.getAll();
  //отримаємо параметр {{name: 'nextjs', value:"fast"}}
  console.log("allCookies", allCookies);

  request.cookies.has("nextjs");
  // true
  request.cookies.delete("nextjs");
  request.cookies.has("nextjs");
  // false

  const response = NextResponse.next();
  response.cookies.set('vercel', 'fast');
  response.cookies.set({
    name:'vercel', 
    value:'fast',
    path:'/'
    });

    cookie = request.cookies.get("vercel");
    // отримаємо параметр {name: 'vercel', value:"fast", path: '/'
   const requestHeadres = new Headers(request.headres);
   requestHeadres.set('x-hello-from-middlware', 'hello');

   response = NextResponse.next({
    request:{
        headers: requestHeadres,
    }
   })
   
   
   
    return response
}
