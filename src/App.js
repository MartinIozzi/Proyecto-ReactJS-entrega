import './App.css';
import './componentes/header/Navbar.css'
import Navbar from './componentes/header/Navbar';
import ItemListContainer from './componentes/ItemListContainer';


/*import Body from './componentes/body/Body'; (lo utilizo en otra entrega)*/


function App() {
  
  const userName = 'Martin';
  const greeting = 'Nuevos productos a su disposición';
  const cuenta = 0;
  
  
  return (
    <>
    <Navbar name={userName} carro={cuenta} />
    <ItemListContainer greeting={greeting} />
    </>
  );
  
}

export default App;
