import { BrowserRouter as Router } from "react-router-dom";
import Content from "./Component/Content";
import Footer from "./Component/Footer";
import Header from "./Component/Header.js";
// import Navbar from "./Component/Navbar.js";


function App() {

  return (
    <Router>
    <div className="App">
       <Header/>
       {/* <Navbar/> */}
       <Content/>
       <Footer/>
    </div>
    </Router>
  );
}

export default App;
