import React from 'react'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import socket from '@/utils/socket';

function Searchresults() {
  const router = useRouter();
  const [jsonData, setJsonData] = useState(null)

  useEffect(() => {
    socket.on('json', (_jsonData, acknowledgmentCallback) => {
      setJsonData(JSON.parse(_jsonData))
      console.log(_jsonData)
      acknowledgmentCallback('success')
    })
  }, [socket])

  return (
    <div style={{ overflow: 'auto', height: '100vh' }}>
      <h1>Search Results:</h1>
      {jsonData && jsonData.map((product, index) => (
        <div key={index}>
          <img src={product.image_url} alt={product.item_name} />
          <h2>{product.item_name}</h2>
          <p>Price: {product.price}</p>
          <p>Rating: {product.rating}</p>
          <a href={product.link} target="_blank" rel="noopener noreferrer">View on Amazon</a>
          <p>Positive Reviews: {product.positive_reviews}</p>
          <p>Total Reviews: {product.total_reviews}</p>
        </div>
      ))}
    </div>
  );
}

export default Searchresults