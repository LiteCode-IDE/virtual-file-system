import { type ItemType } from "../state/features/structure/structureSlice";
interface ThreeDotsProp {
    item: {
        id: string;
        type: ItemType;
    };
    selected: string;
    showBlue: boolean;
    primaryClass?: string;
    secondaryClass?: string;
    onClickE: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
declare const ThreeDots: React.FC<ThreeDotsProp>;
export default ThreeDots;
