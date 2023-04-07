import React, { useEffect, useState } from 'react';
import { ArrowUpIcon } from '@chakra-ui/icons';
import { Box, Button } from '@chakra-ui/react';

export default function ScrollTopButton() {
  const [visible, setVisible] = useState<boolean>(false);

  //onclick function handles scrolling back up
  function ScrollTop() {
    document.documentElement.scrollTop = 0;
  }

  //this function will be checking for the user's scroll behavior
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 5){
      setVisible(true)
      console.log("visible")
    } 
    else if (scrolled <= 50){
      setVisible(false)
      console.log("invisible")
    }
  };

  useEffect(() => {
    console.log(window)
    window.addEventListener('scroll', toggleVisible);

    return () => {
      window.removeEventListener('scroll', toggleVisible);
    }
  }, []);
  
  return (
    <div style={{opacity: visible ? '100%': '0%'}} onClick={ScrollTop} id="scrollUpContainer">
                <Button
            size={'sm'}
            rightIcon={<ArrowUpIcon />}
            colorScheme='whatsapp'
            variant='solid'>
            Scroll To Top
          </Button>
    </div>
  )
}