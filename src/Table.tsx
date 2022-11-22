import './App.css';
import { Constants } from './Config';
import Row from './Row';
import { Util } from './Util';

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
      {Util.makeArray(leftCount, ' '.repeat(Constants.WORD_LEN)).map(data => (
        <Row
         color={Util.makeArray(Constants.WORD_LEN, Constants.WHITE)}
         word={data}/>
      ))}
    </table>
  );
}

export default Table;
