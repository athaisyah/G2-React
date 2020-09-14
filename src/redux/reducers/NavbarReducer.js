const initialState = {
  isLogin: false,
  email: "",
};

const navbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        isLogin: true,
      };
    default:
      return state;
  }
};

export default navbarReducer;
