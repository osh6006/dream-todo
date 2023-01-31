import "./App.css";
import { AddForm } from "./components/AddForm/AddForm";
import { TodoContainer } from "./components/TodoContainer";
import { TodoItems } from "./components/TodoItem/TodoItems";
import { TopMenu } from "./components/TopMenu/TopMenu";

function App() {
  return (
    <div className="App">
      <TodoContainer>
        {/* TopMenu */}
        <TopMenu />

        {/* TodoItem */}
        <TodoItems />

        {/* AddForm */}
        <AddForm />
      </TodoContainer>
    </div>
  );
}

export default App;
