import React from 'react'
import Body from './Body'
import Navbar from './Navbar'
import {useState} from 'react'

function TextUtils() {

  //For setting the mode{dark/light} of the page
  const [mode, setMode] = useState('light');

  //Changing the mode to light or dark
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
    }
    else{
      setMode('dark');
    }
  }

  //varible for changing the text color based on mode{light/dark}
  var clr = 'light';
  if (mode === 'light'){
    clr = 'dark';
  }


  return (
    <div>
        <Navbar mode={mode} toggleMode={toggleMode} clr={clr}/>
        <Body mode={mode} clr={clr} />
        
    </div>
  )
}

export default TextUtils