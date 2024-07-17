import Button from "@/components/common/butten";
import Link from "next/link";

function Loading() {
  
  return (
  
        <div className="flex flex-row justify-between">
          <Link className="w-24 flex flex-row-reverse gap-3 items-center" href="/">
            <h1 className="text-xl">quiz</h1>
          </Link>
          <Button className="bg-slate-600">
            ...
          </Button>
        </div>
  );
}

export default Loading;