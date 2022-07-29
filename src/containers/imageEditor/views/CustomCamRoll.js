import {
  StyleSheet,
  Text,
  View,
  Image,
  // FlatList,
  TouchableOpacity,
  PermissionsAndroid,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import CameraRoll from '@react-native-community/cameraroll';
import {FlatList} from 'react-native-gesture-handler';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
const CustomCamRoll = props => {
  // console.log('props CustomcAmRoll==>>', props);
  useEffect(() => {
    getPhotos();
  }, []);

  const [galleryData, setGalleryData] = useState([]);
  const [imgUrl, setImgUrl] = useState([]);
  // console.log(imgUrl);

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
  const getPhotos = async () => {
    const photos = await CameraRoll.getPhotos({
      first: 200,
      // groupName:'ConstructAI'
    });

    // console.log(photos.edges.map(edge => edge.node));
    setGalleryData(photos.edges.map(edge => edge.node));
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            // marginLeft: 100,
            fontSize: 30,
            fontWeight: '900',
            color: '#707070',
          }}>
          Camera Roll
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          props.clsGall(false);
        }}>
        <Image
          style={{marginHorizontal: 10, marginBottom: 13}}
          source={require('../../../../assets/crosssky.png')}
        />
      </TouchableOpacity>

      <FlatList
        data={galleryData}
        nestedScrollEnabled
        numColumns={3}
        renderItem={item => {
          // console.log(item);
          return (
            <View
              style={{
                minwidth: 10,
                // borderWidth: 1,
              }}>
              <Image
                style={{
                  height: 100,
                  width: 130,
                  margin: 2,
                }}
                source={{uri: item.item.image.uri}}
              />
              <BouncyCheckbox
                size={22}
                fillColor="#2994FF"
                style={{
                  position: 'absolute',
                  right: 0,
                  top: 10,
                }}
                iconStyle={{borderColor: '#fff'}}
                textStyle={{fontFamily: 'JosefinSans-Regular'}}
                onPress={() => {
                  // console.log()
                  setImgUrl([...imgUrl, item.item.image.uri]);
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default CustomCamRoll;

const styles = StyleSheet.create({});
