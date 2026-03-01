import { BsHouseAddFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { GiChampions } from "react-icons/gi";
import AboutCard from "../ui/AboutCard";
import type { IconType } from "react-icons";

type Card = {
    title : string;
    Icon : IconType;
    description : string;
}

const HowItWorks : React.FC = () => {

    const cards : Card[] = [
        {title : "Create" , Icon : BsHouseAddFill, description : "Set your location and budget. We’ll find matching restaurants."}, 
        {title : "Join", Icon : FaUserFriends, description : "Share the unique room code with friends via any messaging app. No accounts needed."}, 
        {title : "Decide", Icon : GiChampions, description : "Vote on restaurant cards. Watch votes tally up and celebrate the winner."}]

  return (
    <section id="how-it-works" className="w-full flex flex-col items-center space-y-12 py-12 px-[10%] bg-gray-200">
        <h1 className="font-bold text-3xl text-center xl:text-4xl">How It Works</h1>
        <div className="w-full flex flex-col justify-center items-center space-y-6 lg:flex-row lg:space-x-6 lg:space-y-0">
            {cards.map(card => (<AboutCard title={card.title} Icon={card.Icon} description={card.description}/>))}
        </div>
    </section>
  )
}

export default HowItWorks