import { render, screen } from '@testing-library/react';
import App from '../App';
import { Util } from '../Util';

describe('디자인 체크', () => {
  test('로고가 잘 떴는지 확인한다', () => {
    const screen = render(<App />);
    const title = screen.getByText('Wordle');
    expect(title).toBeInTheDocument();
  });

  test('테이블이 잘 떴는지 확인한다', () => {
    const screen = render(<App />);

  });

  test('input이 잘 떴는지 확인한다', () => {
    const screen = render(<App />);
    const input = screen.getByPlaceholderText('단어를 입력해주세요');
    expect(input).toBeInTheDocument();
  });
});