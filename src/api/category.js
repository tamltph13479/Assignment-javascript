import instance from "./instance";

export const getAll = () => {
    const url = "/postCates";
    return instance.get(url);
};
export const get = (id) => {
    const url = `/postCates/${id}`;
    return instance.get(url);
};
export const add = (id) => {
    const url = `/postCates`;
    return instance.post(url, id);
};
export const remove = (id) => {
    const url = `/postCates/${id}`;
    return instance.delete(url);
};
export const upload = (category) => {
    const url = `/postCates/${category.id}`;
    return instance.put(url, category);
};
export const getCate = (id) => {
    const url = `/postCates/${id}?_embed=posts`;
    return instance.get(url);
};