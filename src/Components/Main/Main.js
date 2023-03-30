import React, { useEffect, useState } from 'react';
import Photos from '../Photos/Photos';
import './style.css';

const fetchData = async () => {
  try {
    const res = await fetch(
      'https://cdn.jsdelivr.net/gh/abbassiddiqi/airbnb-api@bbd1300a/flats.json'
    );
    const rentData = await res.json();
    return rentData.map(({ id, imageUrl, title, description, price }) => ({
      id,
      imageUrl,
      title,
      description,
      price,
    }));
  } catch (err) {
    console.log(err);
    return [];
  }
};

function Main() {
  const [flats, setFlats] = useState([]);

  useEffect(() => {
    fetchData().then((rentData) => setFlats(rentData));
  }, []);

  const places = flats.map((flat) => {
    return (
      <Photos
        key={flat.id}
        img={flat.imageUrl}
        title={flat.title}
        description={flat.description}
        price={flat.price}
      />
    );
  });

  return <div className="main-container">{places}</div>;
}

export default Main;
