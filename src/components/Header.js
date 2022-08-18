import React from "react"
import './header.scss';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import logo from './logo.png'

const Header = () => {
  const { myReducer } = useStateValue();
  const [ data ] = myReducer;
  
  return(
    <header className="header">
      <div>
      <button className='lgobt'><img src={logo} className="logo" alt="logo" /></button>
      </div>
      <div className="header__logo">
        <Link to="/">
          {/* <AddBusinessIcon fontSize="large"/>&nbsp; */}

          <span className="header__logoName space"><h1>OlaKart</h1></span>
        </Link>
      </div>
      {/* <div className="header__search">
        <input />
        <SearchIcon fontSize="small" className="header__searchIcon"/>
      </div> */}
      <div className="header__nav">
        <div className="header__nav__user">
        <span className="header__nav__lineOne">Hello Guest</span>
          <Link to="/Login">
         
          <span className="header__nav__lineTwo">Sign In</span>
          </Link>
        </div>
        <div className="header__nav__itemBasket">
          <Link to="/checkout">
            <ShoppingCartIcon fontSize="small"/>&nbsp;{data.cartList?.length}&nbsp;Cart
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header;