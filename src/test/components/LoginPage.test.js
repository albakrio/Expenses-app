import {LoginPage} from '../../components/LoginPage'
import {shallow} from 'enzyme'
import React from 'react'

test('should render LoginPage component',()=>{
  const wrapper = shallow(<LoginPage />)
  expect(wrapper).toMatchSnapshot()
})


test('should call startLogin on click',()=>{
  const startLogin = jest.fn()
  const wrapper = shallow(<LoginPage startLogin={startLogin} />)
  wrapper.find('button').simulate('click')
  expect(startLogin).toHaveBeenCalled()
})
