declare const trimName: (item: {
    name: string;
    type: "folder";
} | {
    name: string;
    type: "file";
    extension: string;
}) => string;
declare const getLogo: (fileType: string) => string;
declare const validate: (preValidate: true | undefined, item: {
    type: "file" | "folder" | "";
    rename: {
        wholeName?: string;
    } | undefined;
}, value: string, existingItems: Array<{
    wholeName: string;
    type: string;
}>, validExtensions: string[]) => {
    error: boolean;
    errorMessage: string;
};
export { getLogo, trimName, validate };
