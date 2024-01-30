import React from 'react';

// function Page1(props) {
    
    
    
//     return (
//         <>
//             <h1>Hello</h1>
//             <p>my name is Tami</p>
//         </>
//     );
// }

// function Page2(props) {
    
    
    
//     return (
//         <>
//             <h1>Hello</h1>
//             <p>my family is Loberbom</p>
//         </>
//     );
// }




function Header(props) {
    return (
        <h1>Hello</h1>
    );
}

function Page1(props) {
    return (
        <>
            <Header />
            <p>my name is Tami</p>
        </>
    );
}

function Page2(props) {
    return (
        <>
            <Header />
            <p>my family is Loberbom</p>
        </>
    );
}

export default { Page1, Page2 }