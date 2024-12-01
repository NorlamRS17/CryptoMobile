import axios from 'axios';

const API_KEY = '3c600a51-9285-4a26-938d-daa34d9ee3b7';
const BASE_URL = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';

export const AxioCryptos = async () => {
  try {
    const response = await axios.get(BASE_URL, {
      headers: {
        'X-CMC_PRO_API_KEY': API_KEY,
      },
    });
    return response.data.data; 
  } catch (error) {
    console.error('Error fetching cryptocurrencies:', error);
    return [];
  }
};