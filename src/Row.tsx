import './App.css';
import Grid from './Grid';

interface RowProps {
  word: string
  color: Array<string>
}

function Row({word, color}: RowProps) {
  return (
    <tr>
        {word.split('').map((letter, idx) => (
          <Grid
           key={idx}
           color={color[idx]}
           letter={letter}/>
        ))}
    </tr>
  );
}

export default Row;
