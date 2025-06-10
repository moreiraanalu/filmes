import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import Detalhes from "../screens/details";

export default function Routes (){

    const stack = createNativeStackNavigator();

    return(

        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name="Home" component={Home}/>
                <stack.Screen name="Detalhes" component={Detalhes}/>
            </stack.Navigator>
        </NavigationContainer>
    )
}