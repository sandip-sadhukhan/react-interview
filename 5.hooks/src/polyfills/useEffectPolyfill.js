import { useRef } from "react";

const useEffectCustom = (effect, deps) => {
    const isFirstRender = useRef(true);
    const prevDeps = useRef([]);

    // First render
    if (isFirstRender.current) {
        isFirstRender.current = false;
        const cleanup = effect();
        return () => {
            if (cleanup && typeof cleanup === "function") {
                cleanup();
            }
        };
    }

    // Deps changes and No Dep array
    const depsChanged = deps? (JSON.stringify(deps) !== JSON.stringify(prevDeps.current)) : true;

    if (depsChanged) {
        const cleanup = effect();
        return () => {
            if (cleanup && typeof cleanup === "function" && deps) {
                cleanup();
            }
        };
    }

    // NOTE: For cleanup some DOM removed cases can't be implemented as it reqiure
    // react's internal reconciallation machnism. We can run after deps array changes

    prevDeps.current = deps || [];
};

export default useEffectCustom;