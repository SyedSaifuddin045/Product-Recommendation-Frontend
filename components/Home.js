import { useEffect, useState } from 'react';
import io from 'socket.io-client';

export default function Home() {
  const [progressMessages, setProgressMessages] = useState([]);
  const [inputText, setInputText] = useState(''); // State for input text
  const socket = io('http://localhost:3500'); // Replace with your backend server URL

  useEffect(() => {
    // Event listener for progress updates
    socket.on('progress', (data) => {
      console.log("Progress data:", data);
      setProgressMessages((prevMessages) => [...prevMessages, data]);
    })
  }, [socket]);

  const handleButtonClick = () => {
    // Emit an event to start the execution of the Python script
    socket.emit('StartScript', inputText); // Pass inputText as a parameter
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value); // Update inputText state when the input value changes
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <h2>Enter Search Text to Search :</h2>
      <div>
        <input type="text" value={inputText} onChange={handleInputChange} style={{color:'black'}}/> {/* Input box */}
        <br></br>
        <button onClick={handleButtonClick}>search</button> {/* Submit button */}
      </div>
      <br />
      <div style={{ width: '300px', height: '200px', border: '1px solid white', overflow: 'auto' }}>
        {progressMessages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
    </div>
  );
}

