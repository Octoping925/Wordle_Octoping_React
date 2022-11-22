import { Constants } from "./Config";
import { wordDict } from "./Dictionary";

export class Answer {
  answer: string

  constructor() {
    const randomIdx = Math.floor(Math.random() * wordDict.length);
    this.answer = wordDict[randomIdx];
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