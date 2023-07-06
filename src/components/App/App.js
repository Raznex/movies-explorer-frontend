import './App.css';
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
// import PageNotFound from "../PageNotFound/PageNotFound";
// import Main from "../Main/Main";
// import Profile from "../Profile/Profile";
// import Register from "../Register/Register";
// import Movies from "../Movies/Movies";
// import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/*<PageNotFound/>*/}
      <Header/>
      {/*<Main/>*/}
      {/*<Movies/>*/}
      {/*<Register/>*/}
      {/*<Profile/>*/}
      <Login/>
      <Footer/>
    </div>
  );
}

export default App;
