import Carousel from "./Carousel"
import type { CarouselProps } from "../../props"

const Developer : React.FC<CarouselProps> = ({icons}) => {
  return (
    <div className="flex w-full items-center justify-center space-x-6 px-4 md:w-2/3 lg:w-1/2">
        <Carousel icons={icons}/>
        <p className="flex shrink-0 items-center whitespace-nowrap rounded-full border-1 px-3 py-1 text-xs">
          Developed by: <span className="ml-1 font-bold text-gray-900">Maycoder</span>
        </p>
    </div>
  )
}

export default Developer