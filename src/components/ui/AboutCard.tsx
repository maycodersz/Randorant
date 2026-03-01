import type { AboutCardProps } from "../../props"

const AboutCard : React.FC<AboutCardProps> = ({title, Icon, description}) => {
  return (
    <div className="w-full flex flex-col justify-center items-center space-y-3 py-8 px-6 text-center shadow-md rounded-xl bg-[#FFF] cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl lg:aspect-square lg:h-full 2xl:aspect-auto 2xl:min-h-[300px]">
        <Icon className='text-4xl text-violet-900'/>
        <h1 className='font-bold text-2xl mb-2 lg:text-3xl xl:text-3xl'>{title}</h1>
        <p className='font-[family-name:Inter] text-lg leading-[1.6] text-gray-700 xl:text-xl'>{description}</p>
    </div>
  )
}

export default AboutCard