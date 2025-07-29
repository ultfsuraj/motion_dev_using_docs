'use client';

import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';

const Experiment = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    container: ref,
  });

  const backgroundColor = useTransform(scrollYProgress, [0, 0.5, 1], ['#f00', '#0f0', '#00f']);
  return (
    <fieldset>
      <legend>Experiment</legend>
      <div
        id="experimentContainer"
        ref={ref}
        className=" py-12 px-3 w-1/2 max-w-[400px] h-40 overflow-scroll border border-amber-50"
      >
        <motion.div className="h-[1000px] w-24 " style={{ backgroundColor }} />
      </div>
    </fieldset>
  );
};

export default Experiment;
