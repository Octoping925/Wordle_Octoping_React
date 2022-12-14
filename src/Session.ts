import { Answer } from "./Answer";
import { Constants } from "./Config";
  
export class Session {
  answer: Answer;
  submitData: Array<string>;
  submitColorData: Array<Array<string>>
  leftCount: number;

  constructor(answer: string) {
    this.answer = new Answer(answer);
    this.submitData = [];
    this.submitColorData = [];
    this.leftCount = Constants.TRY_COUNT;
  }

  submitAnswer = (word: string): boolean => {
    this.submitData.push(word);
    this.submitColorData.push(this.answer.compare(word));
    this.leftCount--;

    return this.answer.equals(word);
  }

  getSubmitData = () => this.submitData;
  getSubmitColorData = () => this.submitColorData;
  getLeftCount = () => this.leftCount;
  getAnswer = () => this.answer.answer;
  isWin = () => {
    if(this.answer.equals(this.submitData.at(-1) as string)) return 'SUCCESS';
    if(this.leftCount === 0) return 'FAIL';
    return 'PLAYING';
  };
}