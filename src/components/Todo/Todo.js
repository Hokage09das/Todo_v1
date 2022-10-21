import styled from "styled-components";
import { RiTodoFill } from "react-icons/ri";

const TodoStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: center;
  width: 51.5%;
  padding: 10px 20px;
  font-size: 1.5rem;
  border-radius: 5px;
  border: 2px solid #555;
  color: #112d49;
  background-color: #fbfef9;
  & div {
    width: 100%;
    text-align: left;
  }
`;

function Todo({ todo, index, deleteTodo }) {
  return (
    <TodoStyle onDoubleClick={() => deleteTodo(index)}>
      <RiTodoFill
        style={{
          fontSize: "1.8rem",
          marginRight: "10px",
          color: "teal",
        }}
      />
      <div>{todo}</div>
    </TodoStyle>
  );
}

export default Todo;
