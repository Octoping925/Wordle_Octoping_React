import { Answer } from "./Answer";
import { Constants } from "./Config";
  
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

  submitAnswer = (word: string): boolean => {
    this.submitData.push(word);

    const compareData = this.answer.compare(word);
    this.submitColorData.push(compareData);
    this.leftCount--;

    return compareData.every(color => color === Constants.GREEN);
  }

  getSubmitData = (): Array<string> => this.submitData;
  getSubmitColorData = (): Array<Array<string>> => this.submitColorData;
  getLeftCount = (): number => this.leftCount;
}