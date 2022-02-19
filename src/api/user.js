import instance from "./instance";

export const signin = (user) => {
    const url = "/login";
    return instance.post(url, user);
};

export const signup = (user) => {
    const url = `/signup`;
    return instance.post(url, user);
};
export const getAll = () => {
    const url = "/users";
    return instance.get(url);
};
export const get = (id) => {
    const url = `/users/${id}`;
    return instance.get(url);
};
export const add = (id) => {
    const url = `/users`;
    return instance.post(url, id);
};
export const remove = (id) => {
    const url = `/users/${id}`;
    return instance.delete(url);
};
export const upload = (user) => {
    const url = `/users/${user.id}`;
    return instance.put(url, user);
};