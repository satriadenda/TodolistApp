import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteTodo, editTodo } from '../redux/action/index';
import { ListGroup, Form, Button } from 'react-bootstrap';
import './style.css';

const TodoList = ({ todos, deleteTodo, editTodo, filter }) => {
  const [editMode, setEditMode] = useState(null);
  const [editedText, setEditedText] = useState('');
  const [selectAll, setSelectAll] = useState(false);

  const handleDelete = (id) => {
    deleteTodo(id);
  };

  const handleEdit = (id) => {
    setEditMode(id);
    const todo = todos.find((todo) => todo.id === id);
    setEditedText(todo.text);
  };

  const handleSave = (id) => {
    if (editedText.trim() !== '') {
      const updatedTodo = {
        id,
        text: editedText,
        completed: false,
      };
      editTodo(updatedTodo);
      setEditMode(null);
    }
  };

  const handleChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleToggleAll = () => {
    setSelectAll(!selectAll);
  };

  const handleToggleTodo = (id) => {
    const updatedTodo = todos.find((todo) => todo.id === id);
    updatedTodo.completed = !updatedTodo.completed;
    editTodo(updatedTodo);
  };

  const filteredTodos = () => {
    switch (filter) {
      case 'ACTIVE':
        return todos.filter((todo) => !todo.completed);
      case 'COMPLETED':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  return (
    <div>
      <h2>All Todos</h2>
      <ListGroup>
        {filteredTodos().map((todo) => (
          <ListGroup.Item key={todo.id} className="border border-dark">
            {editMode === todo.id ? (
              <Form>
                <Form.Group controlId="editTodoForm">
                  <Form.Control type="text" value={editedText} onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" onClick={() => handleSave(todo.id)}>
                  Save
                </Button>
              </Form>
            ) : (
              <>
                <label>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggleTodo(todo.id)}
                  />{' '}
                  {todo.text}
                </label>
                <div className="d-flex justify-content-end">
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(todo.id)}
                    className="ml-2"
                  >
                    Delete
                  </Button>
                  <Button
                    variant="info"
                    onClick={() => handleEdit(todo.id)}
                    className="ml-2"
                    style={{ backgroundColor: '#e79324', borderColor: 'white' }}
                  >
                    Edit
                  </Button>
                </div>
              </>
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos.todos,
    filter: state.todos.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    editTodo: (todo) => dispatch(editTodo(todo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
