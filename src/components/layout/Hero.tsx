import Developer from "../ui/Developer"
import Status from "../ui/Status"
import HeroHeader from "../ui/HeroHeader";
import HeroActions from "../ui/HeroActions";
import { HERO_STATS, TECH_ICONS } from "../../constants";

const Hero : React.FC = () => {
  return (
    <section className="w-full min-h-[60vh] flex flex-col py-8 px-[10%] font-[family-name:Poppins] text-center items-center justify-center lg:min-h-[80vh]">
        <div className="flex flex-col items-center space-y-8">
            <HeroHeader/>
            <HeroActions/>
        </div>
        <Status stats={HERO_STATS.stats}/>
        <Developer icons={TECH_ICONS.icons}/>
    </section>
  )
}

export default Hero