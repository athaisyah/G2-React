const intialState = {
  name: "John",
  email: "john@mail.com",
  phone: "052364",
  address: "Main street",
};

export const authReducer = (state = intialState, action) => {
  switch (action.type) {
    case "INSERT":
      return {
        name: action.payload_data.name,
        email: action.payload_data.email,
        phone: action.payload_data.phone,
        address: action.payload_data.address,
      };

    default:
      return state;
  }
};

export default authReducer;
