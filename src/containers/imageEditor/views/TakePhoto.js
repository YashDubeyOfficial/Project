import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
  PermissionsAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CameraScreen} from 'react-native-camera-kit';
import Test from './Test';

const TakePhoto = (props, {navigation}) => {
  const [photo, setPhoto] = useState(true);
  const [camera, setCamera] = useState();
  const [filepaths, setFilepath] = useState('')
  const onBottomButtonPressed = async event => {
    // console.log(await camera.camera.capture().uri)
    const captureImage = event.captureImages[0].uri;
    console.log(captureImage);
    // require the module
    var RNGRP = require('react-native-get-real-path');
    RNGRP.getRealPathFromURI(captureImage).then((filePath) =>
      // console.log(filePath),
      setFilepath(filePath),
      props.navigation.navigate('Test', {ImgUri: filepaths})
    );
  };

  return photo === true ? (
    <View style={styles.container}>
      {/* HEADER */}
      {/* Cross */}
      <TouchableOpacity
        onPress={() => props.clsPhoto(false)}
        style={styles.headerBtn}>
        <Image source={require('../../../../assets/crossBlue.png')} />
      </TouchableOpacity>

      {/* CAMERA VIEWWWWWWWWWWWWWWWWWWWWWW */}
      <CameraScreen
        // actions={{ rightButtonText: 'Done', leftButtonText: 'Cancel' }}
        onBottomButtonPressed={event => onBottomButtonPressed(event)}
        ref={cam => setCamera(cam)}
        flashImages={{
          on: require('../../../../assets/flashOn.png'),
          off: require('../../../../assets/flashOffBlue.png'),
          auto: require('../../../../assets/flashAuto.png'),
        }}
        cameraFlipImage={require('../../../../assets/flipCamBlue.png')}
        captureButtonImage={require('../../../../assets/shutterBtn.png')}
        saveToCameraRoll={true}
        saveToInternalStorage={true}
      />
      {/* SHUTTER BTN */}
      <View>
        <TouchableOpacity style={styles.shutterBtn}>
          <Image source={require('../../../../assets/shutterCircle.png')} />
        </TouchableOpacity>
      </View>
    </View>
  ) : (
    <Test
      clsEditor={props.clsPhoto}
      closeBtn={props.closeBtn}
      navigation={props.navigation}
    />
  );
};

export default TakePhoto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
  },
  preview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'red',
  },
  header: {
    flexDirection: 'row',

    position: 'absolute',
    zIndex: 1,
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  headerBtn: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0,0,0, .9)', // IOS
    shadowOffset: {height: 12, width: 12}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#fff',
    elevation: 15, // Android,
    position: 'absolute',
    zIndex: 2,
    marginTop: 30,
    marginHorizontal: 10,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.5,
    marginHorizontal: 40,
  },
  allowBtn: {
    backgroundColor: '#2994FF',
    height: 40,
    width: 215,
    borderRadius: 4,

    justifyContent: 'center',
    alignItems: 'center',
  },
  denyBtn: {
    marginTop: 20,
  },
  shutterBtn: {
    backgroundColor: '#2994FF',
    height: 61,
    width: 61,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 190,
    left: 155,
  },
});
