import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Signin } from '../screens/signin/signin';
import { Signup } from '../screens/signup/signup';


function MainNav(){

    const stack = createNativeStackNavigator ()
    return(
        <NavigationContainer>

            <stack.Navigator screenOptions={{
                headerShown:false
            }}>
                <stack.Screen name='Signin' component={Signin}/>
                <stack.Screen name='Signup' component={Signup}/>
                
                
            </stack.Navigator>

        </NavigationContainer>
    )
}

export {MainNav}