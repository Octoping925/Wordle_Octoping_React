import { render, screen } from '@testing-library/react';
import App from '../App';
import { Util } from '../Util';

describe('통합 테스트', () => {
  const ANSWER = 'KOREA';
  Util.pickRandomAnswer = jest.fn(() => ANSWER);

  const screen = render(<App />);

  describe('최초 생성 시 정상인지 체크', () => {
    test('로고가 잘 떴는지 확인한다', () => {
      const title = screen.getByText('Wordle');
      expect(title).toBeInTheDocument();
    });
  
    test('input이 잘 떴는지 확인한다', () => {
      const input = screen.getByPlaceholderText('단어를 입력해주세요');
      expect(input).toBeInTheDocument();
    });
  });

  describe('단어 정상 입력 체크', () => {

  });

  describe('유효하지 않은 입력 체크', () => {

  });

  describe('재시작 버튼 클릭 체크', () => {
    const restartButton = screen.getByText('재시작');
    expect(restartButton).toBeInTheDocument();
    restartButton.click();

    // test('재시작 버튼을 누르면 화면의 표의 모든 내용이 초기화 된다', () => {
    //   const table = container.querySelector('table');
    // });

    test('재시작 버튼을 누르면 input의 내용이 초기화 된다', () => {
      const input = screen.getByPlaceholderText('단어를 입력해주세요');
      expect(input.innerText).toBe('');
    });
  });

});