import './App.css';
import Header from "../Header/Header";
// import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
// import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      {/*<Main/>*/}
      <Movies/>
      <Footer/>
    </div>
  );
}

export default App;
