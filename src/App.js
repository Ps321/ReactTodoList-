import './App.css';
import Header from './comps/header';
import Todos from './comps/Todos';
import Footer from './comps/Footer';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Addtodo from './comps/addtodo';
import About from './comps/about';
import Form from './comps/form';
import Carousel1 from './comps/carousel';
import Aboutr from './comps/aboutr';
import {
  BrowserRouter as Router,
  Switch,
  Route
 
} from "react-router-dom";

function App() {
  let initstate;
  if (localStorage.getItem("todos") === null) {
    initstate = [];
  }
  else {
    initstate = JSON.parse(localStorage.getItem("todos"));
  }
  const ondelete = (todo) => {
    console.log("i am on delete of ", todo);
    settodos(todos.filter((e) => {
      return e !== todo;
    }))
  }
  const addTodo = (title, desc) => {
    console.log("iam adding");
    const t1 = title;
    console.log(t1);
    let sno = 0;
    if (todos.length > 0) {
      sno = (todos[todos.length - 1].sno) + 1;
    }
    else {
      sno = 1;
    }
    const mytodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    settodos([...todos, mytodo]);
    console.log(mytodo);


  }
  const [todos, settodos] = useState(initstate);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos])
  return (
    <>
      <Router>
        <Header Title="To-do List" />
        <Switch>
          <Route exact path="/" render={()=>{
            return(
              <>
              <Addtodo AddTodo={addTodo} />

<Todos todos={todos} ondelete={ondelete} />
              </>)
            }
          }>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/form">
            <Form />
          </Route>
          <Route exact path="/carousel">
            <Carousel1 />
          </Route>
          <Route exact path="/aboutr">
            <Aboutr />
          </Route>

        </Switch>


        
        <Footer />
      </Router>
    </>
  );
}

export default App;
