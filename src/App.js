import { useState } from "react";
import "./App.css";
import { AddForm } from "./components/AddForm/AddForm";
import { TodoContainer } from "./components/TodoContainer";
import { TodoItems } from "./components/TodoItem/TodoItems";
import { TopMenu } from "./components/TopMenu/TopMenu";

function App() {
  const [todos, setTodos] = useState([
    { contents: "강의 보기", completed: false },
    { contents: "카페 가기", completed: false },
    { contents: "청소 하기", completed: false },
  ]);
  return (
    <div className="App">
      <TodoContainer>
        {/* TopMenu */}
        <TopMenu />

        {/* TodoItem */}
        <TodoItems todos={todos} setTodos={setTodos} />

        {/* AddForm */}
        <AddForm todos={todos} setTodos={setTodos} />
      </TodoContainer>
    </div>
  );
}

export default App;
