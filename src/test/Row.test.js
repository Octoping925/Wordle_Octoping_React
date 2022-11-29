import { render, screen } from '@testing-library/react';
import { Constants } from '../Config';
import Row from '../Row';


test('값이 들어있는 Row 렌더링', () => {
    // given
    const word = "KOREA";
    const colorArr = [
        Constants.GREEN, 
        Constants.YELLOW, 
        Constants.GRAY, 
        Constants.GREEN, 
        Constants.YELLOW
    ];

    // when
    const view = render(<table><tbody><Row word={word} color={colorArr} /></tbody></table>);

    // then
    const grids = Array.from(view.container.querySelectorAll('td'));

    expect(grids.length).toEqual(word.length);
    expect(grids.every((grid, idx) => grid.innerHTML === word[idx])).toBeTruthy();
});

test('값이 비어있는 Row 렌더링', () => {
    // given
    const word = ' '.repeat(Constants.WORD_LEN);
    const colorArr = [
        Constants.WHITE,
        Constants.WHITE,
        Constants.WHITE,
        Constants.WHITE,
        Constants.WHITE
    ];

    // when
    const view = render(<table><tbody><Row word={word} color={colorArr} /></tbody></table>);

    // then
    const grids = Array.from(view.container.querySelectorAll('td'));

    expect(grids.length).toEqual(word.length);
    expect(grids.every((grid, idx) => grid.innerHTML === word[idx])).toBeTruthy();
})