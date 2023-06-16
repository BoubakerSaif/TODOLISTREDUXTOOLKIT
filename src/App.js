import { useSelector } from "react-redux";
import "./App.css";
import TodoList from "./Components/todoList";
import Add from "./Components/Add";

function App() {
  const { todos } = useSelector((state) => state.todo);

  return (
    <div className="App">
      <br /> <Add />
      <br />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
