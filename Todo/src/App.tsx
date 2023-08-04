import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { Todo } from "./model";
import InputField from "./components/InputField";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (<div className="bg-secondary">
        <div className="container justify-content-center text-white">
          <h1 className="text-center m-4">Todo</h1>
          <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
          <TodoList todos={todos} setTodos={setTodos} />
        </div>
    </div>
  );
};

export default App;
