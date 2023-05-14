/**
 * UserList - Lista de Usuario
 */
import React, { useContext } from 'react';
import { Alert, FlatList} from 'react-native'
import { ListItem, Avatar, Button, Icon} from 'react-native-elements';
import UsersContext from '../context/UserContext'

// Alerta de Usuarios
export default props =>{
  const {state, dispatch} = useContext(UsersContext)
  function confirmDeletion(user){
    Alert.alert('Eliminar Usuario', 'Esta seguro que quiere Eliminar este Usuario ?', [
      {//Si desea Eliminarlo 
        text: 'Si',
        onPress(){
          dispatch({
            type: 'deleteUser',
            payload: user
          })
        }
      },
      { // No Eliminarlo
        text: 'No'
      }
    ])
  }

  // Funcion de Obtener los usuarios en la lista
  function getUserItem({item: user}) {
    return (
      <ListItem 
        key={user.id}
        bottomDivider
        onPress={()=> props.navigation.navigate('UserForm', user)}
      >
        <Avatar source={{uri: user.avatarUrl}} />
        <ListItem.Content>
        {/**Id */}
        <ListItem.Title>{user.id}</ListItem.Title>
        {/**Name */}
        <ListItem.Title>{user.name}</ListItem.Title>
        {/**Email */}
        <ListItem.Subtitle>{user.email}</ListItem.Subtitle> 
        {/**Button */}
        </ListItem.Content>
        <Button
          onPress={()=> props.navigation.navigate('UserForm', user)}
          type="clear"      
          icon={<Icon name="edit" size={14} reverse color='#00EA2F'/>}
        />
        <Button
          onPress={()=> confirmDeletion(user)}
          type="clear"
          icon={<Icon name="delete" size={25} color="#595959"/>}
        />
      </ListItem>
    )
  }

  return (
    <FlatList
      keyExtractor={user => user.id.toString()}
      data={state.users}
      renderItem={getUserItem} 
    />
  )
}