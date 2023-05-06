import { View,Text, StyleSheet } from "react-native";
import {Ionicons} from '@expo/vector-icons'
import { modifiers } from "../utils/theme";

function Header({title}){

    return(
    <View style={Styles.headerCon}>
        <Ionicons name={'chevron-back'} size={24} style={Styles.backIcon}/>
        <Text style={Styles.title}>{title}</Text>
    </View>
    )
}

export {Header}

 const Styles= StyleSheet.create({
    headerCon:{
        paddingHorizontal: modifiers.containerpadding,
        height:100,
        justifyContent:'space-between',
        
        
    },
    title:{
        fontSize:34,
        fontWeight:'bold',

    },
    backIcon:{
        marginLeft:-5,

    }
 })