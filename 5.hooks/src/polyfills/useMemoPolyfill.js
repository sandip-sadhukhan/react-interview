import { memo, useEffect, useRef } from "react";

const areEqual = (prevDeps, nextDeps) => {
    if (prevDeps === null) return false;

    if (prevDeps.length !== nextDeps.length) return false;

    for (let i=0; i<prevDeps.length; i++) {
        if (prevDeps[i] !== nextDeps[i]) {
            return false;
        }
    }

    return true;
}

// cb stands for callback function
const useMemoCustom = (cb, deps) => {
    // variable to store cache value
    const memoisedRef = useRef(null);

    // changes in deps
    if (!memoisedRef.current || !areEqual(memoisedRef.current.deps, deps)) {
        memoisedRef.current = {
            value: cb(),
            deps
        }
    }

    // cleanup logic
    useEffect(() => {
        return () => {
            memoisedRef.current = null;
        }
    }, [])

    // return memoised value (if any)
    return memoisedRef.current.value;
}


export default useMemoCustom;