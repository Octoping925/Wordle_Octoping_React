import './App.css';
import Grid from './Grid';

interface RowProps {
  word: string
  color: Array<string>
}

function Row({word, color}: RowProps) {
  return (
    <tr id={word}>
        {word.split('').map((letter, idx) => (
          <Grid
           color={color[idx]}
           letter={letter}/>
        ))}
    </tr>
  );
}

export default Row;
