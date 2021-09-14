import React from 'react'

export default function Form() {
    return (
        <div className="container my-5">

<h3 className="text-center my-5" style={{fontFamily:'sans-serif',fontWeight:'900',fontSize:'48px'}}><span style={{color:'red'}}>Login</span>-<span style={{color:'green'}}>Form</span> </h3>


            <form>
                <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                    <input class="form-control" type="text" placeholder="Enter Email" /><br />
                    </div>
                    <div className="form-group">
                    <label for="exampleInputEmail1">Password</label>
                    <input class="form-control" type="text" placeholder="Enter password" />
                    <br />
                    </div>
                    <button className="btn btn-success" id="submit" > submit</button>

                
            </form>
        </div>
    )
}
