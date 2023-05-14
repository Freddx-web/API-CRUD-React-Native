/**
 *  UserContext - Configuracion
 */
import React, {createContext, useReducer} from 'react';
import users from '../data/users'

// Data JSON
const initialState = {users}

const UsersContext = createContext({})

// actions
const actions = {
  //CREATE
  createUser(state, action){
    const user = action.payload
    user.id = Math.random()
    return {
      ...state,
      users: [...state.users, user]
    }
  },
  //UPDATE
  updateUser(state, action){
    const updated = action.payload
    return {
      ...state,
      users: state.users.map(u => u.id === updated.id ? updated : u)
    }
  },
  //DELETE
  deleteUser(state, action){
    const user = action.payload 
      return {
      ...state, 
        users: state.users.filter(u=> u.id !== user.id)
      }
    }
  }

//Export Component
export const UsersProvider = props => {

  function reducer(state, action){
    const fn = actions[action.type]
    return fn ? fn(state, action): state
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <UsersContext.Provider
      value={{
        state, dispatch
      }}>
      {props.children}
    </UsersContext.Provider>
  )
}

export default UsersContext