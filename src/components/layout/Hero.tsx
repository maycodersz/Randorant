import Status from "../ui/Status"

const Hero : React.FC = () => {
  return (
    <section className="w-full py-8 px-[10%] font-[family-name:Poppins] text-center">
        <div className="flex flex-col items-center space-y-8">
            <div className="flex flex-col items-center space-y-4 xl:space-y-8 2xl:space-16">
                <p className="font-bold bg-violet-900 text-[#FFF] text-xs py-1 px-4 rounded-full lg:text-sm xl:text-base 2xl:text-base">Random Restaurant Picker</p>
                <h1 className="font-bold text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">Can’t Decide Where to Eat?</h1>
                <p className="text-sm max-w-3/4 lg:text-base xl:text-lg 2xl:text-xl">Create a voting room, invite friends, and discover nearby restaurants that match everyone's preferences through real-time voting.</p>
            </div>
            <div className="flex justify-center space-x-4">
                <button className="text-sm bg-violet-900 font-bold border-violet-900 border-1 text-[#FFF] py-2 px-4 rounded-lg md:text-base lg:text-lg lg:py-3 lg:px-6 xl:text-xl xl:py-4 xl:px-8 2xl:text-2xl">Create Room</button>
                <button className="text-sm font-bold text-gray-800 border-gray-800 border-1 py-2 px-4 rounded-lg lg:text-lg md:text-base lg:py-3 lg:px-6 xl:text-xl xl:py-4 xl:px-8 2xl:text-2xl">See How It Works</button>
            </div>
        </div>
        <Status statuses={[]}/>
    </section>
  )
}

export default Hero