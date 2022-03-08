import { types } from "../types/types";

export const setError = (err) => ({
    type: types.uiSetEror,
    payload: err
});

export const removeError = () => ({
    type: types.uiRemoveEror   
});
