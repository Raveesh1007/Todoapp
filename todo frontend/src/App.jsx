import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/todos')
      .then(async function (res) {
        const json = await res.json();
        setTodos(json.todos);
      })
      .catch(error => console.error("Error fetching todos:", error));
  }, []);

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
