interface FileActionProps {
    newFile: () => void;
    newFolder: () => void;
    download: () => void;
    collapseArea: () => void;
    collapsed: boolean;
    projectName?: string;
    btnClassName?: string;
    disableTooltip?: true;
    disableCollapse?: true;
    disableDownload?: true;
}
declare const FileActions: React.FC<FileActionProps>;
export default FileActions;
