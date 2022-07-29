import React, { useState } from 'react';
import Input from './components/Input/Input';
import ListLinks from './components/List/ListLinks';
import axios from 'axios';


  export const ListContext = React.createContext()

function App() {
  
  const [data, setData] = useState()
  const [status, setStatus] = useState()
  const [ show, setShow ] = useState(false)
  const [ query, setQuery ] = useState('')

  const input = (e) => {
    setQuery(e.target.value)
  }

  const fetchData = (e) => {
    e.preventDefault();
    axios.get(`https://en.wikipedia.org/w/rest.php/v1/search/page?q=${query}&limit=20`)
    .then(response => {
      console.log(response.data.pages)
      setData(response.data.pages)
    })
    setShow(true)
  }


  return (
    <ListContext.Provider value={data} >
      <div className="App">
      <Input fetchData={fetchData} input={input} show={show} />
      {show && <ListLinks/> }
    </div>
    </ListContext.Provider>
  );
}

export default App;
