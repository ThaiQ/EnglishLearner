import React, { useState, useEffect } from 'react';
import './App.css';
import {folders} from './lesson/ind'
import {Link} from 'react-scroll'
import {isSafari} from "react-device-detect";

function App(props) {

  const file = require(`./lesson/01-commerce/reading.pdf`)

  function getIndex(){
    let index = []
    for (let folder of folders){
      let list = []
      for (let i = 1; i<19; i++){
          try{
            let file = require(`./lesson/${folder}/${i}.mp3`)
            if (file) {
              list.push(<source src={file} type="audio/mp3"/>)
            }
          }
          catch(err){}
      }
      let rfile = require(`./lesson/${folder}/reading.pdf`)
      let obj = {
        title: folder,
        mp3_list: list,
        read: rfile ? rfile : null,
      }
      index.push(obj)
    }
    return index
  }

  function page(){

    let index = getIndex()

    return <div>
      {index.map((thisPage,ind)=>{
        let list = thisPage.mp3_list
          return <section key={ind} id={thisPage.title}><div style={{paddingBottom:'10vh'}}>
          <div className="audio-window">
            <h2>{thisPage.title}</h2>
            {list.length != 0? list.map((audio,ind)=>{
              return <div className='audio-block'>{ind+1}.<audio controls>
                {audio}
              </audio>
              </div>
            }):<h1>No Audio For The Lesson</h1>}
          </div>

          {isSafari ? <a className='reading' href={thisPage.read} target="_blank">{thisPage.title}'s reading</a> : <iframe src={thisPage.read}/>}
        </div></section>
      })}
    </div>
  }

  return (
    <div className="App">
      <div className="scrollmenu">
        {folders.map((folder,ind)=>
          <Link to={folder} smooth={true} duration={500} ><a key={ind} href={`/${folder}`} >{folder}</a></Link>
        )}
      </div>

      {page()}

    </div>
  );
}

export default App;
