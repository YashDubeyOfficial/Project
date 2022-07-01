import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const TakePhoto = () => {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        {/* Cross */}
        <TouchableOpacity style={styles.headerBtn}>
          <Image source={require('../../../../assets/crossBlue.png')} />
        </TouchableOpacity>
        <View
          style={{flexDirection: 'row'}}>
          {/* Flash */}
          <View style={{marginHorizontal:20}}>
            <TouchableOpacity style={styles.headerBtn}>
              <Image source={require('../../../../assets/flashOffBlue.png')} />
            </TouchableOpacity>
          </View>
          {/* camFlip */}
          <TouchableOpacity style={styles.headerBtn}>
            <Image source={require('../../../../assets/flipCamBlue.png')} />
          </TouchableOpacity>
        </View>
      </View>
      {/* CONTENT */}
      <View style={styles.content}>
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
      </View>
      {/* BUTTONS */}
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity style={styles.allowBtn}>
          <Text>Allow</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.denyBtn}>
          <Text>Deny</Text>
        </TouchableOpacity>
      </View>
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
  },
  header: {
    flexDirection: 'row',
    marginVertical: 30,
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
    shadowOffset: {height: 1, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#fff',
    elevation: 15, // Android
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
