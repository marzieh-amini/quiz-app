import {Metadata} from "next"
import { getLangs } from "../langs";
import Quiz from "./page";
export const metadata: Metadata={
  title:"question"
}
export default async function Layout({params}:{params:{langs:string}}) {
  const dict = await getLangs(params.langs)
  
  return (
    <div className="pt-9 flex flex-col gap-5 items-center flex-grow ">
      <h1 className="mb-7">{dict["quiz"].title}</h1>
      <Quiz dict={dict} langs={params.langs}/>
    </div>
  );
}
