import React,{useState} from 'react'
import './App.css';

function App() {
  const [todos,usetodo] = useState(['Eat', 'Sleep', 'Repeat']);

  return (
    <div className="App">
    <h1>Todo app</h1>
    <input/>
    <button>add todo</button>
    <ul>
    {todos.map(todo => (
      <li>{todo}</li>
    ))}
    </ul>

    </div>
  );
}

export default App;
