import React from 'react'
import Button from './Button';

const buttonData = [
   { fontWeight: 500, fontSize: 1.0, position: [-2.699, 10.238, 2.459], name: '1', text: 1 },
   { fontWeight: 500, fontSize: 1.0, position: [-0.04, 10.238, 2.459], name: '2', text: 2 },
   { fontWeight: 500, fontSize: 1.0, position: [2.606, 10.238, 2.459], name: '3', text: 3 },
   { fontWeight: 500, fontSize: 1.0, position: [-2.699, 7.769, 2.459], name: '4', text: 4 },
   { fontWeight: 500, fontSize: 1.0, position: [-0.04, 7.769, 2.459], name: '5', text: 5 },
   { fontWeight: 500, fontSize: 1.0, position: [2.606, 7.769, 2.459], name: '6', text: 6 },
   { fontWeight: 500, fontSize: 1.0, position: [-2.699, 5.242, 2.459], name: '7', text: 7 },
   { fontWeight: 500, fontSize: 1.0, position: [-0.04, 5.242, 2.459], name: '8', text: 8 },
   { fontWeight: 500, fontSize: 1.0, position: [2.606, 5.242, 2.459], name: '9', text: 9 },
   { fontWeight: 700, fontSize: 0.6, position: [-2.699, 2.703, 2.459], name: 'Enter', text: "ENTER" },
   { fontWeight: 500, fontSize: 1.0, position: [-0.04, 2.703, 2.459], name: '0', text: 0 },
   { fontWeight: 700, fontSize: 0.6, position: [2.606, 2.703, 2.459], name: 'Backspace', text: "DELETE" },
];

const Buttons = () => {

   return (
      <>
         {buttonData.map((button, index) => (
            <Button
               key={index}
               fontWeight={button.fontWeight}
               fontSize={button.fontSize}
               position={button.position}
               name={button.name}
            >
               {button.text}
            </Button>
         ))}
      </>
   )
}

export default Buttons
