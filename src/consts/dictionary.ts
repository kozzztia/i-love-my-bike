

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
    linkTitle: "Link to ",
    remove: "Remove",
    add: "Add",
    cartEmpty: "The cart is empty for now!",
    modalPhone: "insert phone number",
    modalEmpty: "The cart is empty for now! if you have some question send us message",
};

export const getDictionary = (key: keyof typeof dictinary): string => dictinary[key];
