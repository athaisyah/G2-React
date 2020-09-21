export const storePhoto = (photos) => {
  return {
    type: 'STORE_PHOTOS',
    payload: photos,
  };
};
