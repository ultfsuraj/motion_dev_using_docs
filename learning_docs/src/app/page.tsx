'use client';

import React from 'react';

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
    <div className="py-4 px-8">
      <CssSpring />
      <Drag />
      <EnterAnimation />
      <ExitAnimation />
      <Gestures />
      <HtmlContent />
      <Keyframes />
      <KeyframeWildcards />
      <Rotate />
      <TransitionOptions />
      <UseAnimationFrame />
      <FollowPointerWithSpring />
      <LayoutAnimation />
      <MotionAlongPath />
      <Parallax />
      <PathDrawing />
      <SplitText />
      <PathMorphing />
    </div>
  );
};

export default Page;
