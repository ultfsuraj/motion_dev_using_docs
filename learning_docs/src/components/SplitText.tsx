'use client';

import { animate, spring, stagger } from 'motion/react';
import { splitText } from 'motion-plus';
import { useEffect, useRef } from 'react';

const SplitText = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;
      // hide the container untill fonts are loaded
      containerRef.current.style.visibility = 'visible';
      const { words } = splitText(containerRef.current.querySelector('h1')!);

      animate(
        words,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: 'spring',
          duration: 2,
          bounce: 0,
          delay: stagger(0.05),
        }
      );
    });
  }, []);

  return (
    <fieldset>
      <legend>Split Text</legend>
      <div id="splitTextContainer">
        <div className="container" ref={containerRef}>
          <h1 className="split-word">Level up your animations with the all-in membership</h1>
          <Stylesheet />
        </div>
      </div>
    </fieldset>
  );
};

export default SplitText;

function Stylesheet() {
  return (
    <style>{`
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 420px;
                text-align: left;
                visibility: hidden;

            }

            .split-word {
                font-size: 36px;
                font-weight: 700;
                will-change: transform, opacity;
            }
        `}</style>
  );
}
