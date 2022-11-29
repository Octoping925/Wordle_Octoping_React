import { Constants } from "./Config";
import { wordDict } from "./Dictionary";
import { Session } from "./Session";

export const Util = {
    copySession: (session: Session): Session => Object.assign({}, session),

    makeArray: (length: number, content: string): Array<string> => new Array(length).fill(content, 0, length),

    makeRandomNo: (from: number, to: number) => Math.floor(Math.random() * (to - from)) + from,

    pickRandomAnswer: () => wordDict[Util.makeRandomNo(0, wordDict.length)],

    colorRGBToEmoji: (colorRGB: string) => {
        switch(colorRGB) {
            case Constants.GREEN:
                return '🟩';
            case Constants.YELLOW:
                return '🟨';
            case Constants.GRAY:
                return '⬛';
            default:
                return '';
        }
    },

    makeColorText: (colorsArr: Array<Array<string>>) => colorsArr.map(colors => colors.reduce((prev, cur) => prev + Util.colorRGBToEmoji(cur), '')).join('\n'),

    copyToClipboard: (text: string) => window.navigator.clipboard.writeText(text),
}