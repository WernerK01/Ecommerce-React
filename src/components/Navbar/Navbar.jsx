import './Navbar.css';
import { CartWidget } from '../CartWidget/CartWidget';

import { BsHandbagFill } from "react-icons/bs";
import { BsHouseDoorFill } from "react-icons/bs";
import { BsBookFill } from "react-icons/bs";
import { BsPcDisplay } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";


export const Navbar = () => {
  return (
    <div className="navbar sticky-top">
        <div className="container-fluid">
            <div className='navbar-brand'>*Icono*</div>
            <div className='text-center d-flex'>
                <ul className='navbar-nav mb-2 mb-lg-0 justify-content-center align-items-center'>
                    <li className='nav-item lv1-nav'><span className='nav-link'>
                            <BsHandbagFill /> Ropa y Accesorios
                        </span>
                    </li>
                    <li className="nav-item lv1-nav"><span className='nav-link'>
                            <BsPcDisplay /> Computación
                        </span>
                    </li>
                    <li className="nav-item lv1-nav"><span className='nav-link'>
                            <BsHouseDoorFill /> Hogar
                        </span>
                    </li>
                    <li className="nav-item lv1-nav"><span className='nav-link'>
                            <BsBookFill /> Libros y Comics
                        </span>
                    </li>
                </ul>
            </div>
            <span class="navbar-text"><FaShoppingCart /> <CartWidget /></span>
        </div>
    </div>
  )
}