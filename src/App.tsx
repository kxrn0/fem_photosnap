import { useEffect, useMemo } from "react";
import { Switch, Route, useLocation } from "wouter";

import SCApp from "./App.styled";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Stories from "./pages/Stories/Stories";
import Features from "./pages/Features/Features";
import Pricing from "./pages/Pricing/Pricing";

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
        <Route path="/fem_photosnap/features">
          <Features breakPoints={breakPoints} />
        </Route>
        <Route path="/fem_photosnap/pricing">
          <Pricing breakPoints={breakPoints} />
        </Route>
        <Route>
          <div className="not-found">
            <div className="container">
              <h1 className="fs-h1">404</h1>
              <h3 className="fs-h3">Not Found</h3>
            </div>
          </div>
        </Route>
      </Switch>
      <Footer />
    </SCApp>
  );
}

export default App;
