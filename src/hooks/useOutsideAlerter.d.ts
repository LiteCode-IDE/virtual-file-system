/// <reference types="react" />
export default function useOutsideAlerter(ref: React.RefObject<HTMLElement>, callback: React.Dispatch<React.SetStateAction<boolean>> | (() => void)): void;
