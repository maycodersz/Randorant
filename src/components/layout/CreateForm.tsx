import { IoRestaurantSharp } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import FormHeader from "../ui/FormHeader"
import FormInput from "../ui/FormInput"
import FormSwitch from "../ui/FormSwitch";
import { Link } from "react-router-dom";

const CreateForm : React.FC = () => { 
    return (
    <form className="w-full flex flex-col items-center space-y-4 lg:w-1/2 xl:space-y-6 ">
        <FormHeader Icon={IoRestaurantSharp} title="Find Restaurants" description="Set your location and budget. We’ll find matching restaurants."/>
        <FormInput label="Room Name" placeholder="Enter room name"/>
        <FormSwitch label="Only show open restaurants now" Icon={FaRegClock}/>
        <button className="w-full font-bold text-sm py-2 px-4 bg-violet-900 text-[#FFF] cursor-pointer rounded-lg hover:bg-violet-950 xl:text-base 2xl:text-lg xl:rounded-xl">Create Room</button>
        <Link to='/join' className="w-full text-left text-xs text-violet-900 lg:text-sm">Already have a room?</Link> 
    </form>
  )
}

export default CreateForm