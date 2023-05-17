import './styles.css';
import { useState } from 'react';
import ToggleLightDarkMode from './ToggleLightDarkMode';

function App() {
  const [newItem, setNewItem] = useState('');
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setNewItem('');

    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id);
    });
  }

  console.log(todos);

  return (
    <div className="wrapper">
      <div className="flex flex-col text-center">
        <ToggleLightDarkMode className="pt-2 w-fit h-fit self-end" />
        <h1 className="">Awesome Todo List</h1>
        <p>One task a day, keeps your problems away!</p>

        <form onSubmit={handleSubmit}>
          <label className="text-start" htmlFor="item">
            New Task
          </label>
          <div className="flex rounded-md border-2 border-black dark:border-white bg-white">
            <input
              value={newItem}
              onChange={e => setNewItem(e.target.value)}
              type="text"
              className="w-full px-4 py-2 rounded-md rounded-r-none"
            />
            <button className="px-10 w-fit text-black rounded-md rounded-l-none bg-green-300">
              Add
            </button>
          </div>
        </form>
        <ul className="space-y-2 mt-5 flex flex-col items-start text-start w-full">
          {todos.map(todo => {
            return (
              <li
                key={todo.id}
                className="flex justify-between w-full items-center"
              >
                <label>
                  <input type="checkbox" />
                  {todo.title}
                </label>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="bg-red-500 px-4 py-2 ml-2 rounded-md text-white border-2 border-black dark:border-white h-fit"
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
