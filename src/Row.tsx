import './App.css';
import Grid from './Grid';

interface RowProps {
  word: string
  color: string
}

function Row({word, color}: RowProps) {
  return (
    <tr>
        {word.split('').map(letter => (
          <Grid 
           color={color}
           letter={letter}/>
        ))}
    </tr>
  );
}

export default Row;
