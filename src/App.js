import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import ProductList from "./components/ProuductList";
import CheckoutAd from "./components/CheckoutAd";
import ShoppingBasket from "./components/ShoppingBasket";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
 import SignUp from "./components/SignUp/SignUp"
import Beauty from "./components/Beauty";
import Fashion from "./components/Fashion";
import Kitchen from "./components/Kitchen";
import Mobile from "./components/Mobile";
import Electronics from "./components/Electronics";
import Books from "./components/Books";
import Sports from "./components/Sports";
import HomeDecor from "./components/HomeDecor";
import Essentials from "./components/Essentials";
import Seller from "./components/Seller/Seller";
import EditUser from "./components/EditUser/EditUser";
import User from "./components/User/User";


function App() {
  return (
    <Router>
      <Header/>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={
          <React.Fragment>
            <Banner/>
            {/* <ProductList/> */}
          </React.Fragment>
        }/>
         <Route exact path='/Home' element={
          <React.Fragment>
            <Banner/>
            {/* <ProductList/> */}
          </React.Fragment>
        }/>
        <Route exact path='/checkout' element={
          <React.Fragment>
            <CheckoutAd/>
            <ShoppingBasket/>
          </React.Fragment>
        } />
           <Route exact path='/Beauty' element={<Beauty/>
          // <React.Fragment>
          //   {/* <Banner/> */}
          //   <ProductList/>
          // </React.Fragment>
        }/>
           <Route exact path='/Fashion' element={<Fashion/>
          // <React.Fragment>
          //   {/* <Banner/> */}
          //   <ProductList/>
          // </React.Fragment>
        }/>
           <Route exact path='/Mobile' element={<Mobile/>
          // <React.Fragment>
          //   {/* <Banner/> */}
          //   <ProductList/>
          // </React.Fragment>
        }/>
           <Route exact path='/Kitchen' element={<Kitchen/>
          // <React.Fragment>
          //   {/* <Banner/> */}
          //   <ProductList/>
          // </React.Fragment>
        }/>
           <Route exact path='/Electronics' element={<Electronics/>
          // <React.Fragment>
          //   {/* <Banner/> */}
          //   <ProductList/>
          // </React.Fragment>
        }/>
           <Route exact path='/Books' element={<Books/>
          // <React.Fragment>
          //   {/* <Banner/> */}
          //   <ProductList/>
          // </React.Fragment>
        }/>
           <Route exact path='/Sports' element={<Sports/>
          // <React.Fragment>
          //   {/* <Banner/> */}
          //   <ProductList/>
          // </React.Fragment>
        }/>
           <Route exact path='/HomeDecor' element={<HomeDecor/>
          // <React.Fragment>
          //   {/* <Banner/> */}
          //   <ProductList/>
          // </React.Fragment>
        }/>
           <Route exact path='/Essentials' element={<Essentials/>
          // <React.Fragment>
          //   {/* <Banner/> */}
          //   <ProductList/>
          // </React.Fragment>
        }/>
         <Route exact path='/Login' element={
          
           <Login/>
         
        } />
         <Route exact path='/SignUp' element={
          
          <SignUp/>
        
       } />
       <Route exact path='/Seller' element={
          
          <Seller/>
        
       } />
        <Route exact path='/EditUser' element={
          
          <EditUser/>
        
       } />
        <Route exact path='/User' element={
          
          <User/>
        
       } />
         {/* <Route exact path='/SignUp' element={
          
          <SignUp/>
        
       } /> */}
       
      </Routes>
    </Router>
  );
}

export default App;
