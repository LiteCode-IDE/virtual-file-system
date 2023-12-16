import React from "react";
interface MenuContextProps {
    top: number;
    left: number;
    showContext: boolean;
    setShowContext: React.Dispatch<React.SetStateAction<boolean>>;
    actions: Array<{
        title: string;
        handler: () => void;
        disabled: boolean;
        type?: undefined;
    } | {
        type: string;
        handler: () => void;
        title?: undefined;
        disabled?: undefined;
    }>;
    className?: string;
    clickableAreaClassName?: string;
    hrColor?: string;
}
declare const MenuContext: React.FC<MenuContextProps>;
export default MenuContext;
