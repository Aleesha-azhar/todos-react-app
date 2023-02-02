import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { AddTodo } from "./MyComponents/AddTodo";
import { AboutUs } from './MyComponents/AboutUs';

import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";




function App() {
  const onDelete = (todo) => {
    console.log("I am ondelete", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));



  }

  const addTodo = (title, desc) => {
    console.log("i am adding todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;

    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);


  }



  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the park",
      desc: "for walking"
    },
    {
      sno: 2,
      title: "Go to the market",
      desc: "for shoping"
    },

    {
      sno: 3,
      title: "Go to the grocery store",
      desc: "for buying groceries"
    },
  ]);
 

          



  return (

    <>
      <Router>

        <Header title="My TodosList" />
        <Routes>
          <Route exact path="/" element={
            <React.Fragment>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
            </React.Fragment>
            } />
                      
          <Route exact path="/about" element={<AboutUs />} />
        </Routes>

        
      </Router>
    </>


  );
}

export default App;
