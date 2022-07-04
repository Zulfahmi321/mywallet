import { getUserData } from "modules/axios";
import { getUserDataString } from "./actionString";

export const getUserDataAction = (id, token) => ({
    type: getUserDataString,
    payload: getUserData(id, token)
})