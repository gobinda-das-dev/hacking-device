import React, { useEffect, useRef } from 'react';
import { Howl, Howler } from 'howler';
import { downAudio, upAudio } from './Audio';

const Events = ({ children }) => {
   const parent = useRef(null);
   const keysPressed = useRef({});

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