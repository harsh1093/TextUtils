
import './App.css';
import Alert from './component/Alert';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode=()=>{
    if(mode ==='dark'){
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert("Light Mode has been selected", "success");
      document.title='TextUtils- Home';

    }else{
      setMode('dark');
      document.body.style.backgroundColor= 'black';
      showAlert("Dark Mode has been selected", "success");
      document.title='TextUtils- Dark Mode';
    }
  };

  return (
    <>
    <Router>
      <Navbar title= "Text Utils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
          <Route exact path="/about" element={<About mode={mode} />}/>
          <Route excat path="/" element={<TextForm headings= "Enter Text to Analyse" mode= {mode} showAlert={showAlert}/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

