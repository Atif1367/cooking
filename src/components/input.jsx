import { Text, StyleSheet,TextInput, View,ScrollView } from "react-native";
import {Ionicons} from '@expo/vector-icons'
import { colors,modifiers } from "../utils/theme";

function Input({onchange,placeholder,isSecure,showIcon,iconName,onIconPress}){
    

    return(
        <View style={styles.inputCon}>
  <TextInput 
  style={styles.input}
  placeholder={placeholder}
  onChangeText={onchange}
  secureTextEntry={isSecure}
  />
  {
    showIcon === true ? 
    <Ionicons style={styles.icon} name={iconName} size={20} color={colors.green}
    onPress={onIconPress}
    
    />:
    <View/>
  }
</View>
)   
}
export {Input}

const styles = StyleSheet.create({
    inputCon:{
        paddingHorizontal:10,
        height:60,
        padding:10,
        borderRadius:50,
        marginHorizontal:10,
        marginVertical:modifiers.itemMargin,
        backgroundColor:'rgba(255,255,255,0.9)',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
        
    },
    input:{
        width:'95%'
    },
    icon:{
        alignSelf:'center'
    }

})