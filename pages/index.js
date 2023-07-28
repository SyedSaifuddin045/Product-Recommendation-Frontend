'use-client'
import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import styles from '../styles/index.module.css'
import { FcSearch } from "react-icons/fc"
import { BsGithub } from "react-icons/bs"
import Image from 'next/image';
import { router, useRouter } from 'next/router';

export default function Home() {
  // const [progressMessages, setProgressMessages] = useState([]);
  // const [inputText, setInputText] = useState(''); // State for input text
  // const socket = io('http://localhost:3500'); // Replace with your backend server URL

  // useEffect(() => {
  //   // Event listener for progress updates
  //   socket.on('progress', (data) => {
  //     console.log("Progress data:", data);
  //     setProgressMessages((prevMessages) => [...prevMessages, data]);
  //   })
  // }, [socket]);

  // const handleButtonClick = () => {
  //   // Emit an event to start the execution of the Python script
  //   socket.emit('StartScript', inputText); // Pass inputText as a parameter
  // };

  // const handleInputChange = (event) => {
  //   setInputText(event.target.value); // Update inputText state when the input value changes
  // };

  const [inputText, setInputText] = useState(''); // State for input text
  const router = useRouter();

  const handleButtonClick = () => {
    // Navigate to the SearchResults page with the search query as a parameter
    // router.push(`/searchresults?searchQuery=${inputText}`);
    window.open(`/searchresults?searchQuery=${inputText}`, '_blank');
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value); // Update inputText state when the input value changes
  };

  return (
    <>
    <div className={styles.container}>
      <Image 
        src="/images/logo_1.png"
        width={300}
        height={300}
        alt='logo'
      />
      <h2>"Discover your perfect match. Elevate your shopping experience.<br/> Uncover extraordinary products. Welcome to your product recommendation haven!"</h2>
      <div className={styles.searchbar}>
        <input type="text" value={inputText} onChange={handleInputChange} placeholder='Enter your search for product'/> {/* Input box */}
        <button onClick={handleButtonClick} className={styles.search_btn}><FcSearch size={30}/></button> {/* Submit button */}
      </div>
      {/* <br /> */}
      {/* <div className={styles.loading}>
        <Image 
        src="/loading-gif.gif"
        width={400}
        height={300}
        alt='loading'
        />
        {progressMessages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div> */}
    </div>
    <div className={styles.socials}> 
      <BsGithub size={50} style={{color: '#6047FE'}}/>
    </div>
    </>
  );
}

