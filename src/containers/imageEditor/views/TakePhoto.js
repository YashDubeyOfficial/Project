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
import EditPhoto from './editPhoto';

const TakePhoto = props => {
  const [photo, setPhoto] = useState(true);
  const [camera, setCamera] = useState();
  const [ImgPath, setImgPath] = useState('');
  const onBottomButtonPressed = async event => {
    const captureImage = event.captureImages[0].uri;
    console.log(event.captureImages.map(item => item));
    var RNGRP = require('react-native-get-real-path'); //to get file path from uri
    RNGRP.getRealPathFromURI(captureImage).then(filePath => {
      // setImgPath(filePath);
      setTimeout(() => {
        props.navigation.navigate('EditPhoto', {ImgUri: filePath});
      }, 3000);
    });
  };
  console.log('ImgPath from camera screen===>>', ImgPath);
  return (
    <View style={styles.container}>
      {/* HEADER */}
      {/* Cross */}
      <TouchableOpacity
        onPress={() => 
        // props.clsPhoto(false)
        props.navigation.goBack()
        }
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
