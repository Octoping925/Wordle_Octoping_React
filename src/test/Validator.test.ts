import { Constants } from "../Config";
import { wordDict } from "../Dictionary";
import { Validator } from "../Validator";

test('isLengthValid는 해당 단어가 Constants.WORD_LEN과 일치하는지 판단한다', () => {
    const word = 'a'.repeat(Constants.WORD_LEN);
    const errorWord = 'a'.repeat(Constants.WORD_LEN + 1);

    expect(Validator.isLengthValid(word)).toBeTruthy();
    expect(Validator.isLengthValid(errorWord)).toBeFalsy();
});

test('isInDictionary는 해당 단어가 wordDict 안에 있는지 판단한다', () => {
    const word = wordDict[0];
    const errorWord = 'CANT_EXIST';

    expect(Validator.isInDictionary(word)).toBeTruthy();
    expect(Validator.isInDictionary(errorWord)).toBeFalsy();
});

test('isValidWord는 해당 답안이 Wordle에 제출하기 적합한지 판단한다', () => {
    // given
    const word = "KOREA";
    const notInDictWord = "AAAAA";
    const notEnoughLengthWord = "HELL";

    // when
    const validResult = Validator.isValidWord(word);
    const notInDictResult = Validator.isValidWord(notInDictWord);
    const notEnoughLengthResult = Validator.isValidWord(notEnoughLengthWord);

    // then
    expect(validResult).toStrictEqual({
        errorMsg: "",
        isValid: true
    });

    expect(notInDictResult).toStrictEqual({
        errorMsg: "입력한 단어는 사전에 존재하는 단어여야 합니다",
        isValid: false
    });

    expect(notEnoughLengthResult).toStrictEqual({
        errorMsg: `단어의 길이는 ${Constants.WORD_LEN}글자여야 합니다`,
        isValid: false
    });
});