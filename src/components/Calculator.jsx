import { useState } from 'react';
import Button from './Button';
import data from '../data';
import Screen from './Screen';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calcObj, setCalcObj] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const handleClick = (buttonName) => {
    const newObj = calculate(calcObj, buttonName);
    setCalcObj(newObj);
  };

  return (
    <div className=" w-[90%] md:w-[500px] mx-auto">
      <Screen value={calcObj.next || (calcObj.total || '0')} />
      <div className="grid grid-cols-4">
        {
        data.map((val) => (
          <Button
            key={val.name}
            handleClick={() => handleClick(val.name)}
            type={val.type}
            name={val.name}
          />
        ))
      }
      </div>
    </div>
  );
};

export default Calculator;
