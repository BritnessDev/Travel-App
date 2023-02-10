import axios from 'axios';

const API_KEY = 'WMv95JAj9RpyUhV0s9EXW1mS0TRqZfw9';

export const searchFlights = async (origin, destination, departureDate) => {
  const res = await axios.get(
    `https://api.amadeus.com/v1/flights/low-fare-search?origin=${origin}&destination=${destination}&departure_date=${departureDate}`,
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
        'Access-Control-Allow-Origin': '*'
      }
    }
  );

  return res.data;
};
