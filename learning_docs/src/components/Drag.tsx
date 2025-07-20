'use client';

import { motion } from 'motion/react';
import { useRef } from 'react';

const Drag = () => {
  const boundaryRef = useRef(null);
  return (
    <fieldset>
      <legend>Drag</legend>
      <div id="dragContainer" ref={boundaryRef} className="w-1/2 h-40 border border-amber-50">
        <motion.div className="w-20 h-20 bg-pink-700 rounded-lg" drag dragConstraints={boundaryRef} />
      </div>
    </fieldset>
  );
};

export default Drag;
