import instance from "./instance";

export const getAll = () => {
    const url = "/categorys";
    return instance.get(url);
};
export const get = (id) => {
    const url = `/categorys/${id}`;
    return instance.get(url);
};
export const add = (id) => {
    const url = `/categorys`;
    return instance.post(url, id);
};
export const remove = (id) => {
    const url = `/categorys/${id}`;
    return instance.delete(url);
};
export const upload = (category) => {
    const url = `/categorys/${category.id}`;
    return instance.put(url, category);
};