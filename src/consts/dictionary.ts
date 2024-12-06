

const dictinary = {
    header: "header",
    navigation: "navigation",

    bannerTitle: "Promotion",
    bannerPrice: "price",
    bannerRating: "rating",
    bannerDescription: "Short description",
    bannerStatus: "Best price today!!!",

    topTitle: "Best three bikes in the world",
    contactsTitle: "Contacts",
    aboutTitle: "About",
    errorTitle: "Error",
    cartTitle: "Cart",
    bikeTitle: "Bike",
};

export const getDictionary = (key: keyof typeof dictinary): string => dictinary[key];
