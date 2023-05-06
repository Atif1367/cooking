import { View,Text, StyleSheet, TouchableOpacity } from "react-native";
import {Ionicons} from '@expo/vector-icons'
import { colors, modifiers } from "../utils/theme";

function TextButton({title, onPress}){

    return(
    <TouchableOpacity onPress={onPress} style={Styles.buttonCon}>
        
        <Text style={Styles.title}>{title}</Text>
        <Ionicons name={'arrow-forward'} size={24} style={Styles.backIcon} 
        color={colors.primary}/>
    </TouchableOpacity>
    )
}

export {TextButton}

 const Styles= StyleSheet.create({
    buttonCon:{
        paddingHorizontal: modifiers.containerpadding,
        flexDirection:'row'
        
        
    },
    title:{
        // fontSize:34,
        fontWeight:'medium',

    },
    backIcon:{
        marginLeft:10,

    }
 })