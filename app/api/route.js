// export const dynamic = 'force-dynamic';
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
const revalidate = 60;

// збереження даних в кукіс
export async function GET_PICACHU(request){
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const res = await fetch(`https://pokeapi.co/api/v2/berry/${id}/`, {
        headers:{
            "Content-Type": "aplication/json",
        }
    });

    const data = await res.json();
    return Response.status(200).json({data})
}

export async function GetSignIn(request){
    const cookiesStore = cookies();
    const headers = headers();
    const headers1 = new Headers(request.headers)
    const token = request.cookies.get('token');
    if (token) {
        return Response("Hello Next").status(200).headers({"Set-Cookie": {token}})
    }
    else {
        return (Response("Please LogIn").status(400).headers(headers1), redirect('/login'))
    }
}







// без збереження даних в кукіс
export async function GetListOfPicachu (){
    const res = await fetch('https://pokeapi.co/api/v2/ability/?limit=20&offset=20', { next: {revalidate}}, { headers:{ "Content-Type": "aplication/json" }})
    
    const data = await res.json();
    return Response.status(200).json({data})
};

export async function GetPocemon (){
    const res = await fetch(`https://pokeapi.co/api/v2/ability/${id}/`, { next: {revalidate}}, { headers:{ "Content-Type": "aplication/json" }})
    
    const data = await res.json();
    return Response.status(200).json({data})
};

