import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  Modal,
  ActivityIndicator,
  Button,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import AddPhotos from './AddPhotos';
import {LogBox} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import {clockRunning} from 'react-native-reanimated';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const Home = ({navigation}) => {
  LogBox.ignoreLogs([
    "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
  ]);

  // const dummyData = [
  //   {
  //     key: 1,
  //     pic: require('../../../../assets/dummyLeftImg.png'),
  //   },
  //   {
  //     key: 2,
  //     pic: require('../../../../assets/Dp1.png'),
  //   },
  //   {
  //     key: 3,
  //     pic: require('../../../../assets/dummyLeftImg.png'),
  //   },
  //   {
  //     key: 4,
  //     pic: require('../../../../assets/dp3.png'),
  //   },
  //   {
  //     key: 5,
  //     pic: require('../../../../assets/dummyLeftImg.png'),
  //   },
  // ];
  const getPhotos = async () => {
    const photos = await CameraRoll.getPhotos({
      first: 5,
      groupName: 'ConstructAI',
    });

    setData(photos.edges.map(edge => edge.node));
  };

  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [Img, setImg] = useState([]);
  // console.log('parent==>>', data);
  // console.log(SCREEN_WIDTH)
  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <ScrollView>
      <View style={styles.containerOn}>
        {/* >Image Editor */}
        <View style={styles.header1}>
          <Text style={styles.header1Text}>Image Editor</Text>
        </View>

        {/* Add Picture(s): Optional */}
        <View style={styles.header2}>
          <Text style={styles.header2Text}>Add Picture(s): Optional</Text>
        </View>

        {/* ADD NEW IMG VIEW */}
        <View style={styles.addNewImg}>
          <View style={styles.addImg}>
            <TouchableOpacity onPress={() => setModal(true)}>
              <Image source={require('../../../../assets/pulsBlueBtn.png')} />
            </TouchableOpacity>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modal}
              hardwareAccelerated={true}
              onRequestClose={() => {
                setModal(false);
              }}>
              <AddPhotos
                closeBtn={setModal}
                // addImg={setImg}
                navigation={navigation}
              />
            </Modal>
          </View>

          {/* addedImg */}
          {data.map((item, index) => {
            {
              /* console.log(index); */
            }
            return (
              <View key={item.timestamp} style={styles.addedImg}>
                <TouchableOpacity
                  onPress={() => {
                    index === 4 ? console.log(navigation.navigate('Images')) : console.log(false);
                  }}>
                  <Image
                    // source={item.pic}
                    source={{uri: item.image.uri}}
                    style={[
                      index % 2 == 0 ? styles.addedImgOdd : styles.addedImgEve,
                      index === 4 ? styles.addedLstImg : null,
                    ]} //dynamic
                  />
                  {index === 4 ? (
                    <Text
                      style={{
                        color: '#fff',
                        position: 'absolute',
                        alignSelf: 'center',
                        fontWeight: 'bold',
                        fontSize: 20,
                        top:55
                      }}>
                      + 5 others
                    </Text>
                  ) : null}
                </TouchableOpacity>
              </View>
            );
          })}
        </View>

        {/* FINISH BTN */}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 20,
          }}>
          <TouchableOpacity
            style={{
              width: 190,
              height: 39,
              backgroundColor: '#2994FF',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              marginTop: 10,
            }}
            onPress={() => {
              alert('Finish');
            }}>
            <Text style={{color: '#fff'}}>Finish</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
  },
  containerOff: {
    flex: 1,
    backgroundColor: '#c4c4c4',
    opacity: 0.7,
  },
  header1: {
    marginTop: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header1Text: {
    fontSize: 30,
    fontWeight: '900',
    color: '#707070',
  },
  header2: {
    marginTop: 35,
    marginLeft: 10,
  },
  header2Text: {
    fontWeight: '500',
    fontSize: 16,
    color: '#707070',
  },
  addNewImg: {
    // borderWidth: 1,
    borderColor: 'red',
    marginTop: 76,
    felx: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingHorizontal: SCREEN_WIDTH * 0.04
  },
  addImg: {
    borderWidth: 1,
    marginLeft: SCREEN_WIDTH * 0.05,
    borderColor: '#2994FF',
    borderStyle: 'dashed',
    width: 134,
    height: 127,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addedImg: {
    // borderWidth:1,
    // justifyContent: 'center', //Y-axis
    marginVertical: 18,
    marginLeft: SCREEN_WIDTH * 0.07,
  },
  addedImgOdd: {
    height: 131,
    width: 196,
  },
  addedImgEve: {
    height: 131,
    width: 131,
  },
  addedLstImg: {
    opacity: 0.5,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
