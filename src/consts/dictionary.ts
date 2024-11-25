
const dictinary = {
    header: "header",
    navigation: "navigation",
    bannerTitle: "banner",
};

export const getDictionary = (key: keyof typeof dictinary): string => dictinary[key];
