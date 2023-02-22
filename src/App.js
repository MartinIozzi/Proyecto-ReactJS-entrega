import './App.css';
import './componentes/header/Navbar.css';
import Navbar from './componentes/header/Navbar';
import ItemListContainer from './containers/ItemListContainer';
import Item from './containers/Item';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  
  const userName = 'Martin';
  const greeting = 'Novedades';
  
  return (
    <BrowserRouter>

    <Navbar name={userName} />

    <Routes>
      <Route path='/' element={<ItemListContainer greeting={greeting} />} />
    </Routes>
    
    </BrowserRouter>
  );
  
}

export default App;
