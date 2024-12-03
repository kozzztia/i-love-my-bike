

const dictinary = {
    header: "header",
    navigation: "navigation",
    bannerTitle: "Promotion",
    topTitle: "Best three bikes in the world",
    contactsTitle: "Contacts",
    aboutTitle: "About",
    errorTitle: "Error",
    cartTitle: "Cart",
    bikeTitle: "Bike",
    linkTitle: "More info about :"
};

export const getDictionary = (key: keyof typeof dictinary): string => dictinary[key];
