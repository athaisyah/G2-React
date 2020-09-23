export const ADD_IMAGE = 'ADD_IMAGE';

export const addImage = (title, image) => {
  return {type: ADD_IMAGE, imageData: {title: title, image: image}};
};
