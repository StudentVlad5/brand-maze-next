'use server'
export async function POST(data){
    const url="`https://pokeapi.co/api/v2/berry/";
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: data,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    return Response.status(200).json({res})
}
