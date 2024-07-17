import Image from "next/image";
import Link from "next/link";
import { getLangs } from "../langs";
import Button from "@/components/common/butten";

async function Header({params}:{params:{langs:string}}) {
  
  const dict = await getLangs(params.langs) 
  //  await new Promise((resolve) => 
  //   setTimeout(() => {
  //     resolve('');
  //   }, 4000)
  // );

  return (
   
        <div className="flex flex-row justify-between">
          <Link className="w-24 flex flex-row-reverse gap-3 items-center" href="/">
            <h1 className="text-xl">quiz</h1>
            <Image
              className="h-8 w-auto"
              width={50}
              height={50}
              src={
                "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              }
              alt="logo"
            />
          </Link>
          {/* <Button className="bg-slate-600">
            <Link href="/auth/signin">
            {dict["header"].registerBtn}</Link>
          </Button> */}
        </div>
  );
}

export default Header;
