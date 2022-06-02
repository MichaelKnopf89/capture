import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import Nav from "./components/Nav";
import {Outlet, Route, Routes, useLocation} from 'react-router-dom';
import MovieDetail from "./pages/MovieDetail";
import {AnimatePresence} from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact element={<AboutUs/>}/>
        <Route path="/aboutus" exact element={<AboutUs/>}/>
        <Route path="/work" exact element={<OurWork/>}/>
        <Route path="/work/:id" element={<MovieDetail/>}/>
        <Route path="/contactus" exact element={<ContactUs/>}/>
      </Routes>
      </AnimatePresence>
      <Outlet />
    </div>
  );
}

export default App;
