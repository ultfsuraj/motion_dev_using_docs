'use client';

import { animate, motion, useMotionValue, useTransform } from 'motion/react';
import { useEffect } from 'react';

const HtmlContent = () => {
  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));

  useEffect(() => {
    const controls = animate(count, 100, { duration: 5, delay: 2 });
    return () => controls.stop();
  }, []);

  return (
    <fieldset>
      <legend>HTML Content</legend>
      <div id="htmlContainer">
        <motion.pre className="text-6xl text-emerald-500">{rounded}</motion.pre>
      </div>
    </fieldset>
  );
};

export default HtmlContent;
