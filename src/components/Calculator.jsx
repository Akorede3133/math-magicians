import { useState, useEffect } from 'react';
import Button from './Button';
import data from '../data';
import Screen from './Screen';
import calculate from '../logic/calculate';
import fecthQuotes from '../api';
import Loading from './Loading';
import Error from './Error';
import Quotes from './Quotes';

const Calculator = () => {
  const [calcObj, setCalcObj] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const retrieveData = async () => {
    setLoading(true);
    try {
      const data = await fecthQuotes();
      setQuote(data[0]);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    retrieveData();
  }, []);
  const handleClick = (buttonName) => {
    const newObj = calculate(calcObj, buttonName);
    setCalcObj(newObj);
  };
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error message={error} />;
  }
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
      {quote && <Quotes value={quote} />}
    </div>
  );
};

export default Calculator;
