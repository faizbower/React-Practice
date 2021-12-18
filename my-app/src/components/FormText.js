import React, { useState } from 'react'
export default function FormText(props) {
    const handleUpclick = ()=>{

        let newText = text.toUpperCase();
        setText(newText)
        }
        const handleLowclick = ()=>{
            let newText = text.toLowerCase();
            setText(newText)
            }
            const cleartext = ()=>{
                let newText = ('');
                setText(newText)
                }
         const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
        }
    const [text, setText] = useState('Enter text here');

    return (
        <>
        <div className = "container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'dark':'grey'}} id="Textarea1" rows="9"></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={handleUpclick}>Convert to Upper Case</button>
            <button className="btn btn-primary mx-3" onClick={handleLowclick}>Convert to Lower Case</button>
            <button className="btn btn-primary mx-3" onClick={cleartext}>Clear Text</button>
        </div>
        <div className = "container my-3">
            <h3>Text Summary</h3>
            <p>{text.split(" ").length} Words and {text.length} Charactrs</p>
            <p>{0.008 * text.split(" ").length}Minutes Read</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}
