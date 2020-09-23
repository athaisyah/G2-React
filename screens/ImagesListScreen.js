import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Platform, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import ImageItem from '../components/ImageItem';

const ImagesListScreen = (props) => {
  const images = useSelector((state) => state.images.images);

  return (
    <FlatList
      data={images}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ImageItem
          image={itemData.item.imageUri}
          // image={null}
          title={itemData.item.title}
        />
      )}
    />
  );
};

export default ImagesListScreen;
