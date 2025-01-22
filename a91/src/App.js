import { BrowserRouter as Router } from "react-router-dom";
import Content from "./Component/Content";
import Footer from "./Component/Footer";
import Header from "./Component/Header.js";
import FilterStateProvider from "./Component/FIlterStateProvider.js";

function App() {
  return (
    <Router>
      <FilterStateProvider>
        <div className="App">
          <Header />
          <Content />
          <Footer />
        </div>
      </FilterStateProvider>
    </Router>
  );
}

export default App;
