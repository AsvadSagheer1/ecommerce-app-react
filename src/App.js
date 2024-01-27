import React from 'react';
import Main from './components/main/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FilteredProducts from './components/FilteredProducts/FilteredProducts';
import SingleProduct from './components/FilteredProducts/SingleProduct';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main></Main>} />
          <Route
            path='/filteredProducts/:type'
            element={<FilteredProducts></FilteredProducts>}
          ></Route>
          <Route
            path='/filteredProducts/:type/:id'
            element={<SingleProduct></SingleProduct>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;