export interface BreadcrumbsProps {
    containerClassName?: string;
    textClassName?: string;
    miniFolderCollapseBtnClassName?: string;
    miniFolderCollapseBtnStyle?: React.CSSProperties;
    miniFolderContainerClassName?: string;
    itemTitleClassName?: string;
    onBreadcrumbFileClick?: (id: string) => void;
}
declare const Breadcrumbs: React.FC<BreadcrumbsProps>;
export default Breadcrumbs;
