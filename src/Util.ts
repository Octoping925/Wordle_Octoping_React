import { Session } from "./Session";

export const Util = {
    copySession: (session: Session): Session => Object.assign({}, session),

    makeArray: (length: number, content: string): Array<string> => new Array(length).fill(content, 0, length),

}