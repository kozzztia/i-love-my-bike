const key = "bikes";

export const getLocalBikes= (): number[] => {
    const data = localStorage.getItem(key);
    return data ? data.split(",").map(Number) : [];
};

const setLocalBikes = (data: number[]) => {
    localStorage.setItem(key, data.join(","));
};


export const toggleItem = (id: number): void => {
    const ids = getLocalBikes();
    const index = ids.indexOf(id);

    if (index === -1) {
        ids.push(id); 
    } else {
        ids.splice(index, 1); 
    }
    setLocalBikes(ids);
};

export const clearStore = () => {
    localStorage.removeItem(key);
}