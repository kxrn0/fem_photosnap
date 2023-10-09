import { Switch, Route } from "wouter";

import SCApp from "./App.styled";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <SCApp>
      <Navbar />
      <Switch>
        <Route path="/fem_photosnap/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </SCApp>
  );
}

export default App;
