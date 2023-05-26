import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/action/index';
// import { Form, Button } from 'react-bootstrap';
import './style.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text,
        completed: false,
      };
      addTodo(newTodo);
      setText('');
    }
  };

  return (
    <div>
      <h2>Add Todo</h2>
      <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Group controlId="addTodoForm">
                <Form.Control
                  type="text"
                  value={text}
                  onChange={handleChange}
                  placeholder="Enter todo"
                  style={{ borderColor: 'black' }}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                variant="primary"
                type="submit"
                className="w-100"
                style={{ 
                  backgroundColor: 'rgb(16, 173, 10)', 
                  border: '1px solid white'
                }}
              >
                Add
              </Button>
            </Col>
          </Row>
      </Form>

    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
  };
};

export default connect(null, mapDispatchToProps)(AddTodo);
