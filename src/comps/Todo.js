import React from 'react'
export default function Todo({todo, ondelete}) {
    return (
       <div style={{paddingRight:'10%'}}>
        <h3 id="gg" style={{color:"green",fontWeight:900}}>{todo.title}</h3>
        
        <h6>{todo.desc}</h6>
        <button style={{ float:'right',marginTop:'-4.5%'}} className="btn btn-outline-danger" onClick={()=>{ondelete(todo)}}><i class="fa fa-trash"></i></button>
        <hr/>
        </div>
    )
}
