
import AboutCard from "../ui/AboutCard";
import {CARDS} from '../../constants/index'

const HowItWorks : React.FC = () => {
  return (
    <section id="how-it-works" className="w-full flex flex-col items-center space-y-12 py-12 px-[10%] bg-gray-200">
        <h2 className="font-bold text-3xl text-center xl:text-4xl">How It Works</h2>
        <div className="w-full flex flex-col justify-center items-center space-y-6 lg:flex-row lg:space-x-6 lg:space-y-0">
            {CARDS.map(card => (<AboutCard key={card.title} {...card}/>))}
        </div>
    </section>
  )
}

export default HowItWorks