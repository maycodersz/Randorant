import NavBar from "../ui/NavBar"
import { GrRestaurant } from "react-icons/gr";
import { IoMenu } from "react-icons/io5";
import {useState} from 'react';

const Header : React.FC = () => {
    const [visible, setVisible] = useState<boolean>(false);

  return (
    <header className="flex flex-col justify-between items-center py-6 px-[10%] font-[family-name:Poppins] lg:flex-row lg:py-4">
        <div className="w-full flex justify-between items-center lg:w-auto">
            <div className="flex items-center space-x-2">
                <GrRestaurant className="text-2xl"/>
                <h1 className="font-bold text-xl">Randorant</h1>
            </div>
            <IoMenu onClick={() => setVisible(!visible)} className='text-3xl lg:hidden'/>
        </div>
        <NavBar visible={visible}/>
    </header>
  )
}

export default Header