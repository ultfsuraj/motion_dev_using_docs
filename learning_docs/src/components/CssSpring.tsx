'use client';

import { spring } from 'motion';
import { useState } from 'react';

const CssSpring = () => {
  const [state, setState] = useState(false);

  return (
    <fieldset>
      <legend>CSS Spring</legend>
      <div id="cssSpringContainer">
        <div className="flex flex-col items-center justify-center gap-5">
          <div
            className="w-[100px] h-[100px] bg-teal-500 rounded-lg"
            style={{
              transform: state ? 'translateX(-100%)' : 'translateX(100%) rotate(180deg)',
              transition: `transform ${spring(0.6, 0.8)}`,
            }}
            data-state={state}
          ></div>
          <button className="bg-teal-700 rounded-md px-3 py-1 m-3" onClick={() => setState(!state)}>
            Toggle Position
          </button>
        </div>
      </div>
    </fieldset>
  );
};

export default CssSpring;
