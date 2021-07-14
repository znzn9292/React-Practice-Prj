import React, { useContext } from 'react'
import './Header.css'
import { TodoContext } from './TodoStore.js'

export const Header = () => {
    const { todos } = useContext(TodoContext);
    return (
        <>
            <h1>HELLO TODO Application</h1>
            <div className="countInfo">해야할일 : {todos.filter(v => v.status === "todo").length} 개가 있습니다.</div>
        </>
    )
}

export default Header