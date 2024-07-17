import { IResult } from "@/models/question";
import Button from "../common/butten";

interface IResultProps {
  result: IResult;
  totalQuestions: number;
  dict:any
}

function Result({ result, totalQuestions,dict }: IResultProps) {
  return (
    <div className="bg-slate-700 p-5 rounded-md w-1/2 mx-auto ">
      <h2 className="text-center mb-4 text-gray-100">{dict["quiz"].result}</h2>
      <div>
        <div>
          <div className="flex flex-col gap-4">
            <div className="text-gray-400">
              <h3 className="mt-2">
                    {dict["quiz"].resultScoreMsg1} {(result.score / 20) * 100}%{" "}
                    {dict["quiz"].resultScoreMsg2}
                </h3>

                <p className="mt-2">
                    {dict["quiz"].quizCount} : {totalQuestions}
                </p>
                <p className="mt-2">
                    {" "}
                    {dict["quiz"].quizScore} : {result.score}
                </p>
                <p className="mt-2">
                    {" "}
                    {dict["quiz"].quizCorrect} : {result.correctAnswers}
                </p>
                <p className="mt-2">
                    {" "}
                    {dict["quiz"].quizWrong} : {result.wrongAnswers}
                </p>
              <Button
                type="button"
                className="my-5  bg-sky-950 hover:bg-sky-600 w-full cursor-pointer"
                onClick={() => window.location.reload()}
              >
                {dict["quiz"].quizRestart}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
