'use client';

import { useAnimationFrame } from 'motion/react';
import { useRef } from 'react';

const UseAnimationFrame = () => {
  const ref = useRef<HTMLDivElement>(null);

  useAnimationFrame((t) => {
    if (!ref.current) return;

    const rotate = Math.sin(t / 10000) * 200;
    const y = (1 + Math.sin(t / 1000)) * -50;
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg) `;
  });

  return (
    <fieldset>
      <legend>Use Animation Frame</legend>
      <div id="useAnimationFrameContainer">
        <div className="container border border-white">
          <div className="cube" ref={ref}>
            <div className="side front"></div>
            <div className="side left"></div>
            <div className="side right"></div>
            <div className="side top"></div>
            <div className="side bottom"></div>
            <div className="side back"></div>
          </div>
          <StyleSheet />
        </div>
      </div>
    </fieldset>
  );
};

function StyleSheet() {
  return (
    <style>{`
            
        .container {
            perspective: 800px;
            width: 200px;
            height: 200px;
        }

        .cube {
            width: 100px;
            height: 100px;
            position: relative;
            transform-style: preserve-3d;
        }

        .side {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: red;
            opacity: 0.6;
        }

        .front {
            transform: rotateY(0deg) translateZ(50px);
            background-color:  red;
        }
        .right {
            transform: rotateY(90deg) translateZ(50px);
            background-color: yellow;
        }
        .back {
            transform: rotateY(180deg) translateZ(50px);
            background-color:  green;
        }
        .left {
            transform: rotateY(-90deg) translateZ(50px);
            background-color: blue;
        }
        .top {
            transform: rotateX(90deg) translateZ(50px);
            background-color: white;
        }
        .bottom {
            transform: rotateX(-90deg) translateZ(50px);
            background-color: cyan;
        }

    `}</style>
  );
}

export default UseAnimationFrame;
