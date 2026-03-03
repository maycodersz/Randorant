import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

const HeroActions : React.FC = () => {
  return (
    <div className="flex justify-center space-x-4">
        <Link to='/create' aria-label="Create a new voting room" className="text-sm bg-violet-900 font-bold border-violet-900 border-1 text-[#FFF] py-2 px-4 rounded-lg md:text-base lg:text-lg lg:py-3 lg:px-6 xl:text-xl xl:py-4 xl:px-8 2xl:text-2xl">Create Room</Link>
        <HashLink smooth={true} to='/#how-it-works' aria-label="See how it works" className="text-sm font-bold text-gray-800 border-gray-800 border-1 py-2 px-4 rounded-lg lg:text-lg md:text-base lg:py-3 lg:px-6 xl:text-xl xl:py-4 xl:px-8 2xl:text-2xl">See How It Works</HashLink>
    </div>
  )
}

export default HeroActions