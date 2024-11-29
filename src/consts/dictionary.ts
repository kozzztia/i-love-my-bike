

const dictinary = {
    header: "header",
    navigation: "navigation",
    bannerTitle: "Promotion",
    topTitle: "Best three bikes in the world",
};

export const getDictionary = (key: keyof typeof dictinary): string => dictinary[key];
