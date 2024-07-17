import { getLangs } from "../langs";

async function Footer({params}:{params:{langs:string}}) {
    const dict = await getLangs(params.langs)
//    await new Promise((resolve)=>setTimeout(()=>{resolve("")},3000))
   
    return ( 
            <h1>
            {dict["footer"].content} </h1>
     
     );
}

export default Footer;