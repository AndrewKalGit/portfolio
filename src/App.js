import './App.css';
import Nav from './Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Skills from './Skills';
import Projects from './Projects';
import Resume from './Resume';
import Summary from './Summary';
import Footer from './Footer'

function App() {
  return (
    <>
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<><Summary></Summary><Skills></Skills><Projects></Projects><Resume></Resume></>}></Route>
      </Routes>
    </BrowserRouter>
      <Footer></Footer>
    </>
  );
}

export default App;
