const API_URL = '/api/breaking-bad/characters';

export const getDataAboutCharacters = async (limit = 6, offset = 0) => {
  const response = await fetch(`${API_URL}?limit=${limit}&offset=${offset}`);

  if (!response.ok) {
    throw new Error('Failed to fetch characters');
  }

  const data = await response.json();

  return data.data;
};
