import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Perfil from '../screens/perfil/Perfil'
import PerfilEdit from '../screens/perfil/perfil_edit/PerfilEdit';

import Header from '../components/header/Header'
import HeaderLeft from '../components/header/HeaderLeft'

const Stack = createStackNavigator();
function RootPefil() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Perfil" 
        component={Perfil} 
        options={{
          title: 'Perfil',
          headerStyle: {
            backgroundColor: '#101D25',
            height: 140,
          },
         
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle: props => <Header title="PERFIL" name="Jake Peralta"/>
        }} 
      /> 
      <Stack.Screen 
        name="PerfilEdit" 
        component={PerfilEdit} 
        options={{
          title: 'Editar',
          headerStyle: {
            backgroundColor: '#101D25',
            height: 140,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#F7F6EE',
          },
          headerTintColor:'#F7F6EE',
          headerLeftContainerStyle: {
            top: 65,
          },
          headerTitle: props => <HeaderLeft title="EDITAR" name="Jake Peralta"/>
        }} 
      />   
    </Stack.Navigator>
  );
}
export default RootPefil