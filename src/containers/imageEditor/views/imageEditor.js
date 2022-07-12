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

const Home = ({navigation}) => {
  useEffect(() => {
    test();
  }, [modal]);

  const test = () => {
    console.log('Home=>>',modal);
    console.log('Home=>>');
  };
  const dummyData = [
    {
      key: 1,
      pic: require('../../../../assets/dummyLeftImg.png'),
    },
    {
      key: 2,
      pic: require('../../../../assets/Dp1.png'),
    },
    {
      key: 3,
      pic: require('../../../../assets/dummyLeftImg.png'),
    },
    {
      key: 4,
      pic: require('../../../../assets/dp3.png'),
    },
    {
      key: 5,
      pic: require('../../../../assets/dummyLeftImg.png'),
    },
  ];
  const [modal, setModal] = useState(false);
  const [Img, setImg] = useState([]);
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  // console.log('parent==>>', modal)
  // console.log('parent')
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* >Image Editor */}
        <View style={styles.header1}>
          <Text style={styles.header1Text}>Image Editor</Text>
        </View>
        {/* Add Picture(s): Optional< */}
        <View style={styles.header2}>
          <Text style={styles.header2Text}>Add Picture(s): Optional</Text>
        </View>
        {/* ADD NEW IMG VIEW */}
        <View style={styles.gallery}>
          <View style={styles.addImg}>
            <TouchableOpacity onPress={() => setModal(true)}>
              <Image source={require('../../../../assets/pulsBlueBtn.png')} />
            </TouchableOpacity>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modal}
              onRequestClose={() => {
                setModal(false);
              }}>
              <AddPhotos
                navigation={navigation}
                closeBtn={setModal}
                addImg={setImg}
              />
            </Modal>
          </View>
          {/* addedImg */}
          {dummyData.map(item => {
            return (
              <View key={item.key} style={styles.addedImg}>
                <Image
                  // style={{height: 130, width: 170}}
                  source={item.pic}
                />
              </View>
            );
          })}
        </View>
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
  container: {
    flex: 1,
    // backgroundColor:'#c4c4c4',
    // opacity:0.7,
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
    marginTop: 18,
    marginLeft: 10,
  },
  header2Text: {
    fontWeight: '500',
    fontSize: 16,
    color: '#707070',
  },
  gallery: {
    // borderWidth: 5,
    borderColor: '#a4f2a3',
    marginTop: 76,
    felx: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addImg: {
    borderWidth: 1,
    marginLeft: 30,
    borderColor: '#2994FF',
    borderStyle: 'dashed',
    width: 134,
    height: 127,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addedImg: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 193,
    height: 143,
  },
});
