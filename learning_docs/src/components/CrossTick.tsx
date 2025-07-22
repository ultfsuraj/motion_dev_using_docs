'use client';

import { motion, useMotionValue, useTransform } from 'motion/react';

const CrossTick = () => {
  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  const background = useTransform(x, xInput, [
    'linear-gradient(180deg, #ff008c 0%, rgb(211,9,225) 100%',
    'linear-gradient(180deg, #7700ff 0%, rgb(68,0,255) 100%',
    'linear-gradient(180deg, rgb(230, 225, 0) 0%, rgb(3,209,0) 100%',
  ]);
  const color = useTransform(x, xInput, ['rgb(211, 9,225', 'rgb(68,0,225', 'rgb(3,209,0)']);
  const tickPath = useTransform(x, [10, 100], [0, 1]);
  const crossPathA = useTransform(x, [-10, -55], [0, 1]);
  const crossPathB = useTransform(x, [-50, -100], [0, 1]);

  return (
    <fieldset>
      <legend>CrossTick</legend>
      <div id="crossTickContainer" className="w-1/2 h-40 p-3 border border-amber-50">
        <motion.div
          className="w-full h-full flex justify-center items-center grow shrink max-w-full rounded-md"
          style={{ background }}
        >
          <motion.div
            className="w-20 h-20 bg-zinc-200 rounded-md flex justify-center items-center"
            style={{ x }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.5}
          >
            <svg viewBox="0 0 50 50" className="w-16 h-16">
              <motion.path
                fill="none"
                strokeWidth="2"
                stroke={color}
                d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
                style={{
                  x: 5,
                  y: 5,
                }}
              />
              <motion.path
                id="tick"
                fill="none"
                strokeWidth="2"
                stroke={color}
                d="M14,26 L 22,33 L 35,16"
                strokeDasharray="0 1"
                style={{ pathLength: tickPath }}
              />
              <motion.path
                fill="none"
                strokeWidth="2"
                stroke={color}
                d="M17,17 L33,33"
                strokeDasharray="0 1"
                style={{ pathLength: crossPathA }}
              />
              <motion.path
                id="cross"
                fill="none"
                strokeWidth="2"
                stroke={color}
                d="M33,17 L17,33"
                strokeDasharray="0 1"
                style={{ pathLength: crossPathB }}
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </fieldset>
  );
};

export default CrossTick;
