import {TextInput, Dimensions, ImageBackground, StyleSheet, Text, Touchable, TouchableOpacity, View, ScrollView } from 'react-native'
import React from 'react'

import Background from './../components/Images/LoginIMAGE/LoginBackground.jpeg'

import {RootStackParamList} from '../App'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

//this also belong to the type saftiy shit
type SignUpProps = NativeStackScreenProps<RootStackParamList,'Signup'>


const {width,height} = Dimensions.get('screen');


const Signup = ({navigation}:SignUpProps) => {
  return (
    <ImageBackground source={Background} style = {styles.container}>
        <View style = {styles.container1}>
          <TouchableOpacity 
          onPress={()=>{
            navigation.navigate('Login');
          }}>
           <Text style = {styles.arrow}> ← </Text>
          </TouchableOpacity>
          <View style = {{width:'68%',justifyContent:'center',alignItems:'center'}}>
          <Text style = {styles.txt}>Sign Up</Text>
          </View>
        </View>
        <ScrollView style = {styles.container2}>
        <View style = {styles.insde}>

        <View style = {{width:width *0.9}}>
                        <Text style = {styles.textInputUpTxt}>
                            First Name
                        </Text>
                    <TextInput
                    placeholder='Mohammad'
                    style = {styles.textInput}
                     />
                     </View>

                     <View style = {{width:width *0.9}}>
                        <Text style = {styles.textInputUpTxt}>
                            Last Name
                        </Text>
                    <TextInput
                    placeholder='Malash'
                    style = {styles.textInput}
                     />
                     </View>



        <View style = {{width:width *0.9}}>
                        <Text style = {styles.textInputUpTxt}>
                            Email
                        </Text>
                    <TextInput
                    placeholder='example@gmail.com'
                    style = {styles.textInput}
                     />
                     </View>
                     <View style = {{width:width * 0.9}}>
                        <Text style = {styles.textInputUpTxt}>
                            Password
                        </Text>
                    <TextInput
                    placeholder='********'
                    style = {styles.textInput}
                    />
                     </View>
                     <View style = {{width:width * 0.9}}>
                        <Text style = {styles.textInputUpTxt}>
                            Confirm Password
                        </Text>
                    <TextInput
                    placeholder='********'
                    style = {styles.textInput}
                    />
                     </View>
                    <TouchableOpacity style = {styles.btn}>
                        <Text style = {styles.btnTxt}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>



                    <View style = {styles.lastTxtView}>
    <Text style = {styles.lastTxt}>Already have an account? {}</Text>
    <TouchableOpacity
    onPress={()=>{
        navigation.navigate('Login');
    }}>
        <Text style = {styles.lastTxt}>
            Sign In
        </Text>
    </TouchableOpacity>
</View>
        </View>
        </ScrollView>
    </ImageBackground>
  )
}

export default Signup

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
},
container1:{
  flex:1/7,
  flexDirection:'row',
  alignItems:'center',
  width:'100%',
},
txt:{
  color:'white',
  fontSize:40,
},
arrow:{
  color:'white',
  fontSize:60,
},
container2:{
flex:6/7,
backgroundColor:'white',
width:'100%',
borderTopLeftRadius:100,
},
insde:{
  marginTop:30,
  alignItems:'center',
  justifyContent:'space-evenly',
  
},
textInput:{      
  height:60,
  borderRadius:4,
  fontSize:16,
  fontWeight:'400',
  paddingHorizontal:20,
  marginVertical:2,
  backgroundColor:'white',
  marginHorizontal:18,
  elevation:1,
},
textInputUpTxt:{
  color:'black',
  fontSize:18,
  fontFamily:'Nunito-Black',
  marginHorizontal:35,
  paddingVertical:7,
},
btn:{
  backgroundColor:'black',
  borderTopLeftRadius:10,
  borderBottomLeftRadius:10,
  borderBottomRightRadius:10,
  height:50,
  width:width*0.8,
  justifyContent:'center',
  alignItems:'center',
  marginVertical:18,
  elevation:7,
},
btnTxt:{
  color:'white',
  fontSize:16
},
lastTxtView:{
  flexDirection:'row'
},
lastTxt:{
  color:'black',
  fontSize:15,
  fontWeight:'500',
}
})