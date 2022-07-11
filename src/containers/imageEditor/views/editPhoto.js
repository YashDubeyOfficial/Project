import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const EditPhoto = (props) => {
    console.log('editPhooto===>>>','content:',(props.route.params.ImgUri.split(',').split(':')[2]))
  return (
    <View>
      <Text style={{color:'#000'}}>{props.route.params.ImgUri}</Text>
    </View>
  )
}

export default EditPhoto

const styles = StyleSheet.create({})