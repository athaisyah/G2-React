const initialState = {
  username: "",
  password: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INPUT":
      return {
        username: action.username,
        password: action.password,
      };
    default:
      return state;
  }
};

export default loginReducer;
