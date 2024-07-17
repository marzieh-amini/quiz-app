"use client";

import Button from "@/components/common/butten";
import { useEffect } from "react";

function Error({ error, reset }: any) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="container flex-grow text-center">
      <div className="quiz-container ">
        <h2>مشکلی پیش اومده 🧐</h2>
        <Button onClick={() => reset()}>دوباره تلاش کن 🤗</Button>
      </div>
    </div>
  );
}

export default Error;
