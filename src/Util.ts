import { wordDict } from "./Dictionary";
import { Session } from "./Session";

export const Util = {
    copySession: (session: Session): Session => Object.assign({}, session),

    makeArray: (length: number, content: string): Array<string> => new Array(length).fill(content, 0, length),

    makeRandomNo: (from: number, to: number) => Math.floor(Math.random() * (to - from)) + from,

    pickRandomAnswer: () => wordDict[Util.makeRandomNo(0, wordDict.length)],
}