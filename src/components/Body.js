import React, {useState} from 'react'

function Body(props) {
    //To store input value and perform operations
    const [text,setText] = useState('');
    
    //Convert text to upper case
    const handleUp = () =>{
        let newText = text.toUpperCase();
        setText(newText)}
    
    //Convert text to Lower case
        const handleDown = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        console.log(text.split(' ').length )
    }

    //Catilizing the text
    const handleCap=() =>{
        let newText = text.toLowerCase().split(". ")
        for(let i = 0; i < newText.length; i++){
            newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1,);

        }
        setText(newText.join('. '));
    }   

    //Removing unwanted extra space
    const handleSpace=() =>{
        let newText = text.replace(/\s+/g, " ").trim();
        setText(newText);
    }

    //Clear the input
    const clear = () =>{
        setText('');
    }

    //for setting the color on different theme{dark/light}
    var color='secondary';
    if (props.mode === 'light'){
        color = 'dark';

        
    }
         
    const handleOnChange = (event) =>{setText(event.target.value);}

  return (
    <div className={`bg-${props.mode}`} style={{height:513}}>
        <br/>
      <textarea name="text" id="user-text" value={text} onChange={handleOnChange}  cols="80" rows="10" placeholder="Enter your text here!" style={{border:`2px solid ${props.mode}`}}></textarea><br/>
      <button type="button" className={`btn btn-${props.clr} mr-2 mt-1`} onClick={handleUp} >Uppercase</button>
      <button type="button" className={`btn btn-${props.clr} mr-2 mt-1`} onClick={handleDown}>Lowercase</button>
      <button type="button" className={`btn btn-${props.clr} mr-2 mt-1`} onClick={handleCap}>Capitalize</button>
      <button type="button" className={`btn btn-${props.clr} mr-2 mt-1`} onClick={handleSpace}>Remove Spaces</button>
      <button type="button" className={`btn btn-${props.clr} mr-2 mt-1`} onClick={() => {navigator.clipboard.writeText(text)}}>Copy</button>
      <button type="button" className="btn btn-danger mr-2  mt-1" onClick={clear}>Clear</button>  
      <br />
           
    </div>
  )
}

export default Body
