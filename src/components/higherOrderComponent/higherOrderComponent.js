import React, { useEffect, useState } from 'react';


// //class component
// export default class          extends React.Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             isScreenSmall: false
//         }
//     }

//     checkScreenSize = () => {
//         this.setState({ isScreenSmall: window.innerWidth < 600 });
//     };

//     componentDidMount() {
//         this.checkScreenSize();
//         window.addEventListener("resize", this.checkScreenSize);
//     }
//     componentWillUnmount() {
//         window.removeEventListener("resize", this.checkScreenSize);
//     }
//     render() {
//         return (
//             <div>
//                 {this.state.isScreenSmall ?
//                     <p>the screen is small</p> :
//                     <p>the screen is large</p>}
//             </div>
//         )
//     }
// }


//HOC which return class
function hocscreenSize(Component) {

    return class HOCscreenSize extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                isScreenSmall: false
            }
        }

        checkScreenSize = () => {
            this.setState({ isScreenSmall: window.innerWidth < 600 });
        }

        componentDidMount() {
            this.checkScreenSize();
            window.addEventListener("resize", this.checkScreenSize);
        }
        componentWillUnmount() {
            window.removeEventListener("resize", this.checkScreenSize);
        }

        render() {
            return (
                <Component isScreenSmall={this.state.isScreenSmall}></Component>
            )
        }
    }
}

const Screen = hocscreenSize(class ScreenSize extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>

                {this.props.isScreenSmall ?
                    <p>the screen is small</p> :
                    <p>the screen is large</p>}
            </div>
        )
    }
});

const ListItems = hocscreenSize(class ListItems extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        const items = ['aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff'];
        return (
            <div>
                {this.props.isScreenSmall ?
                    <ul>
                        <li key='1'>{items[0]}</li>
                        <li key='2'>{items[1]}</li>
                    </ul> :
                    <ul>
                        {items.map(item => <li key={item}>{item}</li>)}
                    </ul>
                }
            </div>
        )
    }
})
export default { ListItems, Screen };



// //HOC which return hook
// function hocscreenSizeReturnHook(Component) {
//     return function HOCscreenSize() {
//     return function HOCscreenSize() {


//         const [isScreenSmall, setIsScreenSmall] = useState(false);

//         let checkScreenSize = () => {
//             setIsScreenSmall(window.innerWidth < 600);
//         }

//         useEffect(() => {
//             checkScreenSize();
//             window.addEventListener("resize", checkScreenSize);

//             return () => window.removeEventListener("resize", checkScreenSize);
//         }, []);

//         return (
//             <Component isScreenSmall={isScreenSmall}></Component>
//         )
//     }
// }
// export default hocscreenSizeReturnHook;