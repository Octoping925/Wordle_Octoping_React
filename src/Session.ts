import { Answer } from "./Answer";
import { Constants } from "./Config";

interface SubmitData {
  word: string,
  color: Array<string>
}
  
export class Session {
  answer: Answer;
  submitData: Array<string>;
  submitColorData: Array<Array<string>>
  leftCount: number;

  constructor() {
    this.answer = new Answer();
    this.submitData = [];
    this.submitColorData = [];
    this.leftCount = Constants.TRY_COUNT;
  }

  submitAnswer = (word: string): void => {
    this.submitData = [...this.submitData, word];
    this.submitColorData = [...this.submitColorData, this.answer.compare(word)];
    this.leftCount--;
  }

  getSubmitData = (): Array<string> => this.submitData;
  getSubmitColorData = (): Array<Array<string>> => this.submitColorData;
  getLeftCount = (): number => this.leftCount;
}