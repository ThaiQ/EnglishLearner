import React, { useState, useEffect } from 'react';
import './App.css';
import {folders} from './lesson/ind'
import {Link} from 'react-router-dom'

function App(props) {

  const [currentSec] = useState(props.match.params.section?props.match.params.section:"01-commerce")
  const file = require(`./lesson/${currentSec}/reading.pdf`)

  function section(folder){
    let list = []
    for (let i = 1; i<19; i++){
        try{
          let file = require(`./lesson/${folder}/${i}.mp3`)
          if (file) list.push(<source src={file} type="audio/mp3"/>)
        }
        catch(err){}
    }
  
    return <div className="audio-window">
      {list.length==0 ? list.map((audio,ind) => <div className='audio-block'>{ind+1}.<audio controls>
        {audio}
      </audio></div>):<h1>No Audio For The Lesson</h1>}
    </div>
  }

  return (
    <div className="App">
      <div className="scrollmenu">
        {folders.map((folder,ind)=><a key={ind} href={`${process.env.PUBLIC_URL}/${folder}`} >{folder}</a>)}
      </div>

      <div style={{backgroundColor:"black", padding:"2vw"}}>{section(currentSec)}</div>

      <iframe src={file}></iframe>

    </div>
  );
}

export default App;
