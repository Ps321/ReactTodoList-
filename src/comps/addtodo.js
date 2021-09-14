
import React, { useState } from 'react'

export default function Addtodo(props) {
   const [title, setTitle] = useState("");
   const [desc, setDesc] = useState("");
    
   const submit=(e)=>{
    e.preventDefault();
    if(!title || !desc){
        alert("Title or description could be blank");
    }
    else{
    props.AddTodo(title,desc);
    }
   }
   
    return (
        <div className="container my-3">
             <h3 className="text-center my-5" style={{fontFamily:'sans-serif',fontWeight:'900',fontSize:'48px'}}><span style={{color:'red'}}>To</span>-<span style={{color:'green'}}>do</span> List</h3>

            <h3 style={{ textAlign: 'left',fontFamily:'sans-serif',fontWeight:'600',fontSize:'38px' }}>Add a To-do</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" placeholder="Title" />
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <textarea type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc" placeholder="Description" />
                </div>
                <button type="submit" className="btn btn-success my-3" style={{float:'right'}}>Add To Do</button>
                <br/><br/>
            </form>
        </div>
    )
}
