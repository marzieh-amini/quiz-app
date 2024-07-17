"use client";
import Button from "@/components/common/butten";
import { quiz } from "@/data";
import { IQuestion, IResult } from "@/models/question";
import React, { useEffect, useState } from "react";
import Answer from "@/components/quiz/answer";
import Result from "@/components/quiz/result";
interface IQuizProps {
  dict: any;
  langs: string;
}
function Quiz({ dict, langs }: IQuizProps) {
  const [activeQuestion, setActiveQuestion] = useState<number>(0);
  const [correctAnswer, setCorrectAnswer] = useState<string>("");
  const [selectIsCorrectAnswer, setSelectIsCorrectAnswer] = useState<boolean>();
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number>();
  const [checkSelected, setCheckSelected] = useState<boolean>(false);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [result, setResult] = useState<IResult>({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const questions: IQuestion[] = langs.startsWith("en")
    ? quiz.Enquestions
    : quiz.Faquestions;
  const totalQuestions: number = quiz.totalQuestions;

  useEffect(() => {
    getData();
  }, [result]);

  function getData() {
    setAnswers(questions[activeQuestion].answers);
    setCorrectAnswer(questions[activeQuestion].correctAnswer);
  }
  //create delay for show skeleton
  // async function timeDelay() {
  //   const delay = 1 + Math.floor(Math.random() * 4);
  //   // console.log(`Delay: ${delay}`);

  //   await timeout(delay * 1000);
  // }
  // function timeout(delay: number) {
  //   return new Promise((time) => setTimeout(time, delay));
  // }
  const handlerSelectAnswer = (index: number, answer: string) => {
    setSelectedAnswerIndex(index);
    setCheckSelected(true);
    if (answer === correctAnswer) {
      setSelectIsCorrectAnswer(true);
    } else {
      setSelectIsCorrectAnswer(false);
    }
  };
  const handlerNextQuestion = () => {
    setResult((prev) =>
      selectIsCorrectAnswer
        ? {
            ...prev,
            correctAnswers: prev.correctAnswers + 1,
            score: prev.score + 4,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
    setSelectedAnswerIndex(undefined);
    setSelectIsCorrectAnswer(undefined);
    setCheckSelected(false);
    if (activeQuestion !== totalQuestions - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  };
  return (
    <>
      {!showResult ? (
        <div className="bg-slate-600 p-5 rounded-md w-1/2 mx-auto ">
          <h2 className="text-center mb-4 text-gray-100">
            {dict["quiz"].quizNum1} : <span> {activeQuestion + 1} </span>
            {dict["quiz"].quizNum2} <span> {totalQuestions} </span>
          </h2>
          <div>
            <div>
              <h3 className="mb-7">{questions[activeQuestion].question}</h3>
              <div className="flex flex-col gap-4">
                <Answer
                  answers={answers}
                  selectedAnswerIndex={selectedAnswerIndex}
                  handlerSelectAnswer={handlerSelectAnswer}
                />
                <Button
                  className="bg-blue-950 disabled:bg-blue-400"
                  onClick={() => handlerNextQuestion()}
                  disabled={!checkSelected}
                >
                  {activeQuestion + 1 !== totalQuestions
                    ? dict["quiz"].nextBtn
                    : dict["quiz"].finishBtn}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Result result={result} dict={dict} totalQuestions={totalQuestions} />
      )}
    </>
  );
}

export default Quiz;
