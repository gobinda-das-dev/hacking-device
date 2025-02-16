import React, { useEffect, useRef } from 'react'
import {Howl, Howler} from 'howler';

const Events = ({children}) => {
   const parent = useRef(null);
   const downAudio = new Howl({ src: '/audio/backspace/press.mp3' });
   const upAudio = new Howl({ src: '/audio/backspace/up.mp3' });

   useEffect(() => {
      const namedElements = [];
      parent.current.traverse(t => t.name && namedElements.push(t));
      
      window.addEventListener('keydown', (event) => {
         const button = namedElements.find(b => b.name === event.key);


         if(button) {
            downAudio.play();
            button.position.z = 2;
         }
      })

      window.addEventListener('keyup', (event) => {
         const button = namedElements.find(b => b.name === event.key);

         if(button) {
            upAudio.play();
            button.position.z = 2.459;
         }
      })
   }, [])

   return (
      <group ref={parent}>
         {children}
      </group>
   )
}

export default Events
