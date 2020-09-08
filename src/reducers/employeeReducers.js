export const employeeReducers = (state, action) => {
  var list = JSON.parse(localStorage.getItem("employees"));
  switch (action.type) {
    case "INSERT":
      list.push(action.payload);
      localStorage.setItem("employees", JSON.stringify(list));
      return { list, currentIndex: -1 };

    case "UPDATE":
      list[state.currentIndex] = action.payload;
      localStorage.setItem("employees", JSON.stringify(list));
      return { list, currentIndex: -1 };

    case "UPDATE-INDEX":
      return { list, currentIndex: action.payload };

    case "DELETE":
      list.splice(action.payload, 1);
      localStorage.setItem("employees", JSON.stringify(list));
      return { list, currentIndex: -1 };
    default:
      return state;
  }
};

export default employeeReducers;
