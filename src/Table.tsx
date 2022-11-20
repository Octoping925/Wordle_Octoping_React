import './App.css';
import { Constants } from './Config';
import Row from './Row';

interface TableProps {
  submitData: Array<string>,
  leftCount: number
}

function Table({submitData, leftCount}: TableProps) {

  return (
    <table>
      {submitData.map(data => (
        <Row
         color='gray'
         word={data}/>
      ))}
      {new Array(leftCount).fill(' '.repeat(5), 0, leftCount).map(data => (
        <Row
         color={Constants.WHITE}
         word={data}/>
      ))}
    </table>
  );
}

export default Table;
