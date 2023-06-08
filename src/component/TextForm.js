import React, { useState } from 'react'



export default function TextForm(props) {
    const [text, setText] = useState('Enter Text Here');

    const handleUpClick = () => {
        let newText = text.toLocaleUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }
    const handleLowClick = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleCopy =() => {
        let text= document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied", "success");
    };

    const handleExtraSpace = () => {
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces", "success");
    };

    // setText("New text");
    return (
        <>
            <div className="container my-3" style={{color: props.mode==='light'? 'black': 'white'}}>
                <h1>{props.headings}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{backgroundColor: props.mode==='light'? 'white': 'black', color: props.mode==='light'? 'black': 'white'}} 
                    value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button className={`btn btn-${props.mode === 'light' ? 'dark' : 'secondary'}`} onClick={handleUpClick} >Convert to UpperCase </button>
                    <button className={`btn btn-${props.mode === 'light' ? 'dark' : 'secondary'}`} onClick={handleLowClick} >Convert to LowerCase </button>
                    <button className={`btn btn-${props.mode === 'light' ? 'dark' : 'secondary'}`} onClick={handleClearClick} >Clear Text </button>
                    <button className={`btn btn-${props.mode === 'light' ? 'dark' : 'secondary'}`} onClick={handleCopy} >Copy Text </button>
                    <button className={`btn btn-${props.mode === 'light' ? 'dark' : 'secondary'}`} onClick={handleExtraSpace} >Remove Extra Spaces </button>

                </div>
            </div>
            <div className="container my-3" style={{color: props.mode==='light'? 'black': 'white'}}>
                <h2>Your Text Summary</h2>
                {/* <p>{text.split(" ").length} Words, {text.length} characters</p> */}
                <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
                <p>{text.trim()===''? 0: 0.008 * text.split(/\S+/g).length} Minutes to read</p>
                <h3>Text Preview</h3>
                <p>{text.length>0? text: "Enter Something into Text Area to Preview Here"}</p>
            </div>
        </>
    )
}
