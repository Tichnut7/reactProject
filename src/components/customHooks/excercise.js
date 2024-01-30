import React, { useState, useEffect } from 'react';

function Clock(props) {
    const [ticks, setTicks] = useState(0);

    
    function tick() {
        setTicks(val => val + 1);
    }

    useEffect(function () {
        const timer = setInterval(tick, 1000);

        return function cancel() {
            clearInterval(timer);
        }
    }, []);

    return (
        <div>
            Ticks... {ticks}
        </div>
    );
}


function NewsTicker(props) {
    const { items } = props;
    const [itemIndex, setItemIndex] = useState(0);

    function tick() {
        setItemIndex(val => (val + 1) % items.length);
    }

    useEffect(function () {
        const timer = setInterval(tick, 1000);

        return function cancel() {
            clearInterval(timer);
        }
    }, []);

    return (

        <p>{items[itemIndex]}</p>
    )
}

// // 
// function useTimer(ms = 1000) {
//     const [ticks, setTicks] = useState(0);

//     function tick() {
//         setTicks(v => v + 1);
//     }

//     useEffect(function () {
//         const timer = setInterval(tick, ms);

//         return function cancel() {
//             clearInterval(timer);
//         }
//     }, []);

//     return ticks;
// }


// function Clock(props) {
//     const ticks = useTimer();

//     return (
//         <div>
//             Ticks... {ticks}
//         </div>
//     );
// }



// function NewsTicker(props) {
//     const { items } = props;
//     // const ticks = useTimer();
//     const ticks = useTimer(2000);


//     return (
//         <p>{items[ticks % items.length]}</p>
//     )
// }

export default { Clock, NewsTicker }