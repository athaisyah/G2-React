import {ADD_IMAGE} from './images-actions';
import Image from '../models/image';

const initialState = {
  images: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_IMAGE:
      const newImage = new Image(
        new Date().toString(),
        action.imageData.title,
        action.imageData.image,
      );
      return {
        images: state.images.concat(newImage),
      };
    default:
      return state;
  }
};
