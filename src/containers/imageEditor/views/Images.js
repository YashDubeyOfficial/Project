import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';

const Images = () => {
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
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={require('../../../../assets/crosssky.png')} />
          </TouchableOpacity>
          <View style={{position: 'absolute', bottom: 5, left: 120}}>
            <Text
              style={{fontWeight: '900', fontSize: 30, textAlign: 'center'}}>
              Images
            </Text>
          </View>
          <TouchableOpacity>
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
        {/* ADD IMAGE */}
        <View>
          <TouchableOpacity
            onPress={() => alert('props')}
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
        </View>

        {/* IMAGES */}
        {dummyData.map(item => {
          return (
            <View style={styles.ImgCard}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <View>
                  <Image 
                //   style={{width: 385, height: 385}}
                   source={item.pic} />
                </View>
                <View
                  style={{
                    height: 30,
                    width: 30,
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    left: 10,
                    backgroundColor: '#fff',
                  }}>
                  <Image source={require('../../../../assets/crossBlue.png')} />
                </View>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => alert('props')}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#152766',
                    padding: 15,
                  }}>
                  <Image
                    style={{marginRight: 10}}
                    source={require('../../../../assets/camWhite.png')}
                  />

                  <Text style={{color: 'white'}}>Edit Image</Text>
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
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 40,
  },
  ImgCard: {
    marginBottom: 15,
  },
});
