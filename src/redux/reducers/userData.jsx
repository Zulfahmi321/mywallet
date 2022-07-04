import { getUserDataString, PENDING, FULFILLED, REJECTED } from "redux/actionCreators/actionString";
const initialState = {
    isError: null,
    message: "",
    userData: {}
}

const userDataReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case getUserDataString + PENDING:
            return { ...initialState, isError: null }
        case getUserDataString + FULFILLED:
            return { ...prevState, isError: false, message: action.payload.data.msg, userData: action.payload.data.data }
        case getUserDataString + REJECTED:
            return { ...prevState, isError: true, message: action.payload.data.msg }
        default:
            return prevState
    }
}

export default userDataReducer