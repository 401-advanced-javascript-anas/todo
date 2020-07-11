import React from 'react';

import ToDo from './todo/todo.js';
import Header from './todo/header';
import SettingsContext from './todo/context/site';

import LoginContext from './todo/context/loginContext';
import Login from './todo/login';
import SignUp from './todo/signup';
import Auth from './todo/auth'

function App () {
    return (
        <>
        <LoginContext>

        <Header />
        <Login />
        <SignUp />

        <Auth capability="read">
          <SettingsContext>
            <ToDo />
          </SettingsContext>
        </Auth>

      </LoginContext>
    </>
    )
}

export default App;
