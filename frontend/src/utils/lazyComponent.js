import { lazy } from "react";

const lazyComponent = (importCallBack, delay = 400) =>
    lazy(() =>
        new Promise((resolve) => {
            setTimeout(() => resolve(importCallBack()), delay);
        })
    );

export default lazyComponent;
