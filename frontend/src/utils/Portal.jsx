import React from "react";
import ReactDOM from "react-dom";

const Portal = ({ children }) => {
    return ReactDOM.createPortal(
        children,
        document.getElementById("portal-root") // Make sure to add this div in index.html
    );
};

export default Portal;