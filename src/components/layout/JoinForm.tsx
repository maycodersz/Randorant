
import { BsFillHouseFill } from "react-icons/bs";
import FormHeader from "../ui/FormHeader"

const JoinForm : React.FC = () => { 
    return (
    <form className="w-full flex flex-col items-center space-y-4 lg:w-1/2">
        <FormHeader Icon={BsFillHouseFill} title="Join your friends" description="Enter the room code and your display name to join your friend's restaurant voting session."/>
        <button className="w-full font-semibold text-sm py-1.5 px-3 bg-violet-900 text-[#FFF] rounded-lg">Join Room</button>
    </form>
  )
}

export default JoinForm