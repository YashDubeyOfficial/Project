import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal
} from 'react-native';
import React, {useState, useEffect} from 'react';
import AddPhotos from './AddPhotos';

import {LogBox} from 'react-native';

const Images = ({navigation}) => {
  // console.log('navigation',navigation)
  LogBox.ignoreLogs([
    "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
  ]);
  const dummyData = [
    {
      key: 1,
      pic: require('../../../../assets/dummyLeftImg.png'),
    },
    {
      key: 2,
      pic: require('../../../../assets/dummyLeftImg.png'),
    },
    {
      key: 3,
      pic: require('../../../../assets/dummyLeftImg.png'),
    },
    {
      key: 4,
      pic: require('../../../../assets/dummyLeftImg.png'),
    },
    {
      key: 5,
      pic: require('../../../../assets/dummyLeftImg.png'),
    },
  ];
  const [modal, setModal] = useState(false);
  return (
    <ScrollView>
      <View style={modal ? styles.containerOff : styles.containerOn}>
        <View style={styles.header}>
          <TouchableOpacity onPress={()=>navigation.goBack('imageEditor')}>
            <Image source={require('../../../../assets/crosssky.png')} />
          </TouchableOpacity>
          <View style={{position: 'absolute', bottom: 5, left: 120}}>
            <Text
              style={{fontWeight: '900', fontSize: 30, textAlign: 'center',color:'#707070'}}>
              Images
            </Text>
          </View>
          <TouchableOpacity >
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
            onPress={() => 
            // setModal(true)
            navigation.navigate('AddPhotos')
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
          {/* <Modal
            animationType="slide"
            transparent={true}
            visible={modal}
            hardwareAccelerated={true}
            onRequestClose={() => {
              setModal(false);
            }}>
            <AddPhotos
              closeBtn={setModal}
            />
          </Modal> */}
        </View>

        {/* IMAGES */}
        {dummyData.map(item => {
          return (
            <View key={item.key} style={styles.ImgCard}>
              <View style={styles.ImgView}>
                <Image
                  style={{width: '100%', height: 385}}
                  source={require('../../../../assets/dummyLeftImg.png')}
                />
                <View style={styles.CrossBtn}>
                  <TouchableOpacity
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
