import React, { useState } from "react";
import styled from "styled-components";

const TodoListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
  margin-bottom: 10px;
  background-color: white;
`;

const Checkbox = styled.input`
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const TextInput = styled.input`
  flex: 1;
  text-decoration: ${({ $isChecked }) =>
    $isChecked ? "line-through" : "none"};
  color: ${({ $isChecked }) => ($isChecked ? "gray" : "black")};
`;

const Text = styled.span`
  flex: 1;
  line-height: center;
  align-items: center;
  font-size: 1.15rem;
  text-decoration: ${({ $isChecked }) =>
    $isChecked ? "line-through" : "none"};
  color: ${({ $isChecked }) => ($isChecked ? "gray" : "black")};
`;

const Button = styled.button`
  margin-left: 5px;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  border: 1px solid grey;
  cursor: pointer;
  color: white;

  &:hover {
    opacity: 0.8;
  }

  &.save-button {
    background-color: #28a745;
  }

  background-color: inherit;
`;

const TodoItem = ({ id, text, isCompleted, onDelete, onEdit }) => {
  const [isChecked, setIsChecked] = useState(isCompleted);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onEdit(id, text, isChecked);
    console.log(isCompleted);
  };

  const handleDeleteClick = () => {
    onDelete(id);
  };

  const [editing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(id, editedText, isChecked);
    setEditing(false);
  };

  const handleInputChange = (e) => {
    setEditedText(e.target.value);
  };

  return (
    <TodoListItem className="todo-item">
      <Checkbox
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      {editing ? (
        <TextInput
          type="text"
          value={editedText}
          onChange={handleInputChange}
        />
      ) : (
        <Text $isChecked={isChecked}>{text}</Text>
      )}
      {editing ? (
        <Button
          onClick={handleSaveClick}
          //style={{ backgroundColor: "#28a745" }}
        >
          💾
        </Button>
      ) : (
        <Button
          onClick={handleEditClick}
          //style={{ backgroundColor: "skyblue" }}
        >
          ✏️
        </Button>
      )}
      <Button
        onClick={handleDeleteClick}
        //style={{ backgroundColor: "#dc3545" }}
      >
        🗑️
      </Button>
    </TodoListItem>
  );
};

export default TodoItem;