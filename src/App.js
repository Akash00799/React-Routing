import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import User from "./components/User";
import Filter from "./components/Filter";
import Contact from "./components/Contact";
// import Channel from "./components/Channel";
import Company from "./components/Company";
import Channel from "./components/Channel";
import Other from "./components/Other";
import Login from "./components/Login";
import Protected from "./components/Protected";
// import Other from "./components/Other";
// import Page404 from "./components/Page404";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Protected Component={Home} />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:name" element={<User />} />
          <Route path="/filter" element={<Filter />} />
          {/* <Route path="/*" element={<Page404/>}/> */}
          <Route path="/*" element={<Navigate to="/" />} />
          <Route path="/Contact" element={<Contact />}>
            <Route path="company" element={<Company/>}/>
            <Route path="channel" element={<Channel/>}/>
            <Route path="other" element={<Other/>} />
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
