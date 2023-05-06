import { View,Text, TouchableOpacity, ScrollView,StyleSheet } from "react-native";
import { BButton } from "../../components/BButton";
import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { TextButton } from "../../components/textButton";
import { useState } from "react";
import { colors, modifiers } from "../../utils/theme";


function Signup (){

    const [showPass, setShowPass] = useState(false);
    const handleShowPass = () =>{
        if (showPass === true) {
            setShowPass(false)
        }else if(showPass === false){
            setShowPass(true)
        }

    }

    return (

        <ScrollView contentContainerStyle={{flex:1,
        backgroundColor:colors.bgColor}}>
        <Header title={'Sign up'}/>
       
        <View style={Styles.formCon}>
        <Input placeholder={'User Name'} showIcon={true} iconName={'checkmark'}/>
        <Input placeholder={'Email'} showIcon={true} iconName={'mail-outline'}/>
        <Input placeholder={'Password'} isSecure={!showPass} 
        showIcon={true} 
        iconName={showPass === false ? 'eye-outline' : 'eye-off-outline'}
        onIconPress={handleShowPass}
        
        />
        <View style={Styles.textBtnCon}>
        <TextButton title={'Already Have an Account?'}/>
        </View>

        <BButton title={"Sign up"}/>
        </View>
        </ScrollView>

    )
}
export {Signup}

const Styles= StyleSheet.create({
 

    formCon:{
        // backgroundColor:'orange',
        height:'60%',
        justifyContent:'center',
        paddingHorizontal: modifiers.containerpadding,

    },
    textBtnCon:{
        alignItems:'flex-end',

    }
 })