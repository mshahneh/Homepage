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
  const [topScrollPosition, setTopScrollPosition] = useState(0);
  const [BottomScrollPosition, setBottomScrollPosition] = useState(0);

  const adjust = () => {
    const middle = (ref.current.scrollHeight - ref.current.clientHeight) / 2;
    if (Math.abs(middle - ref.current.scrollTop) > 10) {
      // console.log('yeah?', middle, ref.current.scrollTop);
      let dir = middle - ref.current.scrollTop > 0 ? 1 : -1;
      let range = Math.max(10, Math.abs(middle - ref.current.scrollTop) / 10);
      ref.current.scrollTop += dir * range;
      setTimeout(adjust, 100);
    }
    else {
      // console.log('done');
      ref.current.scrollTop = middle;
    }
  }

  useEffect(() => {
    adjust();
  }, []);

  const onScroll = (e) => {
    console.log('scrolling', e.target.scrollTop);
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
    if (middle - ref.current.scrollTop) {
      // console.log('adjusting', adjusting);
      adjust();
    }


    // console.log('scroll', scrollHeight, scrollTop, clientHeight, scroll, middle, scrollTop - middle);
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
