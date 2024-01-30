import React from 'react';

// export function Page1(props) {

//     return (
//         <>
//             <h1>Hello</h1>
//             <h2>page number 1</h2>
//             <h3>good luck</h3>
//         </>
//     )
// }

// export function Page2(props) {

//     return (
//         <>
//             <h1>Hello</h1>
//             <button>page number 2</button>
//             <h3>good luck</h3>
//         </>
//     )
// }

function Layout(props) {

    return (
        <>
            <h1>Hello</h1>
            {props.children}
            <h3>good luck</h3>

        </>
    )
}

function Page1(props) {

    return (
        <>
            <Layout><h2>page number 1</h2></Layout>

        </>
    )
}

function Page2(props) {

    return (
        <>
            <Layout><button>page number 2</button></Layout>
        </>
    )
}

export default { Page2, Page1 }
