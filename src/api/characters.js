import { BASE_API_URL } from '../constants/constants';

export const getCharacters = async ({ limit, offset, name, id } = {}) => {
  let url = BASE_API_URL;

  if (id) {
    url += `/${id}`;
  } else {
    const params = new URLSearchParams();

    if (limit) {
      params.set('limit', limit);
    }

    if (offset) {
      params.set('offset', offset);
    }

    if (name) {
      params.set('name', name);
    }

    const query = params.toString();

    if (query) {
      url += `?${query}`;
    }
  }

  const response = await fetch(url);

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

export const getQuote = async (id) => {
  const response = await fetch(`/api/breaking-bad/quotes/${id}`);

  if (!response.ok) {
    throw new Error('Failed to fetch quote');
  }

  const quote = await response.json();

  return quote.data;
};
