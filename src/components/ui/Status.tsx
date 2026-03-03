import type { HeroStatsProps } from "../../types";

const Status : React.FC<HeroStatsProps> = ({stats}) => {
    if(!stats?.length) return null;

  return (
    <div aria-label="Platform statistics" className="flex justify-center py-8">
        {stats.map((status, index) => {
            const isMiddle = index !== 0 && index !== stats.length - 1;
            return(
                <div key={status.value} className={`flex flex-col space-y-1 py-2 px-4 ${isMiddle && 'border-gray-900 border-l-1 border-r-1'} md:px-8 md:py-4 lg:px-10 lg:py-5`}>
                    <h1 className="font-bold text-sm md:text-lg lg:text-xl">{status.value}</h1>
                    <p className="text-gray-900 text-xs md:text-sm lg:text-base">{status.description}</p>
                </div>
            );
        })}
    </div>
  )
}

export default Status