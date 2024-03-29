import React from "react";
import { useState } from "react";
import './App.css';

function App() {

  const [message,setMessage] = useState('');
  const [response,setResponse] = useState('');
  const [error,setError] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

 const completionn = async () => {
   const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{role: "user", content: "Hello world"}],
      Authorization: "Bearer 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"
  });
 }
  
console.log(completion.data.choices[0].message);


  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://api.openai.com/v1/chat/completions',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({message})
      })
      .then((res)=>res.json())
      .then((data)=>{console.log(data.message); setLoading(false); setResponse(data.message)})
  }

  const handleClick = () => {
    setLoading(true);
  }
 
  return(
    <div className="main">
      <h1 className="heading"></h1>
      <div className="editing-container">
        <form className="form" onSubmit={handleSubmit}>
          <textarea placeholder="Tell me something funny" className="pallete" id="content" value={message} onChange={(e)=>{setMessage(e.target.value)}}></textarea>
          <button onClick={handleClick} type="submit" className="submit">
            {loading ? "Loading..." : "Submit"}
          </button>
        </form>

        <div className="result-panel">
          {loading ? <div className="shade"></div>: <p className="show">{response}</p>}
        </div>
      </div>

      <div className="rightmenu">
        <h1 className="option-heading">Options</h1>

        <ul className="option-list_ul">
            <li>
              <select>
                <option value="">Option 1</option>
                <option value="">Option 2</option>
                <option value="">Option 3</option>
                <option value="">Option 4</option>
                <option value="">Option 5</option>
              </select>
            </li>
            <li>
              <select>
                <option value="">Option 1</option>
                <option value="">Option 2</option>
                <option value="">Option 3</option>
                <option value="">Option 4</option>
                <option value="">Option 5</option>
              </select>
            </li>
            <li>
              <select>
                <option value="">Option 1</option>
                <option value="">Option 2</option>
                <option value="">Option 3</option>
                <option value="">Option 4</option>
                <option value="">Option 5</option>
              </select>
            </li>
            <li>
              <select>
                <option value="">Option 1</option>
                <option value="">Option 2</option>
                <option value="">Option 3</option>
                <option value="">Option 4</option>
                <option value="">Option 5</option>
              </select>
            </li>              
        </ul>  

      </div>

    </div>
  )
}

export default App;
