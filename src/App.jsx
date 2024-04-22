import React from "react";
import { View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./components/Login";
import Cadastro from "./components/Cadastro";

const Stack = createNativeStackNavigator();

export default () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator>
                  <Stack.Screen name="Login" component={Login}/>
                  <Stack.Screen name="Cadastro" component={Cadastro}/>
                </Stack.Navigator>
            </NavigationContainer>

        </SafeAreaView>
    )
}