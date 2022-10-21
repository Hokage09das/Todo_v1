import Todo from "./Todo";
import styled from "styled-components";

const TodoListStyle = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

function Todolist({ todos, deleteTodo }) {
  return (
    <TodoListStyle>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo, index) => (
        <Todo
          key={index}
          todo={todo}
          index={index}
          deleteTodo={deleteTodo}
        />
      ))}
    </TodoListStyle>
  );
}

export default Todolist;
