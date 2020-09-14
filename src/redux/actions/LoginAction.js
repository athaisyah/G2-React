// export const inputAction = (data) => {
//   return {
//     type: "INPUT",
//     email: data.email,
//     password: data.password,
//   };
// };

export const setInput = (data) => {
  return {
    type: "INPUT",
    email: data.email,
    password: data.password,
  };
};
