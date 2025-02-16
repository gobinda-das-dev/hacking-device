import React, { useEffect, useRef } from 'react';
import { Howl } from 'howler';
import { downAudio, upAudio } from './Audio';
import textStore from '../textStore';

const Events = ({ children }) => {
   const parent = useRef(null);
   const keysPressed = useRef({});

   const { writeText, removeLastCharacter, clearText } = textStore();

   useEffect(() => {
      const namedElements = [];
      parent.current.traverse(t => t.name && namedElements.push(t));

      const down = (event) => {
         if (keysPressed.current[event.key]) return;

         keysPressed.current[event.key] = true;

         const button = namedElements.find(b => b.name === event.key);

         if (button) {
            downAudio.play();
            button.position.z = 2;

            handleKeyInput(event.key);
         }
      };

      const up = (event) => {
         keysPressed.current[event.key] = false;

         const button = namedElements.find(b => b.name === event.key);

         if (button) {
            upAudio.play();
            button.position.z = 2.459;
         }
      };

      const handleKeyInput = (key) => {
         if (/^[0-9]$/.test(key)) {
            writeText(key);
         } else if (key === 'Enter') {
            console.log('Enter pressed. Text:', textStore.getState().text);
            clearText();
         } else if (key === 'Backspace') {
            removeLastCharacter();
         }
      };

      window.addEventListener('keydown', down);
      window.addEventListener('keyup', up);

      return () => {
         window.removeEventListener('keydown', down);
         window.removeEventListener('keyup', up);
      };
   }, []);

   return (
      <group ref={parent}>
         {children}
      </group>
   );
};

export default Events;