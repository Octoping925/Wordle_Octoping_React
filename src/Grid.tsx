import './App.css';

interface GridProps {
  color: string
  letter: string
}

function Grid({color, letter}: GridProps) {
  return (
    <td style = {{
      backgroundColor: color
    }}>
      {letter}
    </td>
  );
}

export default Grid;
