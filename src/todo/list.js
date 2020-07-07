import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function TodoList(props) {

  return (
    <ul>
      {props.list.map(item => (
        <li
          className={`complete-${item.complete.toString()}`}
          key={item._id}
        >
          <Card style={{ width: '22rem' }}>
            <Card.Body>
              <div className="topname">
                <h3 onClick={() => props.handleComplete(item._id)}>

                  {`${item.complete ? 'complete' : 'pending'}`}

                </h3>
                <Card.Title className='name' variant='border-bottom border-dark'>
                  {item.assignee}
                </Card.Title>
                <button className="xButton" onClick={() => props.deleteNote(item._id)}>X</button>
              </div>


              <div className='contentInformation' >  {item.text} </div>
              <div className='diff'> Difficulty : {item.difficulty}</div>


            </Card.Body>
          </Card>
        </li>
      ))}
    </ul>
  );

}

export default TodoList;