import React from "react";
import { useState } from "react";
import './App.css';

function App() {

  const [message,setMessage] = useState('');
  const [response,setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3001',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({message})
    })
    .then((res)=>res.json())
    .then((data)=>{console.log(data.message); setResponse(data.message)})
  }
 
  return(
    <>
    <h1>Ask Questions</h1>
    <p>This data is being generated with the help of chatGPT API.</p>
    <form onSubmit={handleSubmit}>
      <textarea value={message} onChange={(e)=>{setMessage(e.target.value)}}></textarea>
      <button type="submit" className="submit">Submit</button>
    </form>

    <p className="show">{response}</p>
    </>
  )
}

export default App;
