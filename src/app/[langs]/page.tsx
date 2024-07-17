import Link from "next/link";
import { getLangs } from "./langs";
import LocaleSwitcher from "@/components/localeSwitcher";

export default async function Home({params}:{params:{langs:string}}) {
  // await new Promise((resolve)=>setTimeout(resolve,9000))
  const dict = await getLangs(params.langs)
  
  return (
    <main className="bg-slate-900 flex-grow flex flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-8 item-center">
      <LocaleSwitcher />
        <h1 className="text-xl">{dict["main"].appName}</h1>
        <Link href={`${params.langs}/quiz`}  className="bg-slate-700 p-3 rounded-lg text-center">{dict["main"].appStartBtn}</Link>
      </div>
    </main>
  );
}
