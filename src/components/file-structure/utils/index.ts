const trimName = (
  item:
    | {
        name: string;
        type: "folder";
      }
    | {
        name: string;
        type: "file";
        extension: string;
      }
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
  return `${fileType}-logo`;
  // let logo: string = "";
  // switch (fileType) {
  //   case "js":
  //     logo = "js-logo";
  //     break;
  //   case "jsx":
  //     logo = "jsx-logo";
  //     break;
  //   case "css":
  //     logo = "css-logo";
  //     break;
  //   case "md":
  //     logo = "md-logo";
  //     break;
  //   case "ts":
  //   case "tsx":
  //     logo = "typescript-logo";
  //     break;
  //   default:
  //     logo = "file-logo";
  //     break;
  // }
  // return logo;
};

const validateFile = (
  preValidate: true | undefined,
  value: string,
  existingItems: Array<{ wholeName: string; type: string }>,
  validExtensions: string[],
  item: {
    type: "file" | "folder" | "";
    rename:
      | {
          wholeName?: string;
        }
      | undefined;
  }
): { error: boolean; errorMessage: string; ext?: string } => {
  // const regexp = new RegExp(/^(.*?)(\.[^.]*)?$/);
  const regex = /^([^\\]*)\.(\w+)$/;
  const regexFileName =
    /^[a-zA-Z0-9](?:[a-zA-Z0-9 ._-]*[a-zA-Z0-9])?\.[a-zA-Z0-9_-]+$/;

  const lettersNumbersSymbols = /^[a-z0-9._-]+$/i;

  const isValid = value.match(regexFileName);
  const matches = value.match(regex);
  const isLns = value.match(lettersNumbersSymbols);

  if (matches && isLns) {
    const validFiles = validExtensions;

    const filename = matches[1];
    const ext = matches[2];
    // setExtension(ext);
    if (isValid && isLns && validFiles.includes(ext)) {
      for (const { wholeName: name, type } of existingItems) {
        if (
          name.toLowerCase() === value.toLowerCase() &&
          type === item.type &&
          name.split(".").reverse()[0] === ext
        ) {
          return {
            error: true,
            errorMessage:
              "A file with this name already exists. Please choose a different name.",
          };

          // setError(true);
          // setLogo(errorIcon);
          // setErrorMessage(
          //   "A file with this name already exists. Please choose a different name."
          // );
        }
      }
      return {
        error: false,
        errorMessage: "",
        ext,
      };
      // setLogo(getLogo(ext));
      // setError(false);
      // setErrorMessage("");
    } else if (ext !== "" || !isValid) {
      // setError(true);
      // setLogo(errorIcon);
      if (validFiles.includes(ext)) {
        if (filename === "") {
          return {
            error: true,
            errorMessage:
              "The file name cannot be empty. Please enter a valid file name.",
          };
          // setErrorMessage(
          //   "The file name cannot be empty. Please enter a valid file name."
          // );
        } else {
          return {
            error: true,
            errorMessage:
              "This name is not valid as a file name. Please choose a different name.",
          };
          // setErrorMessage(
          //   "This name is not valid as a file name. Please choose a different name."
          // );
        }
      } else {
        return {
          error: true,
          errorMessage:
            "This file type is not supported. Please choose a different file extension.",
        };
        // setErrorMessage(
        //   "This file type is not supported. Please choose a different file extension."
        // );
      }
    }
  } else if (!isLns && value !== "") {
    return {
      error: true,
      errorMessage:
        "This name is not valid as a file name. Please choose a different name.",
    };
    // setError(true);
    // setLogo(errorIcon);
    // setErrorMessage(
    //   "This name is not valid as a file name. Please choose a different name."
    // );
  } else if (preValidate) {
    return {
      error: true,
      errorMessage:
        "The file type cannot be empty. Please choose a valid file extension.",
    };
    // setError(true);
    // setLogo(errorIcon);
    // setErrorMessage(
    //   "The file type cannot be empty. Please choose a valid file extension."
    // );
  }
  return {
    error: true,
    errorMessage: "",
  };
  // setError(true);
  // setLogo(originalLogo);
  // setErrorMessage("");
};

const validateFolder = (
  value: string,
  existingItems: Array<{ wholeName: string; type: string }>
): { error: boolean; errorMessage: string } => {
  const regex = /^[a-zA-Z0-9_[\]-\s]+$/;
  const isValid = value.match(regex);

  if (isValid || value === "") {
    for (const { wholeName: name, type } of existingItems) {
      if (name.toLowerCase() === value.toLowerCase() && type === "folder") {
        return {
          error: true,
          errorMessage:
            "A folder with this name already exists. Please choose a different name.",
        };
        // setError(true);
        // setLogo(errorIcon);
        // setErrorMessage(
        //   "A folder with this name already exists. Please choose a different name."
        // );
      }
    }
    return {
      error: false,
      errorMessage: "",
    };
    // setError(false);
    // setErrorMessage("");
    // setLogo(originalLogo);
  } else {
    return {
      error: true,
      errorMessage:
        "This name is not valid as a folder name. Please choose a different name.",
    };
    // setError(true);
    // setLogo(errorIcon);
    // setErrorMessage(
    //   "This name is not valid as a folder name. Please choose a different name."
    // );
  }
};

const validate = (
  preValidate: true | undefined,
  item: {
    type: "file" | "folder" | "";
    rename:
      | {
          wholeName?: string;
        }
      | undefined;
  },
  value: string,
  existingItems: Array<{ wholeName: string; type: string }>,
  validExtensions: string[]
) => {
  if (item.type === "file") {
    return validateFile(
      preValidate,
      value,
      existingItems,
      validExtensions,
      item
    );
  } else if (item.type === "folder") {
    return validateFolder(value, existingItems);
  }
  return {
    error: true,
    errorMessage: "",
  };
};

export { getLogo, trimName, validate };
