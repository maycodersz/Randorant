import type { CarouselProps } from "../../props"

const Carousel : React.FC<CarouselProps> = ({icons}) => {
  return (
        <div className="w-1/2 relative overflow-hidden p-6">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-1/3 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-1/3 bg-gradient-to-l from-white to-transparent" />
            <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
                {icons.map((Icon, index) => (
                <div key={index} className="flex shrink-0 px-1">
                    <Icon className="cursor-pointer text-3xl text-gray-600 transition-colors hover:text-violet-900 lg:text-4xl xl:text-5xl" />
                </div>
                ))}
                {icons.map((Icon, index) => (
                <div key={index} className="flex shrink-0 px-1">
                    <Icon className="cursor-pointer text-3xl text-gray-600 transition-colors hover:text-violet-900 lg:text-4xl xl:text-5xl" />
                </div>
                ))}
            </div>
        </div>
    )
}

export default Carousel