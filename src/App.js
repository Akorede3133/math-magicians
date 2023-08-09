import { useEffect, useState } from 'react';
import Calculator from './components/Calculator';
import fecthQuotes from './api';
import Loading from './components/Loading';
import Error from './components/Error';
import Quotes from './components/Quotes';

const App = () => {
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
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error message={error} />;
  }
  return (
    <div className="bg-red-500 w-full min-h-screen py-20">
      <Calculator />
      {quote && <Quotes value={quote} />}
    </div>
  );
};

export default App;
