import { Constants } from "../Config";
import { Session } from "../Session";

const answer = 'KOREA';
const notAnswer = 'FAILS';
let session: Session;

beforeEach(() => {
    session = new Session(answer);
});

test('Session은 생성자에 넣어준 값을 answer로 가진다', () => {
    expect(session.answer.equals(answer)).toBeTruthy();
});

describe('submitAnswer를 실행하면 인자에 넣은 값을 체크한다', () => {
    test('맞는 값 넣었을 때 체크', () => {
        const result = session.submitAnswer(answer);

        expect(result).toBeTruthy();
    
        expect(session.getSubmitData()).toContain(answer);
        expect(session.getSubmitData().length).toBe(1);
    
        expect(session.getSubmitColorData()).toStrictEqual([session.answer.compare(answer)]);
        expect(session.getSubmitColorData().length).toBe(1);
    
        expect(session.getLeftCount()).toBe(Constants.TRY_COUNT - 1);
    })

    test('틀린 값 넣었을 때 체크', () => {
        const result = session.submitAnswer(notAnswer);

        expect(result).toBeFalsy();
    
        expect(session.getSubmitData()).toContain(notAnswer);
        expect(session.getSubmitData().length).toBe(1);
    
        expect(session.getSubmitColorData()).toStrictEqual([session.answer.compare(notAnswer)]);
        expect(session.getSubmitColorData().length).toBe(1);
    
        expect(session.getLeftCount()).toBe(Constants.TRY_COUNT - 1);
    });
});

describe('isWin을 실행하면 해당 세션의 게임이 끝났는지 체크한다', () => {
    describe('게임이 아직 안 끝났을 경우', () => {
        test('제출을 한번도 안했을 경우', () => {
            expect(session.isWin()).toBe('PLAYING');
        });

        test('제출을 한번이라도 했을 경우', () => {
            session.submitAnswer(notAnswer);
            expect(session.isWin()).toBe('PLAYING');
        });
    });

    describe('게임을 이겼을 경우', () => {
        test('제한 횟수를 남기고 게임을 이겼을 경우', () => {
            session.submitAnswer(answer);
            expect(session.isWin()).toBe('SUCCESS');
        });

        test('제한 횟수는 다 썼지만 게임을 이겼을 경우', () => {
            for(let i = 0; i < Constants.TRY_COUNT - 1; ++i) {
                session.submitAnswer(notAnswer);
            }
            session.submitAnswer(answer);
            expect(session.isWin()).toBe('SUCCESS');
        })
        
    });

    test('게임을 졌을 경우', () => {
        for(let i = 0; i < Constants.TRY_COUNT; ++i) {
            session.submitAnswer(notAnswer);
        }

        expect(session.isWin()).toBe('FAIL');
    });
});