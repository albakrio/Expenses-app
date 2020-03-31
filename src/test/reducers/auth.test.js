import authReducer from '../../reducers/auth'

test('should set uid when loggin in',()=>{
  const action = {
    type: 'LOGIN',
    uid: '123abc'
  }
  const state = authReducer({}, action)
  expect(state.id).toBe(action.id)
})

test('should clear uid when logging out',()=>{
  const action={
    type: 'LOGOUT'
  }
  const state = authReducer({uid: '123abc'},action)
  expect(state).toEqual({})
})