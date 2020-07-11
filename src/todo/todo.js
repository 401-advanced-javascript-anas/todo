import React, { useState, useEffect, useContext } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import useAjax from './hooks/Ajax';
import './todo.scss';
import { SettingsContext } from './context/site';
import Auth from './auth';

function ToDo(props) {
  const siteContext = useContext(SettingsContext);
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
      let listing = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList([...listing])


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
    setList([...list])
  }


  return (
    <>
       <main>
      <header className="header-TODO">
        <h2 id='h2'>TO DO LIST Manager ({list.filter(item => !item.complete).length}) </h2>
      </header>
      <button className='show' onClick={e => siteContext.setShow(!siteContext.show)}>
          complete/pending
      </button>
      <section className="todo">

        <div class='difficulty'>
          <form onChange={e => siteContext.changeSort(e.target.value)}>
            <label >
              <input type="radio" name="sort" value='difficulty' />
            difficulty
              </label>
            <label >
              <input type="radio" name="sort" value='complete' />
            complete
          </label>
          <label >
              <input type="radio" name="sort" value='assignee' />
            assignee
          </label>
          <label >
              <input  type="radio" name="sort" value='none' />
            none
          </label>
          </form>

        </div>

         <Auth capability="update">
          <div>
            <TodoForm handleSubmit={addItem} />
          </div>
        </Auth>

        <div>
          <TodoList
            list={list}
            handleComplete={toggleComplete}
            handleDelete={deleteComplete}
          />
        </div>
      </section>
    </main>
    </>
  );

}
export default ToDo;