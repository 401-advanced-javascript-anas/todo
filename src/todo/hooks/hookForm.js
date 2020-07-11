import React, { useState } from 'react';

const useForm = (callback) => {
    const [item, setItem ] = useState({});
  
  const handleChange = event => {
        event.persist(); 

        setItem(({ ...item, [event.target.name]: event.target.value }));
    }

    const handleSubmit = event => {
        event.preventDefault();
        event.target.reset();
       callback(item);
   }


    return [handleSubmit, handleChange, item];
}

export default useForm;