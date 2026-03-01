
import { BsFillHouseFill } from "react-icons/bs";
import FormHeader from "../ui/FormHeader"
import FormInput from "../ui/FormInput";
import { Link } from "react-router-dom";

const JoinForm : React.FC = () => { 
    return (
    <form className="w-full flex flex-col items-center space-y-4 lg:w-1/2 xl:space-y-6">
        <FormHeader Icon={BsFillHouseFill} title="Join your friends" description="Enter the room code and your display name to join your friend's restaurant voting session."/>
        <FormInput label="Room Code" placeholder="Enter your 6-digit room code"/>
        <FormInput label="Display Name" placeholder="Enter your display name"/>
        <button className="w-full font-bold text-sm py-2 px-4 bg-violet-900 text-[#FFF] rounded-lg xl:text-base 2xl:text-lg xl:rounded-xl">Join Room</button>
        <Link to='/create' className="w-full text-left text-xs text-violet-900 lg:text-sm">Don’t have a room code?</Link> 
    </form>
  )
}

export default JoinForm