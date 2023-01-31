import { useState } from "react";
import "./App.css";
import { AddForm } from "./components/AddForm/AddForm";
import { TodoContainer } from "./components/TodoContainer";
import { TodoItems } from "./components/TodoItem/TodoItems";
import { TopMenu } from "./components/TopMenu/TopMenu";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  const [todos, setTodos] = useState([
    { contents: "강의 보기", completed: false },
    { contents: "카페 가기", completed: false },
    { contents: "청소 하기", completed: false },
  ]);

  return (
    <div className="App">
      <DarkModeProvider>
        <TodoContainer>
          {/* TopMenu */}
          <TopMenu todos={todos} setTodos={setTodos} />

          {/* TodoItem */}
          <TodoItems todos={todos} setTodos={setTodos} />

          {/* AddForm */}
          <AddForm todos={todos} setTodos={setTodos} />
        </TodoContainer>
      </DarkModeProvider>
    </div>
  );
}

export default App;
