const initialState = {
  email: "",
  password: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INPUT":
      return {
        email: action.email,
        password: action.password,
      };
    default:
      return state;
  }
};

export default loginReducer;
