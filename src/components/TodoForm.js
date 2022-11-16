import React,  {useState, useEffect} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
      };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
          });
        setInput(" ");
    };


    return (
       <form onSubmit={handleSubmit} className='todo-form'>
             <>
          <input
            placeholder='Update your item'
            value={input}
            name='text'
            className='todo-input edit'
            onChange={handleChange}
          />
          <button  onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
       </form>
    )
}

export default TodoForm;