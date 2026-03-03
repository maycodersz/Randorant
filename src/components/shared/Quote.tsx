import { MdOutlineSentimentVerySatisfied } from "react-icons/md";

type QuoteProps = {
    quote : string;
}

const Quote : React.FC<QuoteProps> = ({quote}) => {
  return (
    <div className="w-1/2 hidden flex-col items-start text-left space-y-4 lg:flex">
        <MdOutlineSentimentVerySatisfied className="text-6xl xl:text-7xl 2xl:text-9xl"/>
        <h1 className="font-bold text-2xl xl:text-3xl 2xl:text-4xl">"{quote}"</h1>
        <p className="xl:text-xl 2xl:text-2xl">- Maycoder</p>
    </div>
  )
}

export default Quote