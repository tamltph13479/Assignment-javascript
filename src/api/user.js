import instance from "./instance";

export const signin = (user) => {
    const url = "/login";
    return instance.post(url, user);
};

export const signup = (user) => {
    const url = `/signup`;
    return instance.post(url, user);
};