import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function TodoForm (props) {
  const [item, setItem] = useState({});



const handleInputChange = e => {
  setItem({ item: {...item, [e.target.name]: e.target.value } });
};

const handleSubmit = (e) => {
  e.preventDefault();
  e.target.reset();
  props.handleSubmit(item);
  const itemVar = {};
    setItem(itemVar);
};

return (
  <>
    <h3>Add Item</h3>
    <Form onSubmit={handleSubmit}>
      
    <Form.label>To Do Item
        <Form.Control name="text" placeholder="Add To Do List Item" onChange={handleInputChange}/>
      </Form.label>

      <Form.Group controlId="formBasicRange">
        <Form.Label>Difficulty Rating
        <Form.Control  defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} /></Form.Label>
      </Form.Group>

        <Form.label>Assigned To
        <Form.Control type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} /></Form.label>

      <Button variant="primary" type="submit">Add Item</Button>
    </Form>
  </>
);

}


export default TodoForm;
