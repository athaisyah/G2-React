const photoReducer = (state = {}, action) => {
  switch (action.type) {
    case 'STORE_PHOTOS':
      return {
        ...state,
        photos: action.payload,
      };

    default:
      return state;
  }
};

export default photoReducer;
