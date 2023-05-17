import './styles.css';
import ToggleLightDarkMode from './ToggleLightDarkMode';

function App() {
  return (
    <div className="wrapper">
      <div className="flex flex-col items-center text-center">
        <ToggleLightDarkMode className="pt-2 w-fit h-fit self-end" />
        <h1 className="">Awesome Todo List</h1>
        <p>One task a day, keeps your problems away!</p>
      </div>
    </div>
  );
}

export default App;
