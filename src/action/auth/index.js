export const insert = (obj) => {
  return {
    type: "INSERT",
    payload_data: obj,
  };
};
