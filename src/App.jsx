import "bootstrap/dist/css/bootstrap.min.css";
import PaginaPrincipal from './components/views/PaginaPrincipal'
import './App.css'
import 'react-bootstrap'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './Components/common/footer';
import MenuNavegacion from "./components/common/menuNavegacion";

function App() {
  return (
    <>
    <BrowserRouter>
    <MenuNavegacion></MenuNavegacion>
    <Routes>
      <Route exact path='/' element={<PaginaPrincipal></PaginaPrincipal>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App;
