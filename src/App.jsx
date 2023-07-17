import './App.css'
import 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import PaginaPrincipal from './components/views/PaginaPrincipal'
import Footer from './Components/common/footer';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<PaginaPrincipal></PaginaPrincipal>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App;
