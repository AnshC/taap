import './App.css';
import Home from './components/home';
import Navbar from './components/navbar'
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}/>
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
