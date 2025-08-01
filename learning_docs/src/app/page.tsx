'use client';

import React, { lazy, Suspense } from 'react';
import { useInView } from 'react-intersection-observer';

const CssSpring = lazy(() => import('@/components/CssSpring'));
const Drag = lazy(() => import('@/components/Drag'));
const EnterAnimation = lazy(() => import('@/components/EnterAnimation'));
const ExitAnimation = lazy(() => import('@/components/ExitAnimation'));
const Gestures = lazy(() => import('@/components/Gestures'));
const HtmlContent = lazy(() => import('@/components/HtmlContent'));
const Keyframes = lazy(() => import('@/components/Keyframes'));
const KeyframeWildcards = lazy(() => import('@/components/KeyframeWildcards'));
const Rotate = lazy(() => import('@/components/Rotate'));
const TransitionOptions = lazy(() => import('@/components/TransitionOptions'));
const UseAnimationFrame = lazy(() => import('@/components/UseAnimationFrame'));
const FollowPointerWithSpring = lazy(() => import('@/components/FollowPointerWithSpring'));
const LayoutAnimation = lazy(() => import('@/components/LayoutAnimation'));
const MotionAlongPath = lazy(() => import('@/components/MotionAlongPath'));
const Parallax = lazy(() => import('@/components/Parallax'));
const PathDrawing = lazy(() => import('@/components/PathDrawing'));
const SplitText = lazy(() => import('@/components/SplitText'));
const PathMorphing = lazy(() => import('@/components/PathMorphing'));
const DragLock = lazy(() => import('@/components/DragLock'));
const ScrollAnimation = lazy(() => import('@/components/ScrollAnimation'));
const UsePresence = lazy(() => import('@/components/UsePresence'));
const UseTime = lazy(() => import('@/components/UseTime'));
const SharedLayout = lazy(() => import('@/components/SharedLayout'));
const CrossTick = lazy(() => import('@/components/CrossTick'));
const Hamburger = lazy(() => import('@/components/Hamburger'));
const Experiment = lazy(() => import('@/components/Experiment'));

const Page = () => {
  return (
    <div className="py-40 px-8 flex flex-col justify-center">
      <LazyComponent>
        <Experiment />
      </LazyComponent>
      <LazyComponent>
        <Hamburger />
      </LazyComponent>
      <LazyComponent>
        <CrossTick />
      </LazyComponent>
      <LazyComponent>
        <SharedLayout />
      </LazyComponent>
      <LazyComponent>
        <UseTime />
      </LazyComponent>
      <LazyComponent>
        <UsePresence />
      </LazyComponent>
      <LazyComponent>
        <ScrollAnimation />
      </LazyComponent>
      <LazyComponent>
        <DragLock />
      </LazyComponent>
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
    rootMargin: '-200px 0px', // Load -200px before entering viewport
  });

  return (
    <div ref={ref}>
      {inView ? (
        <Suspense
          fallback={
            <h2 className="m-6 w-72 h-40 text-center content-center text-lg text-emerald-400 border border-emerald-600 rounded-md">
              Loading Component...
            </h2>
          }
        >
          {children}
        </Suspense>
      ) : (
        <h2 className="m-6 w-72 h-40 text-center content-center text-lg text-red-400 border border-red-600 rounded-md">
          Placeholder
        </h2>
      )}
    </div>
  );
};
