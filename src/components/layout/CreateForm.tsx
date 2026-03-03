import FormHeader from "../shared/FormHeader"
import FormInput from "../shared/FormInput"
import FormSwitch from "../shared/FormSwitch";
import FormSlider from "../shared/FormSlider";
import FormButton from "../shared/FormButton";
import { Link } from "react-router-dom";
import { CREATE_HEADER, CREATE_INPUT, CREATE_SWITCH, CREATE_SLIDERS } from "../../constants";


const CreateForm : React.FC = () => { 


    return (
    <form className="w-full flex flex-col items-center space-y-4 lg:w-1/2 xl:space-y-6 ">
        <FormHeader {...CREATE_HEADER}/>
        <FormInput {...CREATE_INPUT}/>
        {CREATE_SLIDERS.map(slider => <FormSlider {...slider}/>)}
        <FormSwitch {...CREATE_SWITCH}/>
        <FormButton>Create Room</FormButton>
        <Link to='/join' className="w-full text-left text-xs text-violet-900 lg:text-sm">Already have a room?</Link> 
    </form>
  )
}

export default CreateForm