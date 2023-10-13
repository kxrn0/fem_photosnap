import { useEffect, useMemo } from "react";
import { Switch, Route, useLocation } from "wouter";

import SCApp from "./App.styled";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Stories from "./pages/Stories/Stories";

function App() {
  const [location] = useLocation();
  const breakPoints = useMemo(
    () => ({ desktop: 1350, tablet: 700, mobile: 500 }),
    []
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <SCApp>
      <Navbar />
      <Switch>
        <Route path="/fem_photosnap/">
          <Home breakPoints={breakPoints} />
        </Route>
        <Route path="/fem_photosnap/stories">
          <Stories breakPoints={breakPoints} />
        </Route>
      </Switch>
      <Footer />
    </SCApp>
  );
}

export default App;
