import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cards from './components/cards';
import Edit from './components/edit';
import Provider from './Provider';
import Home from './components/home';


function App() {

  return (
    <div id="container">
      <div id="main" className='align-items-center justify-content-center'>
      <Provider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/characters" element={<Cards/>} />
            <Route path="/edit/:id" element={<Edit/>} />
          </Routes>
        </BrowserRouter>
      </Provider>
      </div>
    </div>
  );
}

export default App;
