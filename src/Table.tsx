import './App.css';
import { Constants } from './Config';
import Row from './Row';

interface TableProps {
  submitData: Array<string>,
  submitColorData: Array<Array<string>>,
  leftCount: number
}

function Table({submitData, submitColorData, leftCount}: TableProps) {

  return (
    <table>
      {submitData.map((data, idx) => (
        <Row
         color={submitColorData[idx]}
         word={data}/>
      ))}
      {new Array(leftCount).fill(' '.repeat(Constants.WORD_LEN), 0, leftCount).map(data => (
        <Row
         color={new Array(Constants.WORD_LEN).fill(Constants.WHITE, 0, Constants.WORD_LEN)}
         word={data}/>
      ))}
    </table>
  );
}

export default Table;
