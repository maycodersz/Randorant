import { IoRestaurantSharp } from "react-icons/io5";
import FormHeader from "../ui/FormHeader"

const CreateForm : React.FC = () => { 
    return (
    <form className="w-full flex flex-col items-center space-y-4 lg:w-1/2">
        <FormHeader Icon={IoRestaurantSharp} title="Find Restaurants" description="Set your location and budget. We’ll find matching restaurants."/>
        <button className="w-full font-semibold text-sm py-1.5 px-3 bg-violet-900 text-[#FFF] rounded-lg">Create Room</button>
    </form>
  )
}

export default CreateForm