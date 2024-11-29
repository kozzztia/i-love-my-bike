

const dictinary = {
    header: "header",
    navigation: "navigation",
    bannerTitle: "Promotion",
    topTitle: "Best three bikes in the world",
    contactsTitle: "Contacts",
    aboutTitle: "About",
    errorTitle: "Error",
};

export const getDictionary = (key: keyof typeof dictinary): string => dictinary[key];
