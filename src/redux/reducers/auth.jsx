import { FULFILLED, loginString, PENDING, REJECTED } from "../actionCreators/actionString";

const initialState = {
    isError: null,
    message: "",
    data: {}
}

const authReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case loginString + PENDING:
            return { ...initialState, isError: null }
        case loginString + FULFILLED:
            return {
                ...prevState,
                isError: false,
                message: action.payload.data.msg,
                data: action.payload.data.data
            }
        case loginString + REJECTED:
            return {
                ...prevState,
                isError: true,
                message: action.payload.response.data.msg
            }

        default:
            return prevState
    }
}

export default authReducer