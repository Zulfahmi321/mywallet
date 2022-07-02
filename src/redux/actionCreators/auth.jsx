import { doLogin } from "../../modules/axios";
import { loginString } from "./actionString";

export const loginAction = (body) => ({
    type: loginString,
    payload: doLogin(body)
});