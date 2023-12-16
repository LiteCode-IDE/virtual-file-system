import React from "react";
interface DialogProps {
    title: string;
    content: string;
    actionText: string;
    close: (show: boolean) => void;
    action: () => void;
    className?: string;
}
declare const Dialog: React.FC<DialogProps>;
export default Dialog;
