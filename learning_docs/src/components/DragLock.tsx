'use client';

import { motion } from 'motion/react';
import { useState } from 'react';

const Drag = () => {
  const [activeDir, setActiveDir] = useState<'x' | 'y' | null>(null);

  return (
    <fieldset>
      <legend>Drag Lock</legend>
      <div id="dragContainer" className="w-[200px] h-[200px] border border-amber-50 relative">
        <Line direction="x" activeDir={activeDir} />
        <Line direction="y" activeDir={activeDir} />
        <motion.div
          drag
          dragDirectionLock
          onDirectionLock={(dir) => setActiveDir(dir)}
          onDragEnd={() => setActiveDir(null)}
          dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
          dragTransition={{ bounceStiffness: 500, bounceDamping: 15 }}
          dragElastic={0.3}
          whileDrag={{ cursor: 'grabbing' }}
          style={box}
        />
      </div>
    </fieldset>
  );
};

export default Drag;

function Line({ direction, activeDir }: { direction: 'x' | 'y'; activeDir: 'x' | 'y' | null }) {
  return (
    <motion.div
      initial={false}
      animate={{ opacity: activeDir === direction ? 1 : 0.3 }}
      transition={{ duration: 0.1 }}
      style={{ ...line, rotate: direction === 'y' ? 90 : 0 }}
    />
  );
}

const box: React.CSSProperties = {
  width: 32,
  height: 32,
  border: '1px solid #f5f5f5',
  position: 'absolute',
  left: 84,
  top: 84,
};

const line: React.CSSProperties = {
  width: 200,
  height: 1,
  borderTop: '1px dashed #f5f5f5',
  position: 'absolute',
  top: 100,
};
