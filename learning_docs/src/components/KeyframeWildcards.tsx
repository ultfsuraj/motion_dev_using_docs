'use client';

import { motion } from 'motion/react';

const KeyframeWildcards = () => {
  return (
    <fieldset>
      <legend>Keyframe Wildcards</legend>
      <div id="keyframeWildcardsContainer" className="w-28 h-28 px-4 py-2">
        <motion.div
          className="w-16 h-16 rounded-md bg-zinc-500"
          /**
           * Setting the initial keyframe to "null" will use
           * the current value to allow for interruptable keyframes.
           * if you hover again in between animation, it'll start from where it's left
           */
          whileHover={{
            scale: [null, 1.1, 1.6],
            transition: {
              duration: 0.5,
              times: [0, 0.6, 1],
              ease: ['easeInOut', 'easeOut'],
            },
          }}
          // exit animation
          transition={{
            duration: 0.3,
            ease: 'easeOut',
          }}
        />
      </div>
    </fieldset>
  );
};

export default KeyframeWildcards;
