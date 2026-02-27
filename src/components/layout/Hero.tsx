import Carousel from "../ui/Carousel";
import Developer from "../ui/Developer"
import Status from "../ui/Status"
import { FaHtml5, FaJsSquare, FaCss3Alt, FaReact  } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiTailwindcss  } from "react-icons/si";


const Hero : React.FC = () => {
    const statuses = [
        {status: '860+', description:'Room Created'},
        {status: '96%', description:'Satisfaction Rate'},
        {status: '5 min', description:'Average Time'},
    ]

    const icons = [FaHtml5, FaCss3Alt, FaJsSquare, FaReact, BiLogoTypescript, SiTailwindcss];

  return (
    <section className="w-full flex flex-col py-8 px-[10%] font-[family-name:Poppins] text-center items-center">
        <div className="flex flex-col items-center space-y-8">
            <div className="flex flex-col items-center space-y-4 xl:space-y-8 2xl:space-16">
                <p className="font-bold bg-violet-900 text-[#FFF] text-xs py-1 px-4 rounded-full md:text-sm lg:text-base xl:text-base">Random Restaurant Picker</p>
                <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Can’t Decide Where to Eat?</h1>
                <p className="text-sm max-w-3/4 md:text-base lg:text-lg xl:text-xl">Create a voting room, invite friends, and discover nearby restaurants that match everyone's preferences through real-time voting.</p>
            </div>
            <div className="flex justify-center space-x-4">
                <button className="text-sm bg-violet-900 font-bold border-violet-900 border-1 text-[#FFF] py-2 px-4 rounded-lg md:text-base lg:text-lg lg:py-3 lg:px-6 xl:text-xl xl:py-4 xl:px-8 2xl:text-2xl">Create Room</button>
                <button className="text-sm font-bold text-gray-800 border-gray-800 border-1 py-2 px-4 rounded-lg lg:text-lg md:text-base lg:py-3 lg:px-6 xl:text-xl xl:py-4 xl:px-8 2xl:text-2xl">See How It Works</button>
            </div>
        </div>
        <Status statuses={statuses}/>
        <Developer icons={icons}/>
    </section>
  )
}

export default Hero