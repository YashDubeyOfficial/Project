import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const EditPhoto = (props) => {
    console.log('editPhooto===>>>content:',(props.route.params))
    // var obj = JSON.parse(props.route.params.ImgUri)[0].uri
    // console.log(obj.filter(item=>{console.log('Inneritem==>>',item)}))
    // console.log((obj.split)
    // console.log('obj',typeof obj)
    // console.log(obj.split('/'))
   
  return (
    <View>
      <Text style={{color:'#000'}}>editImg====>>>>{(props.route.params.ImgUri)}</Text>
      <Image source={{uri:'props.route.params.ImgUri'}}/>
    </View>
  )
}

export default EditPhoto

const styles = StyleSheet.create({})