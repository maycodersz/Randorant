
import FormHeader from "../shared/FormHeader"
import FormInput from "../shared/FormInput";
import { Link } from "react-router-dom";
import FormSwitch from "../shared/FormSwitch";
import FormButton from "../shared/FormButton";
import { JOIN_HEADER, JOIN_INPUTS, JOIN_SWITCH } from "../../constants";

const JoinForm : React.FC = () => { 
    return (
    <form className="w-full flex flex-col items-center space-y-4 lg:w-1/2 xl:space-y-6">
        <FormHeader {...JOIN_HEADER}/>
        {JOIN_INPUTS.map(input => <FormInput {...input}/>)}
        <FormSwitch {...JOIN_SWITCH}/>
        <FormButton>Join Room</FormButton>
        <Link to='/create' className="w-full text-left text-xs text-violet-900 lg:text-sm">Don’t have a room code?</Link> 
    </form>
  )
}

export default JoinForm