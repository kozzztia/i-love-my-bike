const key = "bikes";


export const toggleItem = (id: number): void => {

    const existingData = localStorage.getItem(key);

    if (existingData) {
        const ids = existingData.split(",").map(Number);
        if (!ids.includes(id)) {
            ids.push(id);
            localStorage.setItem(key, ids.join(","));
        }else if (ids.includes(id)) {
            ids.splice(ids.indexOf(id), 1);
            localStorage.setItem(key, ids.join(","));
        }
    } else {

        localStorage.setItem(key, id.toString());
    }
};
