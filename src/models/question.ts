export interface IQuestion{
        id: number,
        question: string,
        answers: string[],
        correctAnswer:string,
    
}
export interface IResult{
    score:number,
    correctAnswers:number,
    wrongAnswers:number
}