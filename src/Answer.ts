import { Constants } from "./Config";

export class Answer {
  answer: string

  constructor(answer: string) {
    this.answer = answer;
  }

  compare = (word: string): Array<string> => {
    return Array.from(word).map((letter, idx) => {
      switch(true) {
        case this.answer.charAt(idx) === letter:
          return Constants.GREEN;
        case this.answer.includes(letter):
          return Constants.YELLOW;
        default:
          return Constants.GRAY;
      }
    });
  }

  equals = (word: string): boolean => this.answer === word;
}