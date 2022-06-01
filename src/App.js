import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import Nav from "./components/Nav";
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" exact element={<AboutUs/>}/>
        <Route path="/aboutus" exact element={<AboutUs/>}/>
        <Route path="/ourwork" exact element={<OurWork/>}/>
        <Route path="/contactus" exact element={<ContactUs/>}/>
      </Routes>
    </div>
  );
}

export default App;
