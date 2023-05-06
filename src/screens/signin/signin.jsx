import { View,Text, TouchableOpacity, ScrollView,StyleSheet,ImageBackground } from "react-native";
import { BButton } from "../../components/BButton";
import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { TextButton } from "../../components/textButton";
import { useState } from "react";
import { colors, modifiers } from "../../utils/theme";

function Signin ({navigation}){

    const [showPass, setShowPass] = useState(false);
    const handleShowPass = () =>{
        if (showPass === true) {
            setShowPass(false)
        }else if(showPass === false){
            setShowPass(true)
        }

    }
    const goToSignup=()=>{
        navigation.navigate('Signup')
    }

    return (



        <ScrollView contentContainerStyle={{flex:1,
        backgroundColor:colors.bgColor}}>

            <ImageBackground
            style={{flex:1}} 
        source={{uri:'https://cdn.pixabay.com/photo/2023/03/29/10/00/cherry-blossom-7885057__340.jpg'}}>
        <Header title={'Sign in'}/>
       
        <View style={Styles.formCon}>
        {/* <Input placeholder={'User Name'} showIcon={true} iconName={'checkmark'}/> */}
        <Input placeholder={'Email'} showIcon={true} iconName={'mail-outline'}/>
        <Input placeholder={'Password'} isSecure={!showPass} 
        showIcon={true} 
        iconName={showPass === false ? 'eye-outline' : 'eye-off-outline'}
        onIconPress={handleShowPass}
        
        />
        <View style={Styles.textBtnCon}>
        <TextButton title={'Forgot your Password'}/>
        </View>

        <BButton title={"Sign in"}/>
        <View style={Styles.goToSignupCon}>
        <TextButton title={'Don`t Have An Account Yet Signup'} 
        onPress={goToSignup}/>
        </View>
        </View>
        </ImageBackground>
        </ScrollView>

    )
}
export {Signin}

const Styles= StyleSheet.create({
 

    formCon:{
        // backgroundColor:'orange',
        height:'60%',
        justifyContent:'center',
        paddingHorizontal: modifiers.containerpadding,

    },
    textBtnCon:{
        alignItems:'flex-end',
        goToSignupCon:{
            alignItems:'center'
        }

    }
 })