import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  Modal,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import TakePhoto from './TakePhoto';
import CustomCamRoll from './CustomCamRoll';

const AddPhotos = (props, {navigation}) => {
  const [first, setfirst] = useState(false);
  const [galImg, setGalImg] = useState(false);
  useEffect(() => {
    checkPermissionCamera()
      checkPermissionStorage();
   
  }, []);

  const checkPermissionStorage = async () => {
    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    );

    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: 'Image gallery app permissions',
        message: 'Image gallery needs your permission to access your photos',
        buttonPositive: 'OK',
      },
    );

    return status === 'granted';
  };
  const checkPermissionCamera = async () => {
    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );

    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Camera app permissions',
        message: 'Camera needs your permission to access your photos',
        buttonPositive: 'OK',
      },
    );

    return status === 'granted';
  };

  return (
    <View
      style={{
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        // borderWidth: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}>
      <View
        style={{
          alignItems: 'flex-end',
          marginHorizontal: 20,
          paddingVertical: 30,
        }}>
        <TouchableOpacity
          onPress={() => {
            props.closeBtn(false)
          }}>
          <Image source={require('../../../../assets/crosssky.png')} />
        </TouchableOpacity>
      </View>

      {/* HEADER */}
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 30, fontWeight: '900', color: '#707070'}}>
          Add Photo(s)
        </Text>

        <Text
          style={{
            margin: 45,
            fontSize: 14,
            fontWeight: '400',
            color: '#707070',
          }}>
          Please select if you would like to add a photo from cameral roll or
          take a photo.
        </Text>
      </View>

      <TouchableOpacity
        onPress={() =>
          // props.navigation.navigate('CustomCamRoll')
          setGalImg(true)
        }
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#2994FF',
          padding: 15,
          marginHorizontal: 30,
          borderRadius: 10,
          marginVertical: 10,
          marginBottom: 20,
        }}>
        <Image
          style={{marginRight: 30}}
          source={require('../../../../assets/addPhoto.png')}
        />

        <Text style={{color: 'white', marginRight: 30}}>Add a Photo</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={false}
        visible={galImg}
        onRequestClose={() => {
          setGalImg(false);
        }}>
        <CustomCamRoll clsGall={setGalImg} />
        {/* <TakePhoto clsPhoto={setfirst} /> */}
      </Modal>

      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#2994FF',
          padding: 15,
          marginHorizontal: 30,
          borderRadius: 10,
          marginVertical: 10,
          marginBottom: 20,
        }}
        onPress={() => {
          setfirst(true);
        }}>
        <Text style={{color: 'white'}}>Take a photo</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={false}
        visible={first}
        onRequestClose={() => {
          setfirst(false);
        }}>
        <TakePhoto
          closeBtn={props.closeBtn}
          clsPhoto={setfirst}
          navigation={props.navigation}
        />
      </Modal>
    </View>
  );
};

export default AddPhotos;

const styles = StyleSheet.create({});
