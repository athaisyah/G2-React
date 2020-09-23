import React, {useState} from 'react';
import {View, Button, Image, Text, StyleSheet, Alert} from 'react-native';
import ImagePicker from 'react-native-image-picker';

import Colors from '../constants/Colors';

const ImgPicker = (props) => {
  const [pickedImage, setPickedImage] = useState();

  /* CARA 2 WORKING*/
  const takeImageHandler = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        privateDirectory: true,
        skipBackup: true,
        // path: 'Image_test_',
      },
    };

    ImagePicker.launchCamera(options, (res) => {
      console.log('Response ===>', res);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('Image Picker Error: ', res.error);
      } else {
        console.log('response', JSON.stringify(res));
        let source = {uri: res.uri};
        console.log(res.uri);
        // setPickedImage(image.uri);
        // props.onImageTaken(image.uri);

        // setPickedImage({
        //   image: `${res.uri}`,
        // });
        // props.onImageTaken(source);

        setPickedImage(`${res.uri}`);
        props.onImageTaken(`${res.uri}`);
      }
    });
  };

  // const getImageFromCamera = async () => {
  //   if (Platform.OS === 'android') {
  //     try {
  //       await PermissionsAndroid.requestMultiple([
  //         PermissionsAndroid.PERMISSIONS.CAMERA,
  //         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  //       ]);

  //       const permissionCamera = await PermissionsAndroid.check(
  //         'android.permission.CAMERA',
  //       );
  //       const permissionWriteStorage = await PermissionsAndroid.check(
  //         'android.permission.WRITE_EXTERNAL_STORAGE',
  //       );

  //       if (!permissionCamera || !permissionWriteStorage) {
  //         return {
  //           error: 'Failed to get the required permissions.',
  //         };
  //       }
  //     } catch (error) {
  //       return {
  //         error: 'Failed to get the required permissions.',
  //       };
  //     }
  //   }
  //   return ImagePicker.launchCamera(options, (response) => response);
  // };

  return (
    <View style={styles.imagePicker}>
      <View style={styles.imagePreview}>
        {!pickedImage ? (
          <Text>No image picked yet.</Text>
        ) : (
          <Image style={styles.image} source={{uri: pickedImage}} />
          /* <Image style={styles.image} /> */
        )}
      </View>
      <Button
        title="Take Image"
        color={Colors.primary}
        onPress={takeImageHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imagePicker: {
    alignItems: 'center',
    marginBottom: 15,
  },
  imagePreview: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ImgPicker;
