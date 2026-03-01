import NavBar from "../ui/NavBar"
import { GrRestaurant } from "react-icons/gr";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import {useState} from 'react';

const Header : React.FC = () => {
    const [visible, setVisible] = useState<boolean>(false);

  return (
    <header className="relative bg-[#FFF] z-11 flex flex-col justify-between items-center py-6 px-[10%] font-[family-name:Poppins] lg:flex-row lg:py-4">
        <div className="w-full flex justify-between items-center lg:w-auto">
            <div className="flex items-center space-x-2">
                <Link to='/'><GrRestaurant className="text-2xl"/></Link>
                <Link to='/' className="font-bold text-xl">Randorant</Link>
            </div>
            <IoMenu onClick={() => setVisible(!visible)} className='text-3xl lg:hidden'/>
        </div>
        <NavBar visible={visible}/>
    </header>
  )
}

export default Header