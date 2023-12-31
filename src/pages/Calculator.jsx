import { useState } from 'react';
import Button from '../components/Button';
import data from '../data';
import Screen from '../components/Screen';
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
    <div className=" w-[90%] md:w-[80%] md:mt-10 mx-auto py-5 grid md:grid-cols-[1fr_2fr] gap-4 md:gap-10">
      <div>
        <p className=" font-bold text-3xl">Lets do some math!</p>
      </div>
      <div className="">
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
    </div>
  );
};

export default Calculator;
