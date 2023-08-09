import Button from './Button';
import data from '../data';
import Screen from './Screen';

const Calculator = () => (
  <div className=" w-[90%] md:w-[500px] mx-auto">
    <Screen />
    <div className="grid grid-cols-4">
      {
        data.map((val) => (
          <Button key={val.name} type={val.type} name={val.name} />
        ))
      }
    </div>
  </div>
);

export default Calculator;
