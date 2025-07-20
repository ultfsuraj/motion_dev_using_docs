'use client';

import { motion } from 'motion/react';

const Keyframes = () => {
  return (
    <fieldset>
      <legend>Keyframes</legend>
      <div id="keyframesContainer" className="w-28 h-28  border border-white flex items-center justify-center">
        <motion.div
          className="w-12 h-12 rounded-md bg-yellow-500"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ['0%', '0%', '50%', '50%', '0%'],
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
      </div>
    </fieldset>
  );
};

export default Keyframes;
