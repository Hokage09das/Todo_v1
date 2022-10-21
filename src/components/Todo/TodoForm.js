import { useState } from "react";
import styled from "styled-components";

const TodoFormContainer = styled.div`
  margin-bottom: 30px;
  &form {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & input {
    width: 45%;
    height: 30px;
    font-size: 1.3rem;
  }
  &button {
    cursor: pointer;
    margin-left: 20px;
    height: 200px;
    background-color: beige;
    font-size: 1.5rem;
  }
  & button:hover {
    background-color: rgb(240, 240, 155);
  }
  & input,
  button {
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
  }
`;

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <TodoFormContainer>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder='Enter new Todo'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type='submit'
          disabled={!text}
        >
          Submit
        </button>
      </form>
    </TodoFormContainer>
  );
}

export default TodoForm;
