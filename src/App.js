import axios from 'axios';
import './App.css';
import Cards from './Card';
import Navbars from './Navbar';
import { useEffect, useState } from 'react';
import { getRandomMeme, getLocalRandomMeme } from '@blad3mak3r/reddit-memes';
import Footers from './Footer';

import Reload from './Reload';

function App() {
  const [li,updateli] = useState([]);
  
  const getData = async ()=>{
    for(var i=0;i<10;i++){
    const res = await getRandomMeme();
    const re ={
        key:res.id,
        title:res.title,
        img:res.image
    };
    updateli((pre)=>{
      return [...pre,re];
    });
    }
  }
  useEffect(()=>{
    getData()
  },[]);
  return (<>
  <Navbars/>
  <div className='w-50 mx-auto flex-column '>
    {li.map((val)=>{
        return <Cards 
        key={val.id}
        img={val.img} 
        title={val.title}/>
      })}
  </div>
  <Reload rel={getData}/>
  <Footers/>
    </>
  );
}

export default App;
