'use-client'
import { useEffect, useState } from 'react';
import socket from '@/utils/socket';
import styles from '../styles/index.module.css'
import { FcSearch } from "react-icons/fc"
import { BsGithub } from "react-icons/bs"
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Home() {
  const [inputText, setInputText] = useState(''); // State for input text
  const router = useRouter();

  const handleButtonClick = () => {
    console.log(inputText);
    socket.emit('StartScript', inputText);
    router.push({
      pathname: '/searching',
      query: { searchText: inputText ,state: { socket }}, // Pass the socket instance as state
    });  };

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
        <h2>"Discover your perfect match. Elevate your shopping experience.<br /> Uncover extraordinary products. Welcome to your product recommendation haven!"</h2>
        <div className={styles.searchbar}>
          <input type="text" value={inputText} onChange={handleInputChange} placeholder='Enter your search for product' /> {/* Input box */}
          <button onClick={handleButtonClick} className={styles.search_btn}><FcSearch size={30} /></button> {/* Submit button */}
        </div>
      </div>
      <div className={styles.socials}>
        <BsGithub size={50} style={{ color: '#6047FE' }} />
      </div>
    </>
  );
}

