import { Constants } from "../Config";
import { wordDict } from "../Dictionary";
import { Validator } from "../Validator";

test('isLengthValid는 해당 단어가 Constants.WORD_LEN과 일치하는지 판단한다', () => {
    const word = 'a'.repeat(Constants.WORD_LEN);
    const errorWord = 'a'.repeat(Constants.WORD_LEN + 1);

    expect(Validator.isLengthValid(word)).toEqual(true);
    expect(Validator.isLengthValid(errorWord)).toEqual(false);
});

test('isInDictionary는 해당 단어가 wordDict 안에 있는지 판단한다', () => {
    const word = wordDict[0];
    const errorWord = 'CANT_EXIST';

    expect(Validator.isInDictionary(word)).toEqual(true);
    expect(Validator.isInDictionary(errorWord)).toEqual(false);
});