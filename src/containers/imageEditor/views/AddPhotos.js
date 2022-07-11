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
// import DocumentPicker, {types} from 'react-native-document-picker';
import CameraRoll from '@react-native-community/cameraroll';
import TakePhoto from './TakePhoto';

const AddPhotos = (props, {navigation}) => {
  //  console.log('AddPhotos==>>>',props.navigation)
  const [first, setfirst] = useState(false);
  useEffect(() => {
    checkPermission().then(() => {});
  }, []);

  const checkPermission = async () => {
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
            props.closeBtn(false);
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
          props.navigation.navigate('CustomCamRoll', {closeBtn: props.closeBtn})
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
        transparent={true}
        visible={first}
        onRequestClose={() => {
          setfirst(false);
        }}>
        <TakePhoto clsPhoto={setfirst} navigation={props.navigation} />
       
      </Modal>
    </View>
  );
};

export default AddPhotos;

const styles = StyleSheet.create({});
