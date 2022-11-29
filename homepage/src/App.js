import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import './App.css';
// const isBrowser = typeof window !== `undefined`

// function getScrollPosition({ element, useWindow }) {
//   if (!isBrowser) return { x: 0, y: 0 }

//   const target = element ? element.current : document.body
//   const position = target.getBoundingClientRect()

//   return useWindow
//     ? { x: window.scrollX, y: window.scrollY }
//     : { x: position.left, y: position.top }
// }

// export function useScrollPosition(effect, deps, element, useWindow, wait) {
//   const position = useRef(getScrollPosition({ useWindow }))

//   let throttleTimeout = null

//   const callBack = () => {
//     const currPos = getScrollPosition({ element, useWindow })
//     effect({ prevPos: position.current, currPos })
//     position.current = currPos
//     throttleTimeout = null
//   }

//   useLayoutEffect(() => {
//     const handleScroll = () => {
//       if (wait) {
//         if (throttleTimeout === null) {
//           throttleTimeout = setTimeout(callBack, wait)
//         }
//       } else {
//         callBack()
//       }
//     }

//     window.addEventListener('scroll', handleScroll)

//     return () => window.removeEventListener('scroll', handleScroll)
//   }, deps)
// }




function App() {

  const ref = useRef(null);
  const [timeUpdate, setTimeUpdate] = useState(new Date());
  const [adjusting, setAdjusting] = useState(7);
  const [topScrollPosition, setTopScrollPosition] = useState(0);
  const [BottomScrollPosition, setBottomScrollPosition] = useState(0);

  const adjust = () => {
    console.log('here', adjusting);
    const middle = (ref.current.scrollHeight - ref.current.clientHeight) / 2;
    if (Math.abs(middle - ref.current.scrollTop) > 10) {
      console.log('yeah?', middle, ref.current.scrollTop);
      ref.current.scrollTop = ref.current.scrollTop + (middle - ref.current.scrollTop) * (1 / adjusting);
      setAdjusting(adjusting - 1);
      setTimeout(adjust, 10);
    }
    else {
      console.log('done');
      setAdjusting(1);
    }
  }

  useEffect(() => {
    setAdjusting(8);
    adjust();
  }, []);

  const onScroll = (e) => {
    const { scrollHeight, scrollTop, clientHeight } = e.target;
    const middle = (scrollHeight - clientHeight) / 2;
    const scroll = scrollHeight - scrollTop - clientHeight;



    // let now = new Date()
    // var seconds = (now.getTime() - timeUpdate.getTime()) / 1000;
    // const intervalID = setInterval(() => {
    //   console.log("heyo");
    //   ref.current.scrollTop = scrollTop + (scrollTop - middle) / 10
    // }, 100)

    // setTimeUpdate(now);
    if (adjusting == 1) {
      setAdjusting(100);
      adjust();
    }


    console.log('scroll', scrollHeight, scrollTop, clientHeight, scroll, middle, scrollTop - middle);
    setTopScrollPosition(Math.max(0, Math.sqrt(2 * (middle - scrollTop))));
    setBottomScrollPosition(Math.max(0, Math.sqrt(2 * (middle - scroll))));
    if (scroll == 0 || scrollTop == 0) {
      alert('move')
    }
  }

  return (
    <div className="screen-component" style={{ height: `calc(100vh - ${topScrollPosition}px)`, marginTop: topScrollPosition, marginBottom: -BottomScrollPosition }}>
      <div className="general-container" onScroll={onScroll} ref={ref}>
        <div className="screen-container" >
          <div className="screen" >
            <p> hi </p>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            <h1>Hi</h1>
            screen 1
          </div>
        </div>
      </div >
    </div>
  );
}

export default App;
