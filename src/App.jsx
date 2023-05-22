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
      <div className="flex flex-col">
        <ToggleLightDarkMode className="pt-2 w-fit h-fit self-end" />
        <h1 className="mb-5 text-center">Awesome Todo List</h1>

        <form onSubmit={handleSubmit}>
          <label className="text-left" htmlFor="item">
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
        <ul className="space-y-4 my-16 flex flex-col items-start text-start w-full justify-between ">
          {todos.map(todo => {
            return (
              <li
                key={todo.id}
                className="flex justify-between w-full items-center border-2 border-black dark:border-white bg-lime-50/50 p-4 rounded-lg pr-12 md:pr-4"
              >
                <input
                  className="sm:min-w-[30px] min-w-[20px] h-10 self-center mr-3"
                  type="checkbox"
                />
                <div className="flex flex-col md:flex-row items-center  w-full py-4 justify-between overflow-auto gap-y-10">
                  <label className="flex break-words overflow-auto">
                    {todo.title}
                  </label>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="bg-red-500 px-4 py-2 rounded-md text-white border-2 border-black dark:border-white h-fit ml-3 md:w-fit w-10/12"
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
