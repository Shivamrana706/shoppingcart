
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Banner from './component/Banner';
import Header from './component/Header';
import Navbar from './component/Navbar';
import AllSlides from './component/AllSlides';
import DetailPage from './component/DetailPage';
import Login from './component/login';
import Register from './component/Register';
import DataProvider from './context/DataProvider';
import Cart from './component/cart';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>  
        <Routes >             
          <Route path='/' element={<><Header /> <Navbar /> <Banner /> <AllSlides /></>} />
          <Route path = '/product/:id' element={<><Header /> <DetailPage /></>} />
          <Route path ='/login' element={<><Header /><Login /> </>} />
          <Route path='/register' element={<><Header /> <Register /></>} />
          <Route path= '/cart' element={<><Header /> <Cart /> </>} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
