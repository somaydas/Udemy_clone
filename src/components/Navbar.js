import React from 'react';
import styled from "styled-components";
import { MdMenu, MdShoppingCart } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSidebarContext } from '../context/sidebar_context';
import { useCartContext } from '../context/cart_context';
import { useState, useEffect } from 'react';

const Navbar = () => {

  const { clearCart } = useCartContext();


  const [displayusername, displayusernameupdate] = useState('');
  const [showmenu, showmenuupdateupdate] = useState(false);
  const usenavigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/login' || location.pathname === '/register') {
      showmenuupdateupdate(false);
    }
    else {
      showmenuupdateupdate(true);
      let username = sessionStorage.getItem('username');
      if (username === '' || username === null) {
        usenavigate('/login');
      } else {
        displayusernameupdate(username);
      }
    }

    // eslint-disable-next-line
  }, [location])
  const { total_items } = useCartContext();
  const { openSidebar } = useSidebarContext();
  let name = displayusername;
  if (displayusername) {
    name = "Welcome  " + name;
  }


  return (
    <div>
      <NavbarWrapper className="bg-white flex">
        <div className='container w-100'>
          <div className='brand-and-toggler flex flex-between w-100'>

            {!showmenu && <Link className='navbar-brand text-uppercase ls-1 fw-8'>
              <span>U</span>DEMY for Celebal
            </Link>}

            {showmenu && <Link to="/" className='navbar-brand text-uppercase ls-1 fw-8'>
              <span>U</span>DEMY for Celebal
            </Link>}


            {showmenu && <span><h1>{name}</h1></span>}

            <div className='navbar-btns flex'>
              {displayusername !== "admin" && showmenu && <Link to="/cart" className='cart-btn'>
                <MdShoppingCart />
                <span className='item-count-badge'>{total_items}</span>
              </Link>}
              {!showmenu && <Link to="/login" className='login'>Login</Link>}
              {!showmenu && <Link to="/register" className='login'>Signup</Link>}
              {showmenu && <Link to="/login" className='login' onClick={() => { clearCart(); }}>Signout</Link>}
              {showmenu && <Link to="/Add_course" className='login' >Add a course</Link>}

              {showmenu && <button type="button" className='sidebar-open-btn' onClick={() => openSidebar()}>
                <MdMenu />
              </button>
              }


            </div>
          </div>
        </div>
      </NavbarWrapper >
    </div >
  )
}

const NavbarWrapper = styled.nav`
  height: 80px;
  box-shadow: rgba(50, 50, 93, 0.15) 0px 16px 12px -2px, rgba(0, 0, 0, 0.2) 0px 3px 7px -3px;

  .navbar-brand{
    font-size: 23px;
    span{
      color: var(--clr-orange);
    }
  }
  .login{
    
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 10px 20px;
  margin:15px;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
  }
  .cart-btn{
    margin-right: 18px;
    font-size: 30px;
    position: relative;
    .item-count-badge{
      background-color: var(--clr-orange);
      position: absolute;
      right: -10px;
      top: -10px;
      font-size: 12px;
      font-weight: 700;
      display: block;
      width: 23px;
      height: 23px;
      color: var(--clr-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .sidebar-open-btn{
    font-size:33px;
    transition: all 300ms ease-in-out;
    &:hover{
      opacity: 0.7;
    }
  }
`;

export default Navbar;