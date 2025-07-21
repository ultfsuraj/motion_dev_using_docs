'use client';

import { motion } from 'motion/react';
import { useState } from 'react';

const LayoutAnimation = () => {
  const [isOn, setIsOn] = useState(false);
  const toggleswitch = () => setIsOn(!isOn);

  return (
    <fieldset>
      <legend>Layout Animation</legend>
      <div id="layoutAnimationContainer">
        <motion.button
          className=" h-14 cursor-pointer flex items-center gap-2 p-2 rounded-md bg-zinc-50 "
          style={{ justifyContent: isOn ? 'start' : 'end', flexDirection: isOn ? 'row' : 'column' }}
          onClick={toggleswitch}
          layout
          transition={{
            type: 'spring',
            visualDuration: 0.2,
            bounce: 0.2,
          }}
        >
          <motion.div
            className="h-10 w-10 rounded-md bg-zinc-800"
            layout
            transition={{
              type: 'spring',
              visualDuration: 0.2,
              bounce: 0.2,
            }}
          />
          <motion.div
            className="h-10 w-10 rounded-md bg-zinc-800"
            layout
            transition={{
              type: 'spring',
              visualDuration: 0.2,
              bounce: 0.2,
            }}
          />
          <motion.div
            className="h-10 w-10 rounded-md bg-zinc-800"
            layout
            transition={{
              type: 'spring',
              visualDuration: 0.2,
              bounce: 0.2,
            }}
          />
          <motion.div
            className="h-10 w-10 rounded-md bg-zinc-800"
            layout
            transition={{
              type: 'spring',
              visualDuration: 0.2,
              bounce: 0.2,
            }}
          />
        </motion.button>
      </div>
    </fieldset>
  );
};

export default LayoutAnimation;
