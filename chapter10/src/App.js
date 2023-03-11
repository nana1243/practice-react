import TodoTemplate from "./components/TodoTemplate/TodoTemplate";
import TodoInsert from "./components/TodoInsert/TodoInsert";
import TodoList from "./components/TodoList/TodoList";
import {useCallback, useRef, useState} from "react";

function App() {
    const [todos, setTodos] = useState(
        [
            {
                id: 1,
                text: 'react 기초 알아보기',
                checked: false,
            },
            {
                id: 2,
                text: 'python 기초 알아보기',
                checked: false,

            },
            {
                id: 3,
                text: 'java 기초 알아보기',
                checked: false,

            },
        ]
    )
    const nextId = useRef(4);
    const onInsert = useCallback(text => {
        const todo = {
            id: nextId.current,
            text,
            checked: false
        }
        setTodos(todos.concat(todo));
        nextId.current += 1

    }, [todos]);

    const onRemove = useCallback(id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }, [todos])

    const onToggle = useCallback(id => {
        setTodos(todos.map(
            todo => {
                return todo.id === id ? {...todo, checked: !todo.checked} : todo
            }
        ));
    }, [todos])

    return (
        <div className="App">
            <TodoTemplate>
                <TodoInsert onInsert={onInsert}/>
                <TodoList
                    todos={todos}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            </TodoTemplate>
        </div>
    );
}

export default App;
