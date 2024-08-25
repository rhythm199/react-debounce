import React, { useState, useEffect } from 'react';
import Restaurant from './Restaurant';

const List = ({ searchTerm }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3333/restaurants?search=${searchTerm}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Check if the response is okay (status 200 or 201)
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const restaurantData = await response.json();
      const filteredData = restaurantData.filter((restaurant) =>
        restaurant.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setData(filteredData);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {data.length > 0 ?
            data?.map((item) => (
              <Restaurant key={item.pageid} result={item} />
            )) : <p>No matching results...</p>}
        </ul>
      )}
    </div>
  )
};

export default List;
