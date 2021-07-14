import React from 'react'
import TodoStore from './TodoStore'
import Header from './Header'
import Form from './Form'
import List from './List'

export const App = () => {
    return (
        <TodoStore>
            <Header />
            <Form />
            <List />
        </TodoStore>
    )
}
