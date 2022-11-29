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
    const randomAnswer = Util.pickRandomAnswer();
    
    expect(wordDict).toContain(randomAnswer);
})
