import React, { useState, useEffect } from 'react';
import './style.css';
import Button from '@mui/material/Button';

const Todos = () => {
    const [item, setItems] = useState('');
    const [update, setUpdate] = useState([]);
    const setAlert = "Inputbox can't be blank";


    const takeVal = (e) => {
        return setItems(e.target.value);
    };

    const pdate = () => {

        if (item.length < 1)

            alert(setAlert);



        else {

            const oldItems = {
                title: item,
                id: Date.now(),
                completed: false


            }

            setUpdate([oldItems, ...update]);
            localStorage.setItem('todos', JSON.stringify([oldItems, ...update]));
            setItems('');
        }

    };

    console.log(update)


    const deleteTodo = (id) => {
        const newTodo = update.filter((e) => {
            return (e.id !== id);
        });
        setUpdate(newTodo);
        localStorage.setItem('e', JSON.stringify(newTodo));
    }

    useEffect(() => {
        const update = JSON.parse(localStorage.getItem('update'));
        if (update?.length > 0) {
            setUpdate(update);
        }
    }, []);

    const toggleTodo = (id) => {
        const newTodos = update.map((todo) => {
            if (todo.id === id) {
                todo.completed = true;
            }
            return todo;
        });
        setUpdate(newTodos);
        localStorage.setItem('update', JSON.stringify(newTodos));
    };


    return (<div className="main">

        <div className="head">
            <h1>New Todo App</h1>
            <div>
                <input type='text' onChange={takeVal} placeholder="Add your work.." value={item} />
                <Button variant="contained" onClick={pdate}>Add</Button>
            </div>


            <div className="list">
                

                {update.map((itemVal, index) => {
                    return (
                        <div key={index} >
                            <ul>
                                <li onClick={() => toggleTodo(itemVal.id)} className={itemVal.completed ? 'completed' : 'not-completed'}>{itemVal.title}</li>
                            </ul>

                            <span>
                                <Button  variant="contained" onClick={() => deleteTodo(itemVal.id)}>Delete</Button>
                            </span>

                        </div>




                    )

                })}

            </div>



        </div>

    </div>)
};

export default Todos;