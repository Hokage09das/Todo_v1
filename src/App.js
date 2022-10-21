import { useState } from "react";
import styled from "styled-components";
import TodoForm from "./components/Todo/TodoForm";
import Todolist from "./components/Todo/TodoList";

const AppStyle = styled.div`
  text-align: center;
`;
const TitleStyle = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 40px;
  margin-top: 24px;
`;

function App() {
  const [todos, setTodos] = useState([]);
  const addTodoHandler = (text) => {
    setTodos([...todos, text]);
  };
  const deleteTodoHandler = (index) => {
    setTodos(todos.filter((todo, idx) => idx !== index));
  };
  return (
    <AppStyle>
      <TitleStyle>Todo App</TitleStyle>
      <TodoForm addTodo={addTodoHandler} />
      <Todolist
        todos={todos}
        deleteTodo={deleteTodoHandler}
      />
    </AppStyle>
  );
}

export default App;
