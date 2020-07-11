import React from 'react';
import {Button , Card , Form , } from 'react-bootstrap';
import useForm from './hooks/hookForm';
import 'bootstrap/dist/css/bootstrap.min.css';


function TodoForm(props){

    const [handleSubmit, handleInputChange] = useForm(callback)

    function callback(item){
       props.handleSubmit(item)
    }
    
    return (
      <>
       <Form onSubmit={handleSubmit}>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>To Do Item</Card.Title>
                        <Form.Group controlId="formBasicEmail">
                        
                            <Form.Control name="text"   placeholder="Add To Do List Item" onChange={handleInputChange} />
                            <Form.Text className="text-muted">
                            your email will remain a secret
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Difficulty Rating</Form.Label>
                            <Form.Control defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Assigned To</Form.Label>
                            <Form.Control type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange}  />
                        </Form.Group>
                        <Button variant="primary" type='submit'>Add Item</Button>
                    </Card.Body>
                </Card>
            </Form>
      
      </>
    );
  
}

export default TodoForm;