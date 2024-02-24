// api/search?query=hello&key=123

export async function GetId (request, { params}){
    const slug = params?.slug;
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query');
    const key = searchParams.get('key');
}

export async function POST(data){
    const url="`https://pokeapi.co/api/v2/berry/";
    const res = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      }).json();;
    return Response.status(200).json({res})
}