const apiUrl = import.meta.env.VITE_API_URL;
export const fetchHeroes = async () => {
  const response = await fetch(apiUrl);
  return response.json();
};
