import {createStore} from 'redux'
import ToDoReducers from '../ToDoReducers'

const myStore= createStore(ToDoReducers)

export default myStore
