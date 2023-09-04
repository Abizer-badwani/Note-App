
const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, email: action.payload }
        case 'LOGOUT':
            return {email: ""}
        default:
            return state
    }
}

export default reducer