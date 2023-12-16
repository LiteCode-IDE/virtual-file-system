import React from "react";
interface HighlightedTextProps {
    hightlight: string;
    highlightClass?: string;
    lineOfText: string;
    lineNum: number;
    openAtLine: (lineNum: number) => void;
}
declare const HighlightedText: React.FC<HighlightedTextProps>;
export default HighlightedText;
