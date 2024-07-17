import Loading from "@/app/[langs]/quiz/loading";
import { IQuestion } from "@/models/question";
import { Suspense } from "react";

interface IAnswerProps {
  answers: string[];
  handlerSelectAnswer: (a:number,b:string) => void;
  selectedAnswerIndex: number|undefined;
}

function Answer({
  handlerSelectAnswer,
  answers,
  selectedAnswerIndex,
}: IAnswerProps) {
  return (
    <>
      {answers.map((answer, index) => (
        <div
          className="bg-slate-900 w-full  cursor-pointer p-4 rounded-xl hover:bg-slate-800 hover:text-gray-200"
          style={
            selectedAnswerIndex === index
              ? { backgroundColor: "black" }
              : { backgroundColor: "" }
          }
          key={index}
          onClick={() => handlerSelectAnswer(index, answer)}
        >
          <Suspense fallback={<Loading count={1} />}>{answer}</Suspense>
        </div>
      ))}
    </>
  );
}

export default Answer;
