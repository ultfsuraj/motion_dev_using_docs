'use client';

import { motion, useTime, useTransform } from 'motion/react';

const UseTime = () => {
  const time = useTime();
  const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });
  const tinyBox = {
    width: 30,
    height: 30,
    backgroundColor: '#9911ff',
    borderRadius: 5,
    rotate: useTransform(() => rotate.get() * 2),
  };
  const smallBox = {
    width: 50,
    height: 50,
    backgroundColor: '#dd00ee',
    borderRadius: 5,
    rotate: useTransform(() => rotate.get() * 1.5),
  };
  const box = {
    width: 70,
    height: 70,
    backgroundColor: '#ff0088',
    borderRadius: 5,
    rotate,
  };

  return (
    <fieldset>
      <legend>UseTime</legend>
      <div id="useTimeContainer" className="w-[400px] h-[400px] border border-amber-50 relative">
        <>
          <div style={{ ...layer, filter: 'blur(4px)' }}>
            <div style={{ ...boxContainer, width: 400, gap: 80 }}>
              <motion.div style={tinyBox} />
              <motion.div style={tinyBox} />
              <motion.div style={tinyBox} />
              <motion.div style={tinyBox} />
              <motion.div style={tinyBox} />
              <motion.div style={tinyBox} />
              <motion.div style={tinyBox} />
              <motion.div style={tinyBox} />
              <motion.div style={tinyBox} />
              <motion.div style={tinyBox} />
              <motion.div style={tinyBox} />
              <motion.div style={tinyBox} />
              <motion.div style={tinyBox} />
              <motion.div style={tinyBox} />
              <motion.div style={tinyBox} />
              <motion.div style={tinyBox} />
            </div>
          </div>
          <div style={{ ...layer, filter: 'blur(2px)' }}>
            <div style={{ ...boxContainer, width: 150 }}>
              <motion.div style={smallBox} />
              <motion.div style={smallBox} />
              <motion.div style={smallBox} />
              <motion.div style={smallBox} />
            </div>
          </div>
          <div style={layer}>
            <div style={boxContainer}>
              <motion.div style={box} />
            </div>
          </div>
        </>
      </div>
    </fieldset>
  );
};

export default UseTime;

const layer: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 10,
};

const boxContainer: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 25,
  flexWrap: 'wrap',
};
