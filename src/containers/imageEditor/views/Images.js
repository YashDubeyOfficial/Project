import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import CameraRoll from '@react-native-community/cameraroll';
import {LogBox} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import AddPhotos from './AddPhotos';
import { clockRunning } from 'react-native-reanimated';
const Images = ({navigation}) => {
  // console.log(navigation);
  LogBox.ignoreLogs([
    "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
  ]);

  useEffect(() => {
    getPhotos();
  }, []);

  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);

  const getPhotos = async () => {
    const photos = await CameraRoll.getPhotos({
      first: 200,
      groupName: 'ConstructAI',
    });

    setData(photos.edges.map(edge => edge.node));
  };
  const handleDelPhoto = async (photoUri) => {
    console.log(photoUri)
    const del = await CameraRoll.deletePhotos([
      (uri = 'file:///storage/emulated/0/Pictures/ConstructAI/75191045.jpg'),
    ]);
    // console.log(del);
  };

  return (
    <ScrollView>
      <View
        style={
          // modal ?
          styles.containerOn
          //  : styles.containerOff
        }>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() =>
              navigation.dispatch(
                CommonActions.navigate({
                  name: 'imageEditor',
                }),
              )
            }>
            <Image source={require('../../../../assets/crosssky.png')} />
          </TouchableOpacity>
          <View style={{position: 'absolute', bottom: 5, left: 120}}>
            <Text
              style={{
                fontWeight: '900',
                fontSize: 30,
                textAlign: 'center',
                color: '#707070',
              }}>
              Images
            </Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.dispatch(
                CommonActions.navigate({
                  name: 'imageEditor',
                }),
              )
            }>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 16,
                color: '#2994FF',
                textAlign: 'center',
              }}>
              Done
            </Text>
          </TouchableOpacity>
        </View>
        {/* ADD IMAGE BTN*/}
        <View>
          <TouchableOpacity
            onPress={
              () => setModal(true)
              // navigation.navigate('AddPhotos')
            }
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#2994FF',
              padding: 15,
              //   marginHorizontal: 30,
              //   borderRadius: 10,
              marginVertical: 10,
              marginBottom: 20,
            }}>
            <Image
              style={{marginRight: 10}}
              source={require('../../../../assets/camWhite.png')}
            />

            <Text style={{color: 'white'}}>Add Image(s)</Text>
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modal}
            hardwareAccelerated={true}
            onRequestClose={() => {
              setModal(false);
            }}>
            <AddPhotos closeBtn={setModal} navigation={navigation} />
          </Modal>
        </View>

        {/* IMAGES */}
        {data.map((item,index) => {
          {
            {/* console.log('imgDat==>>', item.image.uri); */}
          }
          return (
            <View key={item.modified} style={styles.ImgCard}>
              <View style={styles.ImgView}>
                <Image
                  style={{width: '100%', height: 385}}
                  source={{uri: item.image.uri}}
                />
                <View style={styles.CrossBtn}>
                  <TouchableOpacity
                    onPress={handleDelPhoto( item.image.uri)}
                    style={{
                      backgroundColor: '#fff',
                      height: 30,
                      width: 30,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 15,
                    }}>
                    <Image
                      source={require('../../../../assets/crossBlue.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.EditBtn}>
                <TouchableOpacity
                  onPress={() => {
                    // console.log((item.image.uri).substr(7))
                    navigation.navigate('EditPhoto', {
                      index: index,
                      ImgUri:(item.image.uri).substr(7),
                    });
                  }}
                  style={{
                    backgroundColor: '#152766',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    padding: 10,
                    marginBottom: 20,
                  }}>
                  <Image
                    style={{marginRight: 10}}
                    source={require('../../../../assets/camWhite.png')}
                  />
                  <Text style={{color: '#fff'}}>Edit Image</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Images;

const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
  },
  containerOff: {
    flex: 1,
    backgroundColor: '#c4c4c4',
    opacity: 0.7,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 40,
  },
  CrossBtn: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
});
