import { useEffect } from "react";
import { createPortal } from "react-dom";
export const usePrependPortal = (component, container) => {
    const portalContainer = document.createElement("div");
    useEffect(() => {
        if (!container)
            return;
        container.prepend(portalContainer);
        return () => {
            container.removeChild(portalContainer);
        };
    }, [container, portalContainer]);
    return createPortal(component, portalContainer);
};
