'use client';

import { motion } from 'motion/react';

const Rotate = () => {
  return (
    <fieldset>
      <legend>Rotate</legend>
      <div id="rotateContainer">
        <motion.div
          className="w-20 h-20 rounded-md bg-blue-500"
          animate={{
            rotate: 360,
          }}
          transition={{ duration: 1, delay: 2 }}
        />
      </div>
    </fieldset>
  );
};

export default Rotate;
