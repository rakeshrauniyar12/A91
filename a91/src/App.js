import { BrowserRouter as Router } from "react-router-dom";
import Content from "./Component/Content";
import Footer from "./Component/Footer";
import Header from "./Component/Header.js";
import FilterStateProvider from "./Component/FIlterStateProvider.js";
import { UserContext } from "./Component/UserContext.js";
function App() {
  return (
    <Router>
      <UserContext>
      <FilterStateProvider>
        <div className="App">
          <Header />
          <Content />
          <Footer />
        </div>
      </FilterStateProvider>
      </UserContext>
    </Router>
  );
}

export default App;
