import type { StatusProps } from "../../props";

const Status : React.FC<StatusProps> = ({statuses}) => {
  return (
    <div className="flex justify-center py-8">
        {statuses && statuses.length && statuses.map((status, index) => {
            const middleIndex = index != 0 && index != statuses.length - 1;
            return(
                <div className={`flex flex-col space-y-1 py-2 px-4 ${middleIndex && 'border-gray-900 border-l-1 border-r-1'} md:px-8 md:py-4 lg:px-10 lg:py-5`}>
                    <h1 className="font-bold text-sm md:text-lg lg:text-xl">{status.status}</h1>
                    <p className="text-gray-900 text-xs md:text-sm lg:text-base">{status.description}</p>
                </div>
            );
        })}
    </div>
  )
}

export default Status