import React, { useRef } from "react";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import deleteLogo from "../../assets/delete.svg";
import cross from "../../assets/cross.svg";

interface DialogProps {
  title: string;
  content: string;
  actionText: string;
  close: (show: boolean) => void;
  action: () => void;
  className?: string;
}

const Dialog: React.FC<DialogProps> = ({
  title,
  content,
  actionText,
  close,
  action,
  className
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  useOutsideAlerter(dialogRef, () => {
    close(false);
  });
  return (
    <div className="backdrop-brightness-50 absolute top-0 z-50 flex w-full h-full justify-center items-start pt-6 select-none">
      <div
        ref={dialogRef}
        className={`bg-dark-hover border border-slate-600 shadow-sm p-4 rounded-lg flex flex-col my-2 h-fit w-96 text-white ${className}`}>
        <div className="flex flex-row justify-between">
          <span className="text-2xl font-semibold">{title}</span>
          <span className="self-start">
            <img
              src={cross}
              onClick={() => {
                close(false);
              }}
              alt="close"
              className="transition-colors p-1 h-5 w-5 cursor-pointer hover:bg-slate-500 rounded-md align-baseline"
            />
          </span>
        </div>
        <div className="text-sm my-4">{content}</div>
        <div className="flex justify-between my-2">
          <div className="w-32">&nbsp;</div>
          <div className="flex justify-between pl-12 w-full">
            <button
              type="button"
              onClick={() => {
                close(false);
              }}
              className="text-sm px-2 py-1 rounded-lg bg-slate-600 hover:bg-slate-500 transition-colors">
              Cancel
            </button>
            <button
              type="button"
              onClick={() => {
                action();
              }}
              className="text-sm bg-red-700 hover:bg-red-500 px-2 py-1 rounded-lg transition-colors flex flex-row items-center">
              <img
                alt={"delete"}
                src={deleteLogo}
                className="w-4 h-4 mr-1"
              />
              {actionText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
