'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

const ExitAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <fieldset>
      <legend>Exit Animation</legend>
      <div id="exitAnimationContainer">
        <div className="flex flex-col w-24 h-46 relative py-10">
          <AnimatePresence initial={false}>
            {isVisible ? (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.2 }}
                key="box"
                className="w-24 h-24 bg-teal-500 rounded-md"
              />
            ) : null}
          </AnimatePresence>
          <motion.button
            className="bg-teal-700 rounded-md py-1 px-3 absolute left-0 bottom-0 right-0"
            onClick={() => setIsVisible(!isVisible)}
            whileTap={{ y: 2 }}
          >
            {isVisible ? 'Hide' : 'Show'}
          </motion.button>
        </div>
      </div>
    </fieldset>
  );
};

export default ExitAnimation;
