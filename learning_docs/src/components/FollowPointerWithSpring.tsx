'use client';

import { frame, motion, useSpring } from 'motion/react';
import { RefObject, useEffect, useRef } from 'react';

const FollowPointerWithSpring = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <fieldset>
      <legend>Follow Pointer With Spring</legend>
      <div id="followPointerWithSpringContainer" className="w-80 h-56 border border-white relative">
        <motion.div ref={ref} className="absolute w-6 h-6 rounded-md bg-amber-300" style={{ x, y }} />
      </div>
    </fieldset>
  );
};

const spring = { damping: 4, stiffness: 60, restDelta: 0.001 };

export function useFollowPointer(ref: RefObject<HTMLDivElement | null>) {
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  useEffect(() => {
    const element = ref.current;
    const container = document.querySelector('#followPointerWithSpringContainer');
    if (!ref.current || !container) return;

    const rect = container.getBoundingClientRect();
    // position relative to container
    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      frame.read(() => {
        x.set(clientX - element.offsetLeft - element.offsetWidth / 2 - rect.left);
        y.set(clientY - element.offsetTop - element.offsetHeight / 2 - rect.top);
      });
    };

    container?.addEventListener('pointermove', handlePointerMove);

    return () => container?.removeEventListener('pointermove', handlePointerMove);
  }, []);

  return { x, y };
}

export default FollowPointerWithSpring;
