'use client';

import { motion } from 'motion/react';

const Gestures = () => {
  return (
    <fieldset>
      <legend>Gestures</legend>
      <div id="gesturesContainer">
        <motion.div
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 1.2 }}
          className="w-24 h-24 bg-fuchsia-500 rounded-md"
        />
      </div>
    </fieldset>
  );
};

export default Gestures;
