export const setInput = (data) => {
  return {
    type: "INPUT",
    username: data.username,
    password: data.password,
  };
};
