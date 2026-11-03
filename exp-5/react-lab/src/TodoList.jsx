import { useState } from 'react';

function TodoList() {

    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const addTodo = () => {

        if (input.trim()) {

            setTodos([...todos, input]);

            setInput('');

        }
    };

    const removeTodo = (index) => {

        setTodos(todos.filter((_, i) => i !== index));

    };

    return (
        <div>

            <h2>To-Do List</h2>

            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add task"
            />

            <button onClick={addTodo}>Add</button>

            <ul>

                {todos.map((todo, i) => (

                    <li key={i}>
                        {todo}

                        <button onClick={() => removeTodo(i)}>
                            Remove
                        </button>
                    </li>

                ))}

            </ul>

        </div>
    );
}

export default TodoList;