import TodoTemplate from "./components/TodoTemplate/TodoTemplate";
import TodoInsert from "./components/TodoInsert/TodoInsert";
import TodoList from "./components/TodoList/TodoList";
import {useCallback, useRef, useState} from "react";

function createBulkTodos() {
    const array = [];
    for(let i=1;i<=10;i++){
        array.push({
            id : i,
            text : `todo : ${i} 번째`,
            checked : false
        })
    }
    return array;
}

function App() {
    const [todos, setTodos] = useState(createBulkTodos)
    const nextId = useRef(2501);
    const onInsert = useCallback(text => {
        const todo = {
            id: nextId.current,
            text,
            checked: false
        }
        setTodos(todos => todos.concat(todo));
        nextId.current += 1

    }, []);

    const onRemove = useCallback(id => {
        setTodos(todos => todos.filter(todo => todo.id !== id))
    }, [])

    const onToggle = useCallback(id => {
        setTodos(todos=> todos.map(
            todo => {
                return todo.id === id ? {...todo, checked: !todo.checked} : todo
            }
        ));
    }, [])

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

// export default App;
