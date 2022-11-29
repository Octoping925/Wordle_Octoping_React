import { render, screen } from '@testing-library/react';
import Grid from '../Grid';


test('render Grid', () => {
    // given
    const color = 'white';
    const letter = 'A';

    // when
    const { container } = render(<Grid color={color} letter={letter} />);

    // then
    const gridText = screen.getByText(letter);
    expect(gridText).toBeInTheDocument();
    expect(container).toHaveStyle(`backgroundColor: {color}`)
});