import { Dimensions, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

import Background from './../components/Images/LoginIMAGE/LoginBackground.jpeg'

import {RootStackParamList} from '../App'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

//this also belong to the type saftiy shit
type LoginProps = NativeStackScreenProps<RootStackParamList,'Login'>


const {width,height} = Dimensions.get('screen');

const Login = ({navigation}:LoginProps) => {
  return (   
    <SafeAreaView style = {{flex:1}}>
    <ImageBackground source={Background}
    style = {styles.container} >

                <View  style = {styles.smallContainer}>
                    <View  style ={styles.insideSmallContainer} />
                </View>

            <View style = {styles.secondContaner}>
                    <Text style = {styles.loginTxt}>Login</Text>
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
                    <TouchableOpacity style = {styles.btn}>
                        <Text style = {styles.btnTxt}>
                            Login
                        </Text>
                    </TouchableOpacity>
<View />

<View style = {styles.lastTxtView}>
    <Text style = {styles.lastTxt}>Don't have any account? {}</Text>
    <TouchableOpacity
    onPress={()=>{
        navigation.push('Signup');
    }}>
        <Text style = {styles.lastTxt}>
            Sign Up
        </Text>
    </TouchableOpacity>
</View></View>

    </ImageBackground>
    </SafeAreaView>

  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        
    },
    secondContaner:{
        backgroundColor: '#FAFAFA',
        alignItems: 'center',
        justifyContent:'space-evenly',
        width:width,
        position:'absolute',
        bottom:0,
        height:height *0.67,
        borderTopLeftRadius:100,
        elevation:30,
        
        
    },
    smallContainer:{
            width:width*0.3,
            height:width * 0.3,
            backgroundColor:'white',
            borderTopLeftRadius:30,
            borderBottomLeftRadius:30,
            borderBottomRightRadius:30,
            marginTop:width*0.1,
            justifyContent:'center',
            alignItems:'center',
    },
    insideSmallContainer:{
        width:width * 0.15,
        height:width * 0.15,
        backgroundColor:'black',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        borderBottomRightRadius:30,
    },
    loginTxt:{
        fontSize:40,
        fontWeight:'600',
        color:'black',
        fontFamily:'Nunito-Black'
    },
    textInput:{      
        height:70,
        borderRadius:10,
        fontSize:16,
        fontWeight:'400',
        paddingHorizontal:20,
        marginVertical:2,
        backgroundColor:'white'
    },
    textInputUpTxt:{
        color:'black',
        fontSize:18,
        fontFamily:'Nunito-Black',
        marginHorizontal:10,
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