import React, { useEffect, useReducer } from 'react'
import './App.css';
import useFetch from './useFetch'
import { todoReducer } from './reducer'

export const TodoContext = React.createContext();

const TodoStore = (props) => {
  //const [todos, setTodos] = useState([]);

  const [todos, dispatch] = useReducer(todoReducer, []);

  const setInitData = (initData) => {
    dispatch({ type: 'SET_INIT_DATA', payload: initData })
  }

  const loading = useFetch(setInitData, '/todo');

  useEffect(() => {
    console.log("새로운 내용 렌더링", todos);
  }, [todos])

  return (
    <TodoContext.Provider value={{ todos, loading, dispatch }}>
      {props.children}
    </TodoContext.Provider>

  )
}

export default TodoStore;
