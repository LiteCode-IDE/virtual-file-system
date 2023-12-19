import { type ItemType } from "../state/features/structure/structureSlice";
interface ItemTitleProps {
    item: {
        id: string;
        name: string;
        type: ItemType;
        collapsed?: boolean;
        extension?: string;
    };
    onClickE: (e: React.MouseEvent<HTMLDivElement>) => void;
    className?: string;
}
declare const ItemTitle: React.FC<ItemTitleProps>;
export default ItemTitle;
