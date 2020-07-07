import React, { useState, useEffect } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import useAjax from './hooks/Ajax';
import './todo.scss';


function ToDo(props) {

  let url = `https://lab32-401.herokuapp.com/todo`

  const [list, setList] = useState([]);
  const [getElement, postElement, putElement, deleteElement] = useAjax(setList);

  
  const addItem = (item) => {
    item.complete = false;
    postElement(url, item);
  };

  const toggleComplete = id => {
    let item = list.filter(i => i._id === id)[0] || {};
    if (item._id) {
      item.complete = !item.complete;
      let z = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList([...z])
      let data = item;
      putElement(url, data)
    }
  };


  useEffect(() => {
    document.title = `TO DO LIST ${list.filter(item => !item.complete).length}`
  }, [list]);
  useEffect(() => {
    getElement(url);
    
  }, [list]);


  const deleteComplete = id => {
    let idx = list.findIndex(i => i._id === id);
    list.splice(idx, 1);
    setList([...list])
    deleteElement(url, id)
  }


  return (
    <>
      <main>
        <header>
          <h2 className='toDoHeader'>
            TO DO LIST ({list.filter(item => !item.complete).length})
          </h2>
        </header>

        <section className="todo">

          <div>
            <TodoForm handleSubmit={addItem} />
          </div>

          <div>
            <TodoList
              list={list}
              handleComplete={toggleComplete}
              deleteNote={deleteComplete}
            />
          </div>
        </section>
      </main>
    </>
  );

}
export default ToDo;