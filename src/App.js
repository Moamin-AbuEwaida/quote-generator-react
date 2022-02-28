import Quote from "./components/Quote";
import {useState, useEffect} from 'react'

function App() {

  const [quote, setQuote] = useState({
    anime:null,
    charcater:null,
    quote:null
  });

  const fetchQuote = async ()=>{
    return await fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
  }

  const generate = async ()=>{
    setQuote(await fetchQuote())
  }

  useEffect(async ()=>{
    setQuote(await fetchQuote())
  },[])

  return (
    <div className="App">
      <Quote quote={quote}/>
      <button onClick={generate}>Generate A New Quote</button>
    </div>
  );
}

export default App;
