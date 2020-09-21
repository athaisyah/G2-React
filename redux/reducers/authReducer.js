const initialState = {
  isLoggedIn: false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'IS_LOGIN':
      return {
        isLoggedIn: true,
      };
    case 'IS_LOGOUT':
      return {
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default AuthReducer;
