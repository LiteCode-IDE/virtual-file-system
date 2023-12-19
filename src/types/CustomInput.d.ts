interface CustomInputProps {
    closeCallback: React.Dispatch<React.SetStateAction<boolean>>;
    submit: (value: string | false) => void;
    padding: number;
    show: boolean | undefined;
    item: {
        type: "file" | "folder" | "";
        rename: {
            wholeName?: string;
        } | undefined;
    };
    container: HTMLDivElement | null;
    validExtensions: string[];
    existingItems: Array<{
        wholeName: string;
        type: string;
    }>;
    className?: string;
    style?: React.CSSProperties;
}
declare const CustomInput: React.FC<CustomInputProps>;
export default CustomInput;
