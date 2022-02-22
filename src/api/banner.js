import instance from "./instance";

export const getAll = () => {
    const url = "/banners";
    return instance.get(url);
};
export const get = (id) => {
    const url = `/banners/${id}`;
    return instance.get(url);
};
export const add = (id) => {
    const url = `/banners`;
    return instance.post(url, id);
};
export const remove = (id) => {
    const url = `/banners/${id}`;
    return instance.delete(url);
};
export const upload = (image) => {
    const url = `/banners/${image.id}`;
    return instance.put(url, image);
};