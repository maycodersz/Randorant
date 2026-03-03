import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import type { NavBarProps } from '../../types';

const NavBar : React.FC<NavBarProps> = ({isVisible}) => {
  return  (
    <nav className={`absolute top-16 w-full bg-[#FFF] px-[10%] flex ${!isVisible && 'hidden'} flex-col items-stretch space-y-2 py-4 text-center lg:static lg:flex lg:flex-row lg:items-center lg:w-auto lg:px-0 lg:space-x-4 lg:space-y-0`} >
        <HashLink smooth={true} to='/#how-it-works' className="font-medium text-sm text-left lg:text-nowrap lg:w-auto lg:text-center">How It Works</HashLink>
        <Link to='/join' className="font-medium text-sm lg:text-nowrap lg:w-auto">Join Room</Link>
        <Link to='/create' className="font-semibold text-sm py-1.5 px-3 bg-violet-900 text-[#FFF] rounded-lg mt-2 lg:text-nowrap lg:w-auto lg:mt-0">Create Room</Link>
    </nav>
  )
}

export default NavBar