import './Navbar.css';
import { CartWidget } from '../../common/CartWidget/CartWidget';
import { Link } from "react-router";

import { IoGameController } from "react-icons/io5";
import { RiComputerFill } from "react-icons/ri";


import { BsThreeDots } from "react-icons/bs";

export const Navbar = () => {
  return (
    <div>
        <header className='absolute inset-x-0 top-0 navbar'>
            <nav aria-label='Global' className='flex items-center justify-between p-6 lg:px-8'>
                <div className='flex lg:flex-1'>
                    <Link to={`/`}>
                      <img src="https://res.cloudinary.com/dzhlrjmyy/image/upload/v1752907022/icon_b664da.png" className='h-8 w-auto' />
                    </Link>
                </div>
                <div className='lg:flex lg:gap-x-12'>
                  <Link to={'/category/Gamer'} className='font-semibold nav-link lv1-nav items-center gap-1'><IoGameController /> Gaming</Link>
                  <Link to={'/category/Normal'} className='font-semibold nav-link lv1-nav items-center gap-1'><RiComputerFill /> Normal</Link>
                </div>
                <div className='lg:flex lg:flex-1 lg:justify-end'>
                  <CartWidget />
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Navbar;