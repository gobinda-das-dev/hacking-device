import React, { useEffect, useRef } from 'react'

const Events = ({children}) => {
   const parent = useRef(null)

   useEffect(() => {
      const namedElements = [];
      
      parent.current.traverse(t => {
         if(t.name) {
            namedElements.push(t);
         }
      })
      
      window.addEventListener('keydown', (event) => {
         const button = namedElements.find(b => b.name === event.key);


         if(button) {
            button.position.z = 2;
         }
      })

      window.addEventListener('keyup', (event) => {
         const button = namedElements.find(b => b.name === event.key);

         if(button) {
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
