import { BASE_API_URL } from '../constants/constants';

export const getDataAboutCharacters = async (limit = 6, offset = 0) => {
  const response = await fetch(
    `${BASE_API_URL}?limit=${limit}&offset=${offset}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch characters');
  }

  const data = await response.json();

  return data.data;
};

export const getTotalCharacters = async () => {
  const response = await fetch(`${BASE_API_URL}?limit=1000`);

  if (!response.ok) {
    throw new Error('Failed to fetch characters');
  }

  const data = await response.json();

  return data.data.length;
};

export const getAllCharacters = async () => {
  const response = await fetch(`${BASE_API_URL}?limit=1000`);

  if (!response.ok) {
    throw new Error('Failed to fetch characters');
  }

  const data = await response.json();

  return data.data;
};
