import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Userlist from './Pages/Userlist';
import AllProduct from './Pages/AllProduct';
import CategoryListPage from './Pages/CategoryListPage';
import SingleProductPage from './Pages/SingleProductPage';
import CategoryProductViewPage from './Pages/CategoryProductViewPage';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AllProduct/>}/>
      <Route path='/users' element={<Userlist/>}/>
      <Route path='/categories' element={<CategoryListPage/>}/>
      <Route path='/products/:id' element={<SingleProductPage/>}/>
      <Route path='/categories/:id' element={<CategoryProductViewPage/>}/>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
