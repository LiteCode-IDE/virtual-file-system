import React from "react";

interface HighlightedTextProps {
  hightlight: string;
  highlightClass?: string;
  lineOfText: string;
  lineNum: number;
  openAtLine: (lineNum: number) => void;
}

const HighlightedText: React.FC<HighlightedTextProps> = ({
  hightlight,
  lineOfText,
  lineNum,
  openAtLine,
  highlightClass
}) => {

  const parts = lineOfText.split(new RegExp(`(${hightlight})`, "gi"));
  return (
    <div
      onClick={() => {
        openAtLine(lineNum);
      }}
      className="whitespace-nowrap my-1 ml-3 pl-1 cursor-pointer hover:bg-dark-hover">
      {parts.map((part) =>
        (() => {
          if (part === hightlight) {
            return <span className={`bg-orange-400 text-black ${highlightClass}`}>{part}</span>;
          }
          return part;
        })(),
      )}
    </div>
  );
};

export default HighlightedText;
