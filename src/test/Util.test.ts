import { Constants } from "../Config";
import { wordDict } from "../Dictionary";
import { Util } from "../Util";

test('makeArray는 특정 요소가 들어간 특정 길이의 배열을 만든다', () => {
    // given
    const len = 3;
    const content = 'abc';

    // when
    const resultArray = Util.makeArray(len, content);

    // then
    expect(resultArray).toHaveLength(len);
    expect(resultArray).toEqual([content, content, content]);
});

test('makeRandomNo는 from 이상 to 이하의 숫자를 반환한다', () => {
    // given
    const from = 0;
    const to = 5;
  
    // when
    const randomNo = Util.makeRandomNo(from, to);
  
    // then
    expect(randomNo).toBeGreaterThanOrEqual(from)
    expect(randomNo).toBeLessThanOrEqual(to);
});

test('pickRandomAnswer는 wordDict 안의 랜덤한 단어를 반환한다', () => {
    // when
    const randomAnswer = Util.pickRandomAnswer();
    
    // then
    expect(wordDict).toContain(randomAnswer);
});

test('colorRGBToEmoji는 RGB 색깔에 따라 이모지를 반환한다', () => {
    expect(Util.colorRGBToEmoji(Constants.GREEN)).toBe('🟩');
    expect(Util.colorRGBToEmoji(Constants.YELLOW)).toBe('🟨');
    expect(Util.colorRGBToEmoji(Constants.GRAY)).toBe('⬛');
});

test('makeColorText는 colorsArr을 가지고 wordle 이모지 결과 텍스트를 반환한다', () => {
    // given
    const colorsArr = [
        [Constants.GREEN, Constants.YELLOW, Constants.GRAY, Constants.GREEN, Constants.YELLOW],
        [Constants.GRAY, Constants.GRAY, Constants.GRAY, Constants.GRAY, Constants.GRAY],
        [Constants.GRAY, Constants.GREEN, Constants.YELLOW, Constants.GREEN, Constants.YELLOW],
    ];

    // when
    const colorText = Util.makeColorText(colorsArr);

    // then
    expect(colorText).toBe('🟩🟨⬛🟩🟨\n⬛⬛⬛⬛⬛\n⬛🟩🟨🟩🟨');
});
