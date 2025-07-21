'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';

import CssSpring from '@/components/CssSpring';
import Drag from '@/components/Drag';
import EnterAnimation from '@/components/EnterAnimation';
import ExitAnimation from '@/components/ExitAnimation';
import Gestures from '@/components/Gestures';
import HtmlContent from '@/components/HtmlContent';
import Keyframes from '@/components/Keyframes';
import KeyframeWildcards from '@/components/KeyframeWildcards';
import Rotate from '@/components/Rotate';
import TransitionOptions from '@/components/TransitionOptions';
import UseAnimationFrame from '@/components/UseAnimationFrame';
import FollowPointerWithSpring from '@/components/FollowPointerWithSpring';
import LayoutAnimation from '@/components/LayoutAnimation';
import MotionAlongPath from '@/components/MotionAlongPath';
import Parallax from '@/components/Parallax';
import PathDrawing from '@/components/PathDrawing';
import SplitText from '@/components/SplitText';
import PathMorphing from '@/components/PathMorphing';

const Page = () => {
  return (
    <div className="py-40 px-8">
      <LazyComponent>
        <CssSpring />
      </LazyComponent>
      <LazyComponent>
        <Drag />
      </LazyComponent>
      <LazyComponent>
        <EnterAnimation />
      </LazyComponent>
      <LazyComponent>
        <ExitAnimation />
      </LazyComponent>
      <LazyComponent>
        <Gestures />
      </LazyComponent>
      <LazyComponent>
        <HtmlContent />
      </LazyComponent>
      <LazyComponent>
        <Keyframes />
      </LazyComponent>
      <LazyComponent>
        <KeyframeWildcards />
      </LazyComponent>
      <LazyComponent>
        <Rotate />
      </LazyComponent>
      <LazyComponent>
        <TransitionOptions />
      </LazyComponent>
      <LazyComponent>
        <UseAnimationFrame />
      </LazyComponent>
      <LazyComponent>
        <FollowPointerWithSpring />
      </LazyComponent>
      <LazyComponent>
        <LayoutAnimation />
      </LazyComponent>
      <LazyComponent>
        <MotionAlongPath />
      </LazyComponent>
      <LazyComponent>
        <Parallax />
      </LazyComponent>
      <LazyComponent>
        <PathDrawing />
      </LazyComponent>
      <LazyComponent>
        <SplitText />
      </LazyComponent>
      <LazyComponent>
        <PathMorphing />
      </LazyComponent>
    </div>
  );
};

export default Page;

const LazyComponent = ({ children }: { children: React.ReactNode }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once when entering viewport
    threshold: 0.1, // Trigger when 10% is visible
    rootMargin: '-200px 0px', // Load 200px before entering viewport
  });

  return <div ref={ref}>{inView ? children : <div style={{ height: '200px' }}>Loading...</div>}</div>;
};
