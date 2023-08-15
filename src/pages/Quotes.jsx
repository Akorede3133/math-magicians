import { useLoaderData } from 'react-router-dom';
import fecthQuotes from '../api';

const loader = () => fecthQuotes();
const Quotes = () => {
  const { quote, author } = useLoaderData();
  return (
    <div className="flex flex-col mt-3 w-[90%] mx-auto md:w-[400px] py-5">
      <p className="text-black text-sm italic">{quote}</p>
      <p className=" self-end pt-2 italic text-slate-900 text-sm">
        Author:
        <span>{` ${author}`}</span>
      </p>
    </div>
  );
};
export default Quotes;
export { loader };
