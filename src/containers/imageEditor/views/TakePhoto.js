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
// import { RNCamera } from 'react-native-camera';
// import {useCamera} from 'react-native-camera-hooks';
// import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {CameraScreen} from 'react-native-camera-kit';

const TakePhoto = ({navigation}) => {
 const onBottomButtonPressed= async (event) =>{
    const captureImages = JSON.stringify(event.captureImages);
    // console.log(captureImages)
     await navigation.navigate('EditPhoto',{ImgUri:captureImages,test:1})
    // Alert.alert(
    //   `"${event.type}" Button Pressed`,
    //   `${captureImages}`,
    //   [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
    //   { cancelable: false },
    // );
  }
  return (
    <View style={styles.container}>
      {/* HEADER */}
      {/* <View style={styles.header}> */}
        {/* Cross */}
        <TouchableOpacity onPress={()=>navigation.navigate('imageEditor')} style={styles.headerBtn}>
          <Image source={require('../../../../assets/crossBlue.png')} />
        </TouchableOpacity>
        {/* <View style={{flexDirection: 'row'}}> */}
          {/* Flash */}
          {/* <View style={{marginHorizontal: 20}}>
            <TouchableOpacity style={styles.headerBtn}>
              <Image source={require('../../../../assets/flashOffBlue.png')} />
            </TouchableOpacity>
          </View> */}
          {/* camFlip */}
          {/* <TouchableOpacity style={styles.headerBtn}>
            <Image source={require('../../../../assets/flipCamBlue.png')} />
          </TouchableOpacity>
        </View>
      </View> */}
      {/* CONTENT */}
      {/* <View style={styles.content}>
        <Text style={{fontWeight: '700', fontSize: 20, textAlign: 'center'}}>
          Welcome to Construct
        </Text>
        <Text
          style={{
            marginBottom: 33,
            fontWeight: '700',
            fontSize: 20,
            textAlign: 'center',
          }}>
          AI’s camera
        </Text>
        <Text
          style={{
            fontWeight: '400',
            fontSize: 16,
            textAlign: 'center',
            fontFamily: 'Roboto',
          }}>
          Click here to allow Construct AI to access your camera and camera
          roll.
        </Text>
      </View> */}
      {/* BUTTONS */}
      {/* <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity style={styles.allowBtn}>
          <Text>Allow</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.denyBtn}>
          <Text>Deny</Text>
        </TouchableOpacity>
      </View> */}

      {/* CAMERA VIEWWWWWWWWWWWWWWWWWWWWWW */}
      <CameraScreen
        // actions={{ rightButtonText: 'Done', leftButtonText: 'Cancel' }}
        onBottomButtonPressed={(event) => onBottomButtonPressed(event)}
        flashImages={{
          on: require('../../../../assets/flashOn.png'),
          off: require('../../../../assets/flashOffBlue.png'),
          auto: require('../../../../assets/flashauto.png'),
        }}
        cameraFlipImage={require('../../../../assets/flipCamBlue.png')}
        captureButtonImage={require('../../../../assets/shutterBtn.png')}
        // torchOnImage={ require('../../../../assets/flash.png')}
        // torchOffImage={ require('../../../../assets/flashOffBlue.png')}
        // showCapturedImageCount
        
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
    // width: 390,
  },
  preview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  header: {
    flexDirection: 'row',
    // marginTop: 30,
    position:'absolute',
    zIndex:1,
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
    position:'absolute',
    zIndex:2,
    marginTop:30,
    marginHorizontal:10
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.5,
    marginHorizontal: 40,
    // marginVertical:40
  },
  allowBtn: {
    backgroundColor: '#2994FF',
    height: 40,
    width: 215,
    borderRadius: 4,
    // borderWidth: 1,
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
