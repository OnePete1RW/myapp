import React from 'react'

function Formlogin() {

    return (
        <form className="container-sm position-absolute top-50 start-50 translate-middle">

        <div>
            <button className="fw-bolder btn btn btn-danger bi bi-google p-2 border-0 rounded-pill" alt="5" style={{width: "100%",left:""}}>Login</button>
       </div>
       <br></br>
       <div>
            <button className="fw-bolder btn btn btn-danger bi bi-google p-2 border-0 rounded-pill" alt="5" style={{width: "100%"}}>Register</button>
       </div>
       <p></p>
        </form>
    )
}


export default Formlogin;
