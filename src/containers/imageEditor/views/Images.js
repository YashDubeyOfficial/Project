import {StyleSheet, Text, View, Image, Touchable} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Images = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../../../assets/crosssky.png')} />
        <View style={{position: 'absolute', bottom: 5, left: 120}}>
          <Text style={{fontWeight: '900', fontSize: 30, textAlign: 'center'}}>
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
          onPress={() => ImgSelector(props)}
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
      </View>

      {/* IMAGES */}
      <View style={styles.ImgCard}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
         <View>
         <Image
            style={{width: 385, height: 385}}
            source={require('../../../../assets/dummyLeftImg.png')}
          />
         </View>
          <View style={{borderWidth:1,position:'absolute',left:10,Top:1500}}>
            <Image source={require('../../../../assets/crosssky.png')} />
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => ImgSelector(props)}
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#2994FF',
              padding: 15,
              marginHorizontal: 4,
            }}>
            <Image
              style={{marginRight: 30}}
              source={require('../../../../assets/addPhoto.png')}
            />

            <Text style={{color: 'white', marginRight: 30}}>Edit Image</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
});
