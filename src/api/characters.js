const API_URL =
  'https://api.tvmaze.com/singlesearch/shows?q=Breaking%20Bad&embed=cast';

export const getDataAboutCharacters = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('Failed to fetch characters');
  }

  const data = await response.json();

  return data._embedded.cast;
};
