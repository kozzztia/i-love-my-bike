type Section = { [key: string]: string };

type Dictionary = {
    header: Section;
    navigation: Section;
    main: Section;
    footer: Section;
};

const dictionary: Dictionary = {
    header: { title: "Header"},
    navigation: { title: "Navigation"},
    main: { title: "Main"},
    footer: { title: "Footer"},
};

export function getDictionary<Key extends keyof Dictionary>(key: Key): Dictionary[Key] {
    return dictionary[key];
}