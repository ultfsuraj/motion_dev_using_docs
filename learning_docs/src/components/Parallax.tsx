'use client';

import { motion, MotionValue, useScroll, useSpring, useTransform } from 'motion/react';
import { useRef } from 'react';

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({
  id,
  index,
  containerRef,
}: {
  id: number;
  index: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, container: containerRef });
  const y = useParallax(scrollYProgress, 200);

  return (
    <section className="img-container">
      <div ref={ref}>
        <img src={`https://picsum.photos/id/${id}/150/200`} alt="vertical image" />
      </div>
      <motion.h2
        // hide until scroll progress is meaured
        initial={{ visibility: 'hidden' }}
        animate={{ visibility: 'visible' }}
        style={{ y }}
      >
        {`#00${index}`}
      </motion.h2>
    </section>
  );
}

const Parallax = () => {
  const plxRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: plxRef });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <fieldset>
      <legend>Parallax</legend>
      <div
        id="parallaxContainer"
        ref={plxRef}
        className="h-80 w-[400px] border border-yellow-200 p-4 relative overflow-auto"
      >
        <div>
          {[290, 351, 579, 1023, 145].map((image, index) => (
            <Image key={image} id={image} index={1 + index} containerRef={plxRef} />
          ))}
        </div>
        <motion.div className="progress" style={{ scaleX }} />
        <StyleSheet />
      </div>
    </fieldset>
  );
};

export default Parallax;

function StyleSheet() {
  return (
    <style>{`
        #parallaxContainer {
            scroll-snap-type: y mandatory;
        }

        .img-container {
        border: 1px solid red;
            height: 300px;
            width: 200px;
            scroll-snap-align: start;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            
        }

        .img-container > div {
            width: 150px;
            height: 200px;
            margin: 4px;
            background: #f5f5f5;
            overflow: hidden;
        }

        .img-container img {
            width: 150px;
            height: 200px;
        }

        .img-container h2 {
            color: #8df0cc;
            margin: 0;
            font-family: "Azeret Mono", monospace;
            font-size: 20px;
            font-weight: 700;
            letter-spacing: -1px;
            line-height: 1.1;
            position: absolute;
            display: inline-block;
            top: calc(50% - 25px);
            left: calc(50% + 120px);
        }

        .progress {
            position: sticky;
            left: 0;
            right: 0;
            bottom: 10px;
            height: 5px;
            background: #8df0cc;
            transform: scaleX(0);
        }
    `}</style>
  );
}
