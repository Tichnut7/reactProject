import React, { useState, useEffect } from 'react';

const LayoutComponent = () => {
    const [onSmallScreen, setOnSmallScreen] = useState(false);

    useEffect(() => {
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
    }, []);

    let checkScreenSize = () => {
        setOnSmallScreen(window.innerWidth < 600);
    };

    return (
        <div >
            <h1>Hello World!</h1>
            <p>
                the screen is: {`${onSmallScreen ? "small" : "large"}`}
            </p>
        </div>
    );
};
export default LayoutComponent;