import React, { useState, useEffect } from 'react';
import useWindowWidth from './customHook.js';

const MyComponent = () => {
    const onSmallScreen = useWindowWidth();

    const items = ['aaa', 'bbb', 'ccc', 'ddd', 'fff'];
    return (
        <div>
            {onSmallScreen ?
                <ul>
                    <li>{items[0]}</li>
                    <li>{items[1]}</li></ul> :
                <ul>
                    {items.map(item => <li key={item}>{item}</li>)}
                </ul>
            }
        </div>
    )
}



const MyComponent2 = () => {
    const onSmallScreen = useWindowWidth();


    return (
        <div>
            {onSmallScreen ?
                <p>the screen is small</p> :
                <p>the screen is large</p>
            }
        </div>
    )
}



// const MyComponent = () => {
//     const [isScreenSmall, setIsScreenSmall] = useState(false);

//     let checkScreenSize = () => {
//         setIsScreenSmall(window.innerWidth < 600);
//     };
//     useEffect(() => {
//         checkScreenSize();
//         window.addEventListener("resize", checkScreenSize);

//         return () => window.removeEventListener("resize", checkScreenSize);
//     }, []);

//     const items = ['aaa', 'bbb', 'ccc', 'ddd', 'fff'];
//     return (
//         <div>
//             {isScreenSmall ?
//                 <ul>
//                     <li>{items[0]}</li>
//                     <li>{items[1]}</li>
//                 </ul> :
//                 <ul>
//                     {items.map(item => <li key={item}>{item}</li>)}
//                 </ul>
//             }
//         </div>
//     )
// }


// const MyComponent2 = () => {

//     const [isScreenSmall, setIsScreenSmall] = useState(false);

//     let checkScreenSize = () => {
//         setIsScreenSmall(window.innerWidth < 600);
//     };
//     useEffect(() => {
//         checkScreenSize();
//         window.addEventListener("resize", checkScreenSize);

//         return () => window.removeEventListener("resize", checkScreenSize);
//     }, []);

//     return (
//         <div>
//             {isScreenSmall ?
//                 <p>the screen is small</p> :
//                 <p>the screen is large</p>
//             }
//         </div>
//     )
// }


export default { MyComponent, MyComponent2 };