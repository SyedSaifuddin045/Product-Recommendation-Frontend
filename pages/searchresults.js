import React from 'react'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import io from 'socket.io-client';

function Searchresults() {
    const [progressMessages, setProgressMessages] = useState([]);
    const router = useRouter();
    const { searchQuery } = router.query; // Get the search query from the router query parameter
  
    useEffect(() => {
      // Your socket connection logic to fetch data
      const socket = io('http://localhost:3500'); // Replace with your backend server URL
  
      // Event listener for progress updates
      socket.on('progress', (data) => {
        console.log("Progress data:", data);
        setProgressMessages((prevMessages) => [...prevMessages, data]);
      });
  
      // Emit an event to start the execution of the Python script with the searchQuery
      socket.emit('StartScript', searchQuery);
  
      // Clean up the socket connection when the component is unmounted
      return () => {
        socket.disconnect();
      };
    }, [searchQuery]);
  
    return (
      <div>
        <h1>Search Results</h1>
        <div>
          {/* Display your search results here */}
          {/* {progressMessages.map((message, index) => (
            <p key={index}>{message}</p>
          ))} */}
          {progressMessages ? (
              <p>{progressMessages}</p>
          ):(
            <p>searching</p>
          )}
        </div>
      </div>
    );
}

export default Searchresults