import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import DocumentPicker, {types} from 'react-native-document-picker';

const AddPhotos = (props) => {
//  console.log('AddPhotos==>>>',props)
  const ImgSelector = async (props) => {
    console.log('ImgSel',props)
    try {
      // setLoading(true);
      const pickerResult = await DocumentPicker.pickSingle({
        presentationStyle: 'fullScreen',
        copyTo: 'cachesDirectory',
        type: [types.images],
      });
      props.setImg([...Img,pickerResult.fileCopyUri]);
      // setLoading(false);
    } catch (e) {
      handleError(e);
    }
  };
  // console.log("Image array==>>",Img)

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
        onPress={()=>{props.navigation.navigate('TakePhoto')}}
        >
        <Text style={{color: 'white'}}>Take a photo</Text>
      </TouchableOpacity>

      {/* {/ <Filters/> /} */}
    </View>
  );
};

export default AddPhotos;

const styles = StyleSheet.create({});