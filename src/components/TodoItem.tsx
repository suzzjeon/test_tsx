import React from "react";
import { Todo } from "../redux/modules/todos"; // Import Todo type
import styled from "styled-components";
import usePost from "../hook/usePost";

type TodoItemProps = {
  todo: Todo;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { id, title, body, isDone } = todo;
  const postHandler = usePost();

  return (
    <TodoCard>
      <CardTitle>{title}</CardTitle>
      <CardBody>{body}</CardBody>
      <ButtonContainer>
        <ToggleButton onClick={() => postHandler(toggleTodo(id))}>
          {isDone ? "🪵" : "💣"}
        </ToggleButton>
        <DeleteButton onClick={() => postHandler(deleteTodo(id))}>
          🧯
        </DeleteButton>
      </ButtonContainer>
    </TodoCard>
  );
};

export default TodoItem;

const TodoCard = styled.div`
  width: 250px;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 1rem;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  text-align: center;
`;

const CardBody = styled.p`
  margin: 10px 0;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;
`;

const ToggleButton = styled.button`
  width: 50%;
  height: 40px;
  border-radius: 10rem;
  cursor: pointer;
  border: none;
  background-color: #fff;
  font-size: 2em;

  &:hover {
    box-shadow: 0px 0px 10px 2px rgba(255, 0, 0, 0.5);
  }
`;

const DeleteButton = styled.button`
  width: 50%;
  height: 40px;
  border-radius: 10rem;
  cursor: pointer;
  border: none;
  background-color: #fff;
  font-size: 2rem;

  &:hover {
    box-shadow: 0px 0px 10px 2px rgba(255, 0, 0, 0.5);
  }
`;
