import { type ValidExtensions } from "../../../state/features/structure/structureSlice";

const trimName = (
  item:
    | {
        name: string;
        type: "folder";
      }
    | {
        name: string;
        type: "file";
        extension: ValidExtensions;
      },
) => {
  let newName = "";
  if (item.type === "file") {
    const fullName = `${item.name}.${item.extension}`;
    // const [fname, ext] = fullName.split(".");
    // if (fname.length > 10) {
    //   newName = `${fname.slice(0, 10)}...${ext}`;
    // } else {
    //   newName = fullName;
    // }
    newName = fullName;
  } else if (item.type === "folder") {
    // if (item.name.length > 12) {
    //   newName = `${item.name.slice(0, 12)}...`;
    // } else {
    //   newName = item.name;
    // }
    newName = item.name;
  }
  return newName;
};

const getLogo = (fileType: string) => {
  let logo: string = "";
  switch (fileType) {
    case "js":
      logo = "js-logo";
      break;
    case "jsx":
      logo = "jsx-logo";
      break;
    case "css":
      logo = "css-logo";
      break;
    case "md":
      logo = "readme-logo";
      break;
    case "ts":
    case "tsx":
      logo = "typescript-logo";
      break;
    default:
      logo = "file-logo";
      break;
  }
  return logo;
};

export { getLogo, trimName };
