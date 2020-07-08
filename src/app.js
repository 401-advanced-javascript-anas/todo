import React from 'react';

import ToDo from './todo/todo.js';
import Header from './todo/header';
import SettingsContext from './todo/context/site';

function App () {
    return (
        <>
        <SettingsContext>
        <Header />
        <ToDo />
        </SettingsContext>
        </>
    );
}

export default App;
