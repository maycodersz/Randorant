const HeroHeader : React.FC = () => {
  return (
    <header className="flex flex-col items-center space-y-4 xl:space-y-8 2xl:space-16">
        <span className="font-bold bg-violet-900 text-[#FFF] text-xs py-1 px-4 rounded-full md:text-sm lg:text-base xl:text-base">Random Restaurant Picker</span>
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Can’t Decide Where to Eat?</h1>
        <p className="text-sm max-w-3/4 md:text-base lg:text-lg xl:text-xl">Create a voting room, invite friends, and discover nearby restaurants that match everyone's preferences through real-time voting.</p>
    </header>
  )
}

export default HeroHeader