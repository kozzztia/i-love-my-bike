

const dictinary = {
    header: "header",
    navigation: "navigation",
    bannerTitle: "Promotion",
    top: "Best three bikes in the world"
};

export const getDictionary = (key: keyof typeof dictinary): string => dictinary[key];
