"use client";

import { useEffect } from "react";
interface IErrorProps{
    reset:()=>void,
    error:any
}
export default function Error({ error, reset }:IErrorProps) {
    useEffect(() => {
        console.log(error);
    }, [error]);
    return (
        <div className="container">
            <div className="quiz-container">
                <h2>مشکلی پیش اومده 🧐</h2>
                <button onClick={() => reset()}>دوباره تلاش کن 🤗</button>
            </div>
        </div>
    );
}
