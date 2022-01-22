import React from 'react'

function Formlogin () {

    
  return (
    <form className='container-sm position-absolute top-50 start-50 translate-middle'>
      <div>
        <input
          type='text'
          name='username'
          className='p-2 border-1 rounded-pill form-control'
          alt='5'
          style={{width: '100%'}}
          placeholder='   Username'
          ></input>
      </div>
      <br/>
      <div>
        <input
          type='password'
          name='username'
          className='p-2 border-1 rounded-pill form-control'
          alt='5'
          style={{width: '100%'}}
          placeholder='   Password' ></input>
      </div>
      <br></br>
      <div>
        <button
          className='fw-bolder btn btn btn-danger bi bi-google p-2 border-0 rounded-pill'
          alt='5'
          style={{width: '100%'}}
          type='submit'>
          Submit
        </button>
      </div>
      <p></p>
    </form>
  )
}

export default Formlogin
