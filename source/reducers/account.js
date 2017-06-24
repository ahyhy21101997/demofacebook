import * as config from '../actions/config';

var initialState = {
    loggedin: false
}

const account = (state = initialState, action) => {
    switch (action.type) {
        case config.ON_LOGIN:
            return Object.assign({}, state, { loggedin: action.loggedin });
        default:
            return state;
    }
}

export default account;