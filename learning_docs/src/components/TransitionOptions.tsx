'use client';

import { motion } from 'motion/react';

const TransitionOptions = () => {
  return (
    <fieldset>
      <legend>Transition Options</legend>
      <div id="transitionOptionsContainer">
        <motion.div
          className="w-24 h-24 rounded-full bg-teal-500"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1,
            ease: [0, 0.71, 0.2, 1.01],
            repeat: 3,
          }}
        />
      </div>
    </fieldset>
  );
};

export default TransitionOptions;
