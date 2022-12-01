import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import './forcefulScroll.css';
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

let reached = false;
let adjusting = 0;

function ScreenComponent(props) {

    const ref = useRef(null);
    const [timeUpdate, setTimeUpdate] = useState(new Date());
    const [topScrollPosition, setTopScrollPosition] = useState(0);
    const [BottomScrollPosition, setBottomScrollPosition] = useState(0);

    const adjust = () => {
        console.log('here');
        if (reached) return;
        const middle = (ref.current.scrollHeight - ref.current.clientHeight) / 2;
        if (Math.abs(middle - ref.current.scrollTop) > 20) {
            // console.log('yeah?', middle, scrollpos);
            let dir = middle - ref.current.scrollTop > 0 ? 1 : -1;
            let range = Math.max(10, Math.abs(middle - ref.current.scrollTop) / 20);
            // range = 10;
            adjusting = Math.min(40, adjusting + 1);
            console.log('range', range);
            ref.current.scrollTop += dir * range;
            setTimeout(adjust, adjusting);
        }
        else {
            adjusting = 0;
            console.log('done');
            ref.current.scrollTop = middle;
            ref.current.scrollTop = ref.current.scrollTop;
        }
        setTopScrollPosition(Math.max(0, Math.sqrt(2 * (middle - ref.current.scrollTop))));
        // setBottomScrollPosition(Math.max(0, Math.sqrt(2 * (middle - scrollHeight + scrollTop + clientHeight))));
    }

    useEffect(() => {
        ref.current.scrollTop = (ref.current.scrollHeight - ref.current.clientHeight) / 2;
    }, []);

    const onScroll = (e) => {
        e.preventDefault();
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


        // console.log('scroll', scrollHeight, scrollTop, clientHeight, scroll, middle, scrollTop - middle);
        if (scroll <= (scrollHeight - clientHeight) / 15 || scrollTop <= (scrollHeight - clientHeight) / 15) {
            console.log('move');
            reached = true;
            ref.current.scrollTop = (ref.current.scrollHeight - ref.current.clientHeight) / 2;
        }
        if (!reached && !adjusting && Math.abs(middle - ref.current.scrollTop) > 1) {
            adjusting = 10;
            setTimeout(adjust, 10);
        }
    }

    return (
        <div className="screen-component" style={{ height: `calc(100vh - ${topScrollPosition}px)`, marginTop: topScrollPosition, marginBottom: -BottomScrollPosition }}>
            <div className="general-container" onScroll={onScroll} ref={ref}>
                <div className="screen-container" >
                    <div className="screen" >
                        {props.screen}
                    </div>
                </div>
            </div >
        </div>
    );
}

export default ScreenComponent;
