const category = 'happiness';
const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;

const fecthQuotes = async () => {
  const response = await fetch(url, {
    method: 'GET',
    headers: { 'X-Api-Key': 'UMCwF/kCAsBDYMyXchDGZw==dYPV8a9dUxOf2coB' },
    contentType: 'application/json',
  });
  if (!response.ok) {
    const errorObj = {
      message: 'Failed to fetch data',
      resStatusText: response.statusText,
      resStatus: response.status,
    };
    throw (errorObj);
  }
  const data = await response.json();
  return data[0];
};

export default fecthQuotes;
