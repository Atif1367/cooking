
import { SafeAreaView } from "react-native-safe-area-context";
import * as React from 'react';
import { MainNav } from "./src/navigatiion/appNavigator";


function App(){

  return (
    
    <SafeAreaView style={{flex:1}}>
    <MainNav/>
   </SafeAreaView>
    

  )
}

export default App