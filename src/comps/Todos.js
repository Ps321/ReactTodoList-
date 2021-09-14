import React from 'react'
import Todo from './Todo'
export default function Todos(props) {
    
    return (
        <div className="container" style={{marginBottom:'100px',background:'none'}}>
           
            {props.todos.length===0?"Nothing to Display":
            props.todos.map((todo1)=>{
                return <Todo todo={todo1} key={todo1.sno} ondelete={props.ondelete}/>
            }

            )}
        </div>
    
    )
} 

