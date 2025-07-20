'use client';

import { motion } from 'motion/react';

const EnterAnimation = () => {
  return (
    <fieldset>
      <legend>Enter Animation</legend>
      <div id="enterAnimationContainer" className="gap-4 flex flex-col w-36 items-center">
        <motion.div
          className="w-20 h-20 bg-amber-500 rounded-full"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            // better to separately specify, if duratio and delay  spring type, complexities are there
            opacity: { delay: 1.5, duration: 0.4 },
            scale: { delay: 1.5, type: 'spring', visualDuration: 0.4, bounce: 0.7 },
          }}
        />
        <button className="py-1 px-3 bg-amber-800 rounded-md">refresh</button>
      </div>
    </fieldset>
  );
};

export default EnterAnimation;
