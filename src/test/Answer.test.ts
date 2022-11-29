import { Answer } from "../Answer";
import { Constants } from "../Config";

const text = "KOREA";
const answer = new Answer(text);

test('Answer 인스턴스를 생성하면 전달받은 인자의 값으로 생성된다', () => {
    expect(answer.answer).toEqual(text);
});

test('Answer의 equals 메소드는 전달 받은 인자가 answer 값과 같은지 판단한다', () => {
    // when
    const result = answer.equals(text);
    const result2 = answer.equals("CANT_EXIST");

    // then
    expect(result).toEqual(true);
    expect(result2).toEqual(false);
});

test('Answer의 compare 함수는 전달받은 인자와 answer 값의 비교 결과를 반환한다', () => {
    // given
    const compareText = "ROKAT";

    // when
    const compareResult = answer.compare(compareText);

    // then
    expect(compareResult).toStrictEqual([
        Constants.YELLOW, 
        Constants.GREEN, 
        Constants.YELLOW, 
        Constants.YELLOW, 
        Constants.GRAY]);
});