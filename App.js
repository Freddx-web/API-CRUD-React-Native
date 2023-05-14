/**
 *  App.js
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, Icon } from 'react-native-elements';

// Components
import UserList from './src/views/UserList';
import UserForm from './src/views/UserForm';
import UserLogin from './src/views/UserLogin';
import { UsersProvider } from './src/context/UserContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <UsersProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="UserList"
          screenOptions={screenOptions}>
          <Stack.Screen
            name="UserList"
            component={UserList}
            options={({navigation})=>{
              return {
                title: "Lista de Usuarios",
                headerRight: () => (
                  <Button
                  onPress={()=> navigation.navigate("UserForm")}
                  type="clear"
                  icon={<Icon name="add" size={30} color="#fff"/>}/>
                ),
                headerLeft: () => (
                  <Button
                  onPress={()=> navigation.navigate("UserLogin")}
                  type="clear"
                  icon={<Icon name="login" size={30} color="#fff"/>}/>
                )
              }
            }}
          />
          {/**View Screnn New Users */}
          <Stack.Screen
            name="UserForm"
            component={UserForm}
            options={{
              title: "Registrar Usuario"
            }}
          />
          <Stack.Screen
            name="UserLogin"
            component={UserLogin}

            options={{
              title: "Login",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UsersProvider>
  );
}

const screenOptions = {
  headerStyle:{
    backgroundColor: '#01C4FF'
  },
  headerTintColor: '#fff',
  headerTitleStyle:{
    fontWeight: 'bold' 
  }
}