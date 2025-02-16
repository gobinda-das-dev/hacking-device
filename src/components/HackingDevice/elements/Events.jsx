import React, { useEffect, useRef } from 'react';
import { Howl } from 'howler';
import { downAudio, upAudio } from './Audio';
import textStore from '../textStore'; // Import the Zustand store

const Events = ({ children }) => {
   const parent = useRef(null);
   const keysPressed = useRef({}); // Track which keys are currently pressed

   // Zustand actions
   const { writeText, removeLastCharacter, clearText } = textStore();

   useEffect(() => {
      const namedElements = [];
      parent.current.traverse(t => t.name && namedElements.push(t));

      const down = (event) => {
         // Check if the key is already pressed
         if (keysPressed.current[event.key]) return;

         // Mark the key as pressed
         keysPressed.current[event.key] = true;

         const button = namedElements.find(b => b.name === event.key);

         if (button) {
            downAudio.play();
            button.position.z = 2; // Move the button down

            // Handle key input
            handleKeyInput(event.key);
         }
      };

      const up = (event) => {
         // Mark the key as released
         keysPressed.current[event.key] = false;

         const button = namedElements.find(b => b.name === event.key);

         if (button) {
            upAudio.play();
            button.position.z = 2.459; // Reset the button position
         }
      };

      const handleKeyInput = (key) => {
         // Only allow 0-9, Enter, and Backspace
         if (/^[0-9]$/.test(key)) {
            // Append the number to the text
            writeText(key);
         } else if (key === 'Enter') {
            // Handle Enter key (e.g., submit the text)
            console.log('Enter pressed. Text:', textStore.getState().text);
            clearText(); // Clear the text after Enter is pressed
         } else if (key === 'Backspace') {
            // Handle Backspace key
            removeLastCharacter(); // Remove the last character
         }
      };

      window.addEventListener('keydown', down);
      window.addEventListener('keyup', up);

      return () => {
         window.removeEventListener('keydown', down);
         window.removeEventListener('keyup', up);
      };
   }, [writeText, removeLastCharacter, clearText]); // Add Zustand actions as dependencies

   return (
      <group ref={parent}>
         {children}
      </group>
   );
};

export default Events;