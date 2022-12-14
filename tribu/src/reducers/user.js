import {
  CLOSE_LOGIN_FORM,
  TOGGLE_LOGIN_FORM,
  OPEN_LOGIN_FORM,
  LOGOUT,
  SET_TOKEN,
} from '../actions/loginForm';

export const initialState = {
  loginFormisDisplayed: false,
  logged: false,
  token: '',

  loginForm: {
    username: '',
    password: '',
  },
};

function user(state = initialState, action = {}) {
  switch (action.type) {
    case OPEN_LOGIN_FORM:
      return {
        ...state,
        loginFormIsDisplayed: true,
      };

    case TOGGLE_LOGIN_FORM:
      return {
        ...state,
        loginFormIsDisplayed: !state.loginFormIsDisplayed,
      };

    case CLOSE_LOGIN_FORM:
      return {
        ...state,
        loginFormIsDisplayed: false,
      };

    case SET_TOKEN:
      return {
        ...state,
        logged: true,
        token: action.payload.token,
      };

    case LOGOUT:
      return {
        ...state,

        logged: false,
        token: '',

        loginForm: {
          username: '',
          password: '',
        },
      };

    default:
      return state;
  }
}

export default user;
