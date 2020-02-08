const loginError = 'ERROR_IN_LOGGING';
const loginSuccess = 'LOG_IN_SUCCESS';
var validEmail = 'hruday@gmail.com';
var validPassword = 'hruday123';

export function login(email, password) {
    return dispatch => {
        dispatch(successLogin(false));
        dispatch(errorLogin(null));
        callLogin(email, password, error => {
            if (!error) {
                dispatch(successLogin(true));
            } else {
                dispatch(errorLogin(error));
            }
        });
    }
}

function successLogin(issuccessLogin) {
    return {
        type: loginSuccess,
        issuccessLogin
    };
}

function errorLogin(errorLogin) {
    return {
        type: loginError,
        errorLogin
    }
}

function callLogin(email, password, callback) {
    if (email === validEmail && password === validPassword) {
        return callback(null);
    } else {
        return callback(new Error('You have entered invalid email-id or password!'));
    }
}

export default function reducer(state = {
    isLoginPending: false,
    errorLogin: null
}, action) {
    switch (action.type) {
        case loginSuccess:
            return Object.assign({}, state, {
              issuccessLogin: action.issuccessLogin
            });
        case loginError:
            return Object.assign({}, state, {
              errorLogin: action.errorLogin
            });
        default:
          return state;
    }
}